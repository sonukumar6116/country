import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountryShimmer from './Shimmer/Country.shimmer';
import SearchPanel from './SearchPanel';


const Country = ({ dark }) => {

      const [countriesData, setCountriesData] = useState([]);
      const [query, setQuery] = useState("")
      const [selectRegion, setSelectRegion] = useState("")

      const DarkTheme = {
            backgroundColor: "#1e293b",
            color: "white"
      }
      const LightTheme = {
            backgroundColor: "white",
            color: "black"
      }

      useEffect(() => {
            let localQuery = localStorage.getItem("query");
            if (localQuery) {
                  setQuery(localQuery);
            } 
            let localRegion = localStorage.getItem("region");
            if (localRegion) {
                  setSelectRegion(localRegion);
            } 
      }, [setQuery,setSelectRegion])


      useEffect(() => {
            // const url = 'https://restfulcountries.com/api/v1/countries';
            // const options = {
            //       method: 'GET',
            //       headers: {
            //             "Authorization": 'Bearer 838|qdxyi8mhiTy5Vt96Nu9mRgmgsNHpOgoSJEUxYDAY',
            //             'Accept': 'application/json'
            //       }
            // };
            fetch('https://restcountries.com/v3.1/all')
                  .then((res) => res.json())
                  .then((data) => {
                        setCountriesData(data)
                        console.log(typeof countriesData)
                  })
      }, [])

      return ((countriesData.length > 0) ?
            <div style={(dark === true) ? DarkTheme : LightTheme} className='min-h-svh relative top-[120px]'>

                  <SearchPanel
                        query={query}
                        setQuery={setQuery}
                        selectRegion={selectRegion}
                        setSelectRegion={setSelectRegion}
                        dark={dark} />

                  < div className='container p-5 font-bold flex justify-start flex-wrap gap-[3%]' >
                        {
                              countriesData
                                    .filter(country =>
                                          country?.name.common.toLowerCase().includes(query))
                                    .filter(country =>
                                          country?.region.toLowerCase().includes(selectRegion))
                                    .map(country => (
                                          <CountryCard
                                                key={country?.name.common}
                                                country={country}
                                                dark={dark}
                                          />
                                    ))
                        }
                  </div >
            </div> :
            <CountryShimmer />
      )
}

export default Country