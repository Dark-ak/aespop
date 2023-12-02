import React from 'react'
import brush from "../../assets/brush.jpg"

const Item2 = () => {
    return (
        <div className='pt-32'>
            <div className='flex flex-col lg:flex-row justify-between '>
                <div>
                    <img src={brush} alt="" className='w-[90vw] lg:w-[55vw]' />
                </div>
                <div className='flex flex-col gap-4 px-5 lg:w-[40%] md:px-26 lg:pr-32 '>
                    <p className='font-suissereme text-sm'>Facial Appointments</p>
                    <p className='font-zapf text-[25px] md:text-3xl mb-4'>Composure for the skin and senses</p>
                    <p className='font-suissere text-base'>For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.</p>
                    <div className='flex items-center justify-between p-4 border-[#33333] border-[1px] w-[100%] md:w-[60%] group hover:bg-[#333333] cursor-pointer'>
                        <button className='font-suissereme pr-24 lg:pr-0 text-sm group-hover:text-white'>Learn More</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item2