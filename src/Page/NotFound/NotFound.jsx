import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
          <div className=' mt-8'>
              <h1 className=' text-6xl text-[#2697e9] text-center font-extrabold'>404</h1>
              <div className=" flex justify-center items-center my-8">
                  <img src="./404_2.png" className=' h-[15rem] w-[18rem]' alt="" />
              </div>
              <p className=' text-[32px] text-center font-bold'>looks like you are lost <br /> head back to <Link to={"/"} className='text-[#2697e9]'>Home Page</Link> </p>
      </div>
    </>
  )
}
