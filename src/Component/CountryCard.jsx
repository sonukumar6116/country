import React from 'react'
import { Link } from 'react-router-dom';

const CountryCard = (props) => {
      const { flags, name, population, continents, capital } = props.country;
      
      // console.log(props.country)

      const DarkTheme = {
            backgroundColor: "#1e293b",
            color: "white"
      }
      const LightTheme = {
            backgroundColor: "#f2f2e5",
            color: "black"
      }

      return (
            <Link to="/country" state={props.country}>
                  <div style={(props.dark === true) ? DarkTheme : LightTheme}
                        className='w-64 min-h-[300px] rounded-md overflow-hidden mb-6
                                  hover:scale-110 transition-all ease-in duration-100 shadow-lg shadow-slate-900'>

                        <div style={{ backgroundImage: `url(${flags.svg})` }}
                              className='bg-center bg-cover bg-no-repeat h-[200px] w-full'>
                        </div>

                        <h1 className='m-4 font-bold text-xl font-comforta'>{name?.common}</h1>

                        <div className='px-4 pb-2 flex-col justify-center leading-6'>
                              <div className='flex gap-4'>
                                    <div className='font-comforta'>Continent :</div>
                                    <div className='font-normal'>{continents[0]}</div>
                              </div>
                              <div className='flex gap-4 '>
                                    <div className='font-comforta'>Capital :</div>
                                    <div className='font-normal overflow-hidden'>{capital?.[0]} </div>
                              </div>
                              <div className='flex gap-4 '>
                                    <div className='font-comforta'>Population :</div>
                                    <div className='font-normal overflow-hidden'>{population} </div>
                              </div>
                        </div>
                  </div>
            </Link>
      )
}

export default CountryCard