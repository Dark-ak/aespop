import React from 'react'
import vid from "../../assets/vid.mp4"

const Vid = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex flex-col justify-start flex-1 items-start gap-6 p-5 md:px-48 lg:w-[0%] lg:px-20' >
                    <p className='font-suissereme text-sm'>The Athenaeum</p>
                    <p className='font-zapf text-3xl'>Ouranon: the sixth Othertopias fragrance</p>
                    <p className='font-suissere'>Each of the six Othertopias fragrances is a doorway to another realm, real and imagined. Ouranon—a woody, spicy, resinous scent, distinguished by Frankincense, Hay and Myrrh—is the final chapter of that journey.</p>
                    <div className='flex items-center justify-between p-4 border-[#33333] border-[1px] w-[80%] md:w-[60%] group hover:bg-[#333333] cursor-pointer'>
                        <button className='font-suissereme pr-1 lg:pr-0 text-sm group-hover:text-white'>Step Inside Ouranon</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>
                <div className='pl-10 flex justify-end'>
                    <video autoPlay loop muted className='w-[99%] lg:h-[450px] '>
                        <source src={vid} type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Vid