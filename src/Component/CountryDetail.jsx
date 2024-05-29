import React, { useEffect, useRef, useState } from 'react'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import CountryDetailShimmer from './Shimmer/CountryDetail.shimmer'

const CountryDetail = ({ dark }) => {

      const DarkTheme = {
            backgroundColor: "#334155",
            color: "white"
      }
      const LightTheme = {
            backgroundColor: "#f2f2e5",
            color: "black"
      }

      const { state, search } = useLocation()
      const [data, setData] = useState(null);
      const navigate = useNavigate();
      const [change, setChange] = useState(false)

      const handleClick = (e) => {
            e.preventDefault();
            setChange(!change)
            setData(null)
            navigate({
                  pathname: "/country",
                  search: `?${createSearchParams({
                        code: e.target?.id
                  })}`
            })

      }

      const query = new URLSearchParams(search);
      const code = query.get('code');

      const fetchCountry = async () => {
            try {
                  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
                  const resdata = await res?.json();
                  setData({ ...resdata?.[0] });
                  console.log("dataFetch", data)
            } catch (error) {
                  navigate("/")
                  alert("Something went Wrong")
            }
      }

      useEffect(() => {
            console.log("rendering")
            if (state) {
                  setData({ ...state });
                  return;
            }
            fetchCountry()
      }, [change])

      return (
            (data != null) ?
                  <div style={(dark === true) ? DarkTheme : {
                        backgroundColor: "#EDEADE",
                        color: "black"
                  }} className='min-h-svh flex justify-center mt-[64px]'>

                        <div style={(dark === true) ? {
                              backgroundColor: "#475569",
                              color: "white"
                        } : LightTheme} className='bg-slate-600 max-w-[60%] m-4 shadow-2xl'>

                              <div className='w-full flex flex-col-reverse md:flex-row Upper_Div'>
                                    <div className='md:w-[50%] px-4 py-4 Left_Upper_Div'>
                                          <p className='text-4xl font-bold mb-2 font-comforta'>{data?.name?.common}</p>

                                          <div className='feild Capital flex gap-7 justify-start mb-2'>
                                                <p className='text-xl font-bold text-nowrap font-comforta'>Capital :</p>
                                                <p className='text-xl font-light'>{data?.capital?.[0]}</p>
                                          </div>
                                          <div className='feild Capital flex gap-7 justify-start mb-2'>
                                                <p className='text-xl font-bold text-nowrap font-comforta'>Region :</p>
                                                <p className='text-xl font-light'>{data?.region}</p>
                                          </div>
                                          <div className='feild Capital flex justify-start gap-2'>
                                                <p className='text-xl font-bold text-nowrap font-comforta'>Native Name :</p>
                                                <p className='text-xl font-light'>{data?.name?.nativeName?.eng?.official}</p>
                                          </div>
                                    </div>

                                    <div className='Right_Upper_Div flex justify-center items-center md:w-[50%] p-2'>
                                          <img className=' w-[90%] max-h-[200px] overflow-hidden' src={data?.flags?.svg} alt={data?.name?.common} />
                                    </div>
                              </div>

                              <div className='w-full md:flex Middle_Div mt-6 mb-5'>
                                    <div className='middle-div-left md:w-[50%] px-4 py-4 '>
                                          <div className='feild Capital flex gap-4 justify-start mb-1'>
                                                <p className='text-xl font-bold text-nowrap font-comforta'>SubRegion :</p>
                                                <p className='text-xl font-light'>{data?.subregion}</p>
                                          </div>
                                          <div className='feild Capital flex gap-4 justify-start mb-1'>
                                                <p className='text-xl font-bold text-nowrap font-comforta'>Continent :</p>
                                                <p className='text-xl font-light'>{data?.continents?.[0]}</p>
                                          </div>
                                          <div className='feild Capital flex gap-4 justify-start mb-1'>
                                                <p className='text-xl font-bold text-nowrap font-comforta'>Population :</p>
                                                <p className='text-xl  font-light'>{data?.population?.toLocaleString('en-IN')}</p>
                                          </div>
                                          <div className='feild Capital flex gap-4 justify-start mb-1'>
                                                <p className='text-xl font-bold text-nowrap font-comforta'>Independent :</p>
                                                <p style={(data?.independent ? { color: "green" ,borderStyle:"solid", borderWidth:"2px", borderColor:"green" } : { color: "rebeccapurple" })} 
                                                className='px-2 rounded-md text-xl font-bold bg-[rgba(0,0,0,.2)]  '>{data?.independent ? "true" : "false"}</p>
                                          </div>
                                    </div>
                                    <div className='middle-div-right md:w-[50%] px-4 py-4'>
                                          <div className='feild Capital flex gap-4 justify-start mb-1'>
                                                <p className='text-xl font-bold text-nowrap font-comforta'>Time Zone :</p>
                                                <p className='text-xl font-light'>{data?.timezones?.[0]}</p>
                                          </div>
                                          <div className='feild Capital flex gap-4 justify-start mb-1'>
                                                <p className='text-xl font-bold text-nowrap font-comforta'>LatLang :</p>
                                                <p className='text-xl font-light'>{data?.timezones?.[0]} , {data?.timezones?.[0]}</p>
                                          </div>
                                          <div className='feild Capital flex gap-4 justify-start mb-1'>
                                                <p className='text-xl font-bold text-nowrap font-comforta'>Area :</p>
                                                <p className='text-xl font-light'>{data?.area?.toLocaleString('en-IN')}</p>
                                          </div>
                                          <div className='feild Capital flex gap-4 justify-start mb-1'>
                                                <p className='text-xl font-bold text-nowrap font-comforta'>Postal Code :</p>
                                                <p className='text-xl font-light text-wrap overflow-hidden'>{data?.postalCode?.regex}</p>
                                          </div>
                                    </div>
                              </div>

                              <div className='Lower_Div p-4 '>
                                    <div className="Language_Div flex gap-4 items-start mb-5">
                                          <p className='font-semibold text-nowrap text-2xl font-comforta'>Languages :</p>
                                          <div className='Language_Div flex gap-2 items-center flex-wrap'>
                                                {
                                                      Object.values(data?.languages || {})?.map((lang) => {
                                                            return <p className='px-2 py-1 bg-[rgba(0,0,0,.2)] text-white font-medium border-2 rounded-md border-solid border-white' key={lang}>
                                                                  {lang}
                                                            </p>
                                                      })
                                                }
                                          </div>
                                    </div>

                                    <div className="Capital_Div flex gap-4 items-start">
                                          <p className='font-semibold text-2xl font-comforta text-nowrap'>Borders :</p>
                                          <div className='Language_Div flex gap-2 items-center flex-wrap'>
                                                {
                                                      data?.borders?.map((border) => {
                                                            return <div id={border} onClick={handleClick} className='px-2 py-1 bg-[rgba(0,0,0,.2)] text-white font-medium border-2 rounded-md border-solid border-white cursor-pointer' key={border}>
                                                                  {border}
                                                            </div>
                                                      })
                                                }
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div> : <CountryDetailShimmer dark={dark} />
      )
}

export default CountryDetail