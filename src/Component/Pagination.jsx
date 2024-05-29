import React from 'react'
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import { TbSquareRoundedArrowLeftFilled } from "react-icons/tb";

const Pagination = (
      {
            page,
            setPage,
            limit }) => {

      return (
            <div className='flex gap-3 justify-center items-center my-6  h-[20%] pb-5 text-3xl'>
                  <TbSquareRoundedArrowLeftFilled
                        onClick={(e) => {
                              e.preventDefault();
                              setPage(page - 1)
                        }}
                        style={(page === 1) ? { display: "none" } : { display: "block" }}
                        className='cursor-pointer text-4xl hover:text-blue-700 hover:bg-white rounded-md' />

                  <div className='NUMBER_DIV flex gap-3 cursor-pointer'>

                        <p className='font-semibold bg-[rgba(151,84,213,0.44)] rounded-md px-2 py-1'>{page}</p>
                        <p style={(page === limit) ? { display: "none" } : { display: "block" }}
                              className='font-semibold hover:text-blue-700 rounded-md p-1'>{page + 1}</p>
                        <p style={(page >= limit - 1) ? { display: "none" } : { display: "block" }}
                              className='font-semibold hover:text-blue-700 rounded-md p-1'>{page + 2}</p>
                        <p style={(page >= limit - 1) ? { display: "none" } : { display: "block" }}> . </p>
                        <p style={(page >= limit - 1) ? { display: "none" } : { display: "block" }}> . </p>
                        <p style={(page >= limit - 1) ? { display: "none" } : { display: "block" }}> . </p>
                  </div>
                  <TbSquareRoundedArrowRightFilled
                        onClick={(e) => {
                              e.preventDefault();
                              setPage(page + 1)
                        }}
                        style={(page === limit) ? { display: "none" } : { display: "block" }}
                        className='cursor-pointer text-4xl hover:text-blue-700 hover:bg-white rounded-md' />
            </div>
      )
}

export default Pagination