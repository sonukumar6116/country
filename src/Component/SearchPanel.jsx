import React from 'react'
import { FcClearFilters } from "react-icons/fc";

const SearchPanel = ({ query,
      setQuery,
      dark,
      selectRegion,
      setSelectRegion }) => {

      const DarkTheme = {
            backgroundColor: "#1e293b",
            color: "white"
      }
      const LightTheme = {
            backgroundColor: "white",
            color: "black"
      }

      const handleChange = (e) => {
            e.preventDefault();
            setQuery(e.target.value)
            localStorage.setItem("query",e.target.value)
      }
      return (
            <div style={(dark === true) ? DarkTheme : LightTheme} className='w-full flex justify-between px-5 py-3 fixed top-[64px] z-20 shadow-md'>
                  <div className='flex'>
                        <p className='font-bold mr-4 md:text-2xl font-comforta'>Search :</p>
                        <input style={(dark === true) ? {
                              backgroundColor: "#f8f9fa"
                        } : {
                              backgroundColor: "#e9ecef",
                        }}
                              onChange={handleChange}
                              type="text"
                              name="search"
                              id="search"
                              value={query}
                              className='font-comforta p-2 mr-6 outline-none font-semibold text-black h-[80%] rounded-md' />
                  </div>

                  <div className='flex gap-4 items-center '>
                        {
                              selectRegion.length > 0 &&
                              <div onClick={(e) => {
                                    e.preventDefault();
                                    setSelectRegion("");
                                    localStorage.setItem("region","")
                              }}
                                    className='text-2xl cursor-pointer hover:scale-125'>
                                    <FcClearFilters />
                              </div>
                        }
                        <select style={(dark === true) ? {
                              backgroundColor: "#f8f9fa"
                        } : {
                              backgroundColor: "#e9ecef",
                        }} className='font-comforta text-black outline-none rounded-md w-[200px] font-bold p-1'
                              value={selectRegion}
                              onChange={(e) => {
                                    setSelectRegion(e.target.value);
                                    localStorage.setItem("region",e.target.value)
                              }}
                        >
                              <option hidden value="">Select Region</option>
                              <option value="asia">Asia</option>
                              <option value="americas">Americas</option>
                              <option value="africa">Africa</option>
                              <option value="oceania">Oceania</option>
                              <option value="europe">Europe</option>
                        </select>
                  </div>
            </div>
      )
}

export default SearchPanel