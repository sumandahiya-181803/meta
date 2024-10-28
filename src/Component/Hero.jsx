import React from 'react'
import girl from '../Component/Image/girl.png'
import boy from '../Component/Image/boy.png'

const Hero = () => {
  return (
    <div className='w-full py-8 bg-white flex flex-col items-center'>
      <div className='w-full max-w-[1216px] h-auto px-4 md:px-10 relative'>
        <img src={girl} alt="" className="w-full h-auto object-cover" />
      </div>
      <div className='absolute bottom-8 md:bottom-10  md:left-15 max-w-full md:max-w-[700px] p-6 md:p-10 bg-red-100 lg:bg-zinc-50 rounded-lg shadow-lg'>
        <button className='bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-800 text-white duration-300'>
          Technology
        </button>
        <p className='text-[24px] md:text-[36px] font-medium mt-4'>
          The Impact of Technology on the Workplace: How Technology is Changing
        </p>
        <div className='flex items-center gap-3 mt-4'>
          <img src={boy} alt="" className='w-[24px] md:w-[36px] h-auto rounded-full' />
          <div className='flex flex-col md:flex-row gap-2 md:gap-3'>
            <p className='text-gray-400'>Jason Francisco</p>
            <p className='text-gray-400'>August 20, 2022</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
