import React from 'react'
import girl from '../Component/Image/girl.png'
import boy from '../Component/Image/boy.png'
const Hero = () => {
  return (
    <div className='max-w-full py-8 bg-white items-center flex justify-center flex-col'>
      <div className='w-[1216px] h-[600px] px-10 relative'>
      <img src={girl} alt="" />
      </div>
      <div className='w-[598px] p-10 bottom-16 left-[200px] rounded px-10 absolute bg-red-300  lg:bg-zinc-50'>
        <button className='bg-blue-600 p-2 rounded-md hover:bg-blue-800 text-white  duration-300'>Technology</button>
        <p className=' text-[36px] font-medium'>The Impact of Technology on the Workplace: How Technology is Changing</p>
        <div className='flex items-center gap-3'>
            <img src={boy} alt="" className='w-[36px]' />
            <div className='flex gap-3'>
                <p className='text-gray-400'>Jason Francisco</p>
                <p  className='text-gray-400'>August 20, 2022</p>
                </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero