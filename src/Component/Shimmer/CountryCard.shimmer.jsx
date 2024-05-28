import React from 'react'

const CountryCardShimmer = () => {
  return (
      <div className='w-64 bg-slate-900 min-h-[300px] rounded-md overflow-hidden'>

      <div className='bg-gray-600 h-[200px] w-full'>
      </div>

      <h1 className='m-4 bg-gray-700 font-bold text-xl w-[60%] h-7 rounded-lg'></h1>

      <div className='px-4 pb-2'>
            <div className='bg-gray-800 w-[50%] h-6 rounded-lg mt-2'>    
            </div>
            <div className='bg-gray-800 w-[50%] h-6 rounded-lg mt-2'>    
            </div>
            <div className='bg-gray-800 w-[50%] h-6 rounded-lg mt-2'>    
            </div>
      </div>
</div>
  )
}

export default CountryCardShimmer