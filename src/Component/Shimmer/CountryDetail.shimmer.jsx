import React from 'react'

const CountryDetailShimmer = ({ dark }) => {
      const DarkTheme = {
            backgroundColor: "#334155",
            color: "white"
      }
      const LightTheme = {
            backgroundColor: "#f2f2e5",
            color: "black"
      }
      return (
            <div style={(dark === true) ? DarkTheme : {
                  backgroundColor: "#EDEADE",
                  color: "black"
            }} className='min-h-svh flex justify-center mt-[64px]'>

                  <div style={(dark === true) ? {
                        backgroundColor: "#475569",
                        color: "white"
                  } : LightTheme} className='bg-slate-600 min-w-[60%] m-4 shadow-2xl'>

                        <div className='w-full flex flex-col-reverse md:flex-row Upper_Div'>
                              <div className='md:min-w-[50%] px-4 py-4 Left_Upper_Div'>
                                    <p className='text-4xl font-bold mb-2 font-comforta w-[250px] h-[40px] rounded-md bg-slate-400'></p>

                                    <div className='feild Capital flex gap-7 justify-start mb-2'>
                                          <p className='text-xl font-bold text-nowrap font-comforta 
                                          rounded-md w-[150px] h-[30px] bg-[#ced4da] opacity-40'></p>
                                          <p className='text-xl font-light 
                                           w-[75px] h-[30px] rounded-md bg-[#ced4da] opacity-30'></p>
                                    </div>
                                    <div className='feild Capital flex gap-7 justify-start mb-2'>
                                          <p className='text-xl font-bold text-nowrap font-comforta rounded-md w-[150px] h-[30px] bg-[#ced4da] opacity-40'></p>
                                          <p className='text-xl font-light 
                                          w-[75px] h-[30px] rounded-md bg-[#ced4da] opacity-30'></p>
                                    </div>
                                    <div className='feild Capital flex justify-start gap-7'>
                                          <p className='text-xl font-bold text-nowrap font-comforta rounded-md w-[150px] h-[30px] bg-[#ced4da] opacity-40'></p>
                                          <p className='text-xl font-light 
                                          w-[75px] h-[30px] rounded-md bg-[#ced4da] opacity-30'></p>
                                    </div>
                              </div>

                              <div className='Right_Upper_Div flex justify-center items-center md:min-w-[50%] p-2'>
                                    <div className='w-[90%] h-[200px] bg-slate-500'>
                                    </div>
                              </div>
                        </div>

                        <div className='w-full md:flex Middle_Div mt-6 mb-5'>
                              <div className='middle-div-left md:w-[50%] px-4 py-4 '>
                                    <div className='feild Capital flex gap-4 justify-start mb-1'>
                                          <p className='text-xl font-bold text-nowrap font-comforta rounded-md w-[150px] h-[30px] bg-[#ced4da] opacity-40'></p>
                                          <p className='text-xl font-light w-[75px] h-[30px] rounded-md bg-[#ced4da] opacity-30'></p>
                                    </div>
                                    <div className='feild Capital flex gap-4 justify-start mb-1'>
                                          <p className='text-xl font-bold text-nowrap font-comforta rounded-md w-[150px] h-[30px] bg-[#ced4da] opacity-40'></p>
                                          <p className='text-xl font-light w-[75px] h-[30px] rounded-md bg-[#ced4da] opacity-30'></p>
                                    </div>
                                    <div className='feild Capital flex gap-4 justify-start mb-1'>
                                          <p className='text-xl font-bold text-nowrap font-comforta rounded-md w-[150px] h-[30px] bg-[#ced4da] opacity-40'></p>
                                          <p className='text-xl font-light 
                                          w-[75px] h-[30px] rounded-md bg-[#ced4da] opacity-30'></p>
                                    </div>
                                    <div className='feild Capital flex gap-4 justify-start mb-1'>
                                          <p className='text-xl font-bold text-nowrap font-comforta rounded-md w-[150px] h-[30px] bg-[#ced4da] opacity-40'></p>
                                          <p className='text-xl font-light w-[75px] h-[30px] rounded-md bg-[#ced4da] opacity-30'></p>
                                    </div>
                              </div>
                              <div className='middle-div-right md:w-[50%] px-4 py-4'>
                                    <div className='feild Capital flex gap-4 justify-start mb-1'>
                                          <p className='text-xl font-bold text-nowrap font-comforta
                                          rounded-md w-[150px] h-[30px] bg-[#ced4da] opacity-40'></p>
                                          <p className='text-xl font-light w-[75px] h-[30px] rounded-md bg-[#ced4da] opacity-30'></p>
                                    </div>
                                    <div className='feild Capital flex gap-4 justify-start mb-1'>
                                          <p className='text-xl font-bold text-nowrap font-comforta
                                          rounded-md w-[150px] h-[30px] bg-[#ced4da] opacity-40'></p>
                                          <p className='text-xl font-light w-[75px] h-[30px] rounded-md bg-[#ced4da] opacity-30'></p>
                                    </div>
                                    <div className='feild Capital flex gap-4 justify-start mb-1'>
                                          <p className='text-xl font-bold text-nowrap font-comforta
                                          rounded-md w-[150px] h-[30px] bg-[#ced4da] opacity-40'></p>
                                          <p className='text-xl font-light w-[75px] h-[30px] rounded-md bg-[#ced4da] opacity-30'></p>
                                    </div>
                                    <div className='feild Capital flex gap-4 justify-start mb-1'>
                                          <p className='text-xl font-bold text-nowrap font-comforta
                                          rounded-md w-[150px] h-[30px] bg-[#ced4da] opacity-40'></p>
                                          <p className='text-xl font-light w-[75px] h-[30px] rounded-md bg-[#ced4da] opacity-30 text-wrap'></p>
                                    </div>
                              </div>
                        </div>

                        <div className='Lower_Div p-4 '>
                              <div className="Language_Div flex gap-4 items-start mb-5">
                                    <p className='font-semibold text-nowrap text-2xl font-comforta
                                    rounded-md w-[150px] h-[30px] bg-[#ced4da] opacity-40'></p>
                                    <div className='Language_Div flex gap-2 items-center flex-wrap'>

                                    </div>
                              </div>

                              <div className="Capital_Div flex gap-4 items-start">
                                    <p className='font-semibold text-2xl font-comforta text-nowrap
                                    rounded-md w-[150px] h-[30px] bg-[#ced4da] opacity-40'></p>
                                    <div className='Language_Div flex gap-2 items-center flex-wrap'>

                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
      )
}

export default CountryDetailShimmer