import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaRegSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

const Header = ({ dark, setDark }) => {
      const navigate = useNavigate()
      const DarkTheme = {
            backgroundColor:"#1e293b",
            color:"white"
      }
      const LightTheme = {
            backgroundColor:"white",
            color:"black"
      }
      return (
            <header style={(dark===true)?DarkTheme:LightTheme} className='h-[64px] w-full fixed z-10 top-0 left-0 shadow-xl'>
                  <nav className='h-full w-full p-2 flex justify-between items-center mx-7'>
                        <div onClick={() => {
                              navigate("/")
                        }} className=' flex justify-center items-center h-full gap-4 cursor-pointer'>
                              <img src="/country.png" alt="icon" className='h-full ' />
                              <div className='font-bold text-2xl font-comforta'>Find Country</div>
                        </div>
                        <div onClick={(e)=>{
                              e.preventDefault();
                              setDark(!dark)
                              localStorage.setItem("dark",!dark);
                        }} className='font-bold mr-14 cursor-pointer'>
                              {
                                    (dark == true) ?
                                          <FaRegSun className='text-2xl'/> :
                                          <FaMoon className='text-black'/>
                              }
                        </div>
                  </nav>
            </header>
      )
}

export default Header