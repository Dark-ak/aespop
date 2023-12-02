import React from 'react'
import Vid from './content/Vid'
import Slider1 from './content/Slider1'
import Slider2 from './content/Slider2'
import Item1 from './content/Item1'
import Item2 from './content/Item2'
import Item3 from './content/Item3'

const Content = () => {
  return (
    <div className='pt-32 bg-[#fffef2]'>
      <Vid />
      <Slider1 />
      <Item1 />
      <Slider2 />
      <Item2 />
      <Item3 />
      <div className='flex flex-col justify-center items-center text-center gap-5 py-40 px-4'>
        <p className='font-zapf text-[25px] lg:text-3xl'>‘Nothing is ever ended, everything only begun.’</p>
        <p className='text-sm font-suissereme md:leading-7'>Sara Teasdle</p>
      </div>

    </div>
  )
}

export default Content