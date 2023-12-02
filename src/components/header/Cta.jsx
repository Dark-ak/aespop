

const Cta = () => {
    return (
        <div>
            <div className='bg-[#c2c2af] p-[12px] flex justify-center items-center px-5'>
                <p className='text-left text-sm font-suissere font-extralight leadin-1'>Trained Aesop consultants are available to provide bespoke skin care advice. <span className='font-suissereme ml-2 leading-[21px] border-b-[1px] border-black'>Book a video consultation</span></p>
            </div>
            <div className='bg-[#252525] pt-[12px] pb-[7px]  flex justify-center p-5'>
                <div className=' border-b-[1px] border-[#252525] duration-200 cursor-pointer hover:border-white flex justify-center gap-5 items-center leading-[21px]'>
                    <p className='text-[#fffef2] text-left font-suissere text-sm leading-[21px] '>Click and Collect is now available in Hong Kong. Enjoy complimentary shipping on orders over $400.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>

            </div>

        </div>
    )
}

export default Cta