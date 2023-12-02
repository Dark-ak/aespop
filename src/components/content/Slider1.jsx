import React, { useState } from 'react'
import hwyl from "../../assets/hwyl.png"
import marra from "../../assets/marra.png"
import tacit from "../../assets/tacit.png"


const Slider1 = () => {


    const [first, setFirst] = useState("1050.00")
    const [second, setSecond] = useState("1050.00")
    const [third, setThird] = useState("1050.00")

    return (
        <div className='pt-36'>
            <div className='flex'>
                <div className=' flex flex-col p-5 gap-4 lg:px-20 ima'>
                    <div className='flex flex-col gap-2 pb-4'>
                        <p className='font-suissereme text-sm'>Fragrance</p>
                        <p className='font-zapf text-2xl lg:text-3xl'>Our Personal Scents</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='font-suissere text-sm'>Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us.</p>
                        <div className='flex items-center'>
                            <p className='font-suissere text-sm'>See all Fragrance</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >
                <div>
                    <div className='bg-[#F5F4E9] py-8'>
                        <img src={hwyl} alt="" className='md:w-[80%]' />
                    </div>
                    <div>
                        <div className='text-center my-5'>
                            <p className='font-medium text-sm'>Hwyl Eau de Parfum</p>
                            <p className='text-xs'>Smoky, woody and rich</p>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-3'>
                            <div className='flex gap-5'>
                                <div>
                                    <input type="radio" name="price" onChange={() => setFirst("1050.00")} defaultChecked />
                                    <label htmlFor="price">50ml</label>
                                </div>
                                <div>
                                    <input type="radio" name="price" onChange={() => setFirst("1550.00")} />
                                    <label htmlFor="price">100ml</label>
                                </div>
                            </div>
                            <div className='my-3'>
                                <p className='text-sm'>${first}</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button className='bg-[#333333] text-white w-[90%] py-2'>Add to Cart</button>
                    </div>
                </div>
                
                <div>
                    <div className='bg-[#F5F4E9] py-8'>
                        <img src={marra} alt="" className='md:w-[80%]' />
                    </div>
                    <div>
                        <div className='text-center my-5'>
                            <p className='font-medium text-sm'>Marrakech Intense Eau de Parfum</p>
                            <p className='text-xs'>Smoky, woody and rich</p>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-3'>
                            <div className='flex gap-5'>
                                <div>
                                    <input type="radio" name="price2" onChange={() => setSecond("1050.00")} defaultChecked />
                                    <label htmlFor="price2">50ml</label>
                                </div>
                                <div>
                                    <input type="radio" name="price2" onChange={() => setSecond("1550.00")} />
                                    <label htmlFor="price2">100ml</label>
                                </div>
                            </div>
                            <div className='my-3'>
                                <p className='text-sm'>${second}</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button className='bg-[#333333] text-white w-[90%] py-2'>Add to Cart</button>
                    </div>
                </div>

                <div>
                    <div className='bg-[#F5F4E9] py-8'>
                        <img src={tacit} alt="" className='md:w-[80%]' />
                    </div>
                    <div>
                        <div className='text-center my-5'>
                            <p className='font-medium text-sm'>Tacit Eau de Parfum</p>
                            <p className='text-xs'>Smoky, woody and rich</p>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-3'>
                            <div className='flex gap-5'>
                                <div>
                                    <input type="radio" name="price3" onChange={() => setThird("1050.00")} defaultChecked />
                                    <label htmlFor="price3">50ml</label>
                                </div>
                                <div>
                                    <input type="radio" name="price3" onChange={() => setThird("1550.00")} />
                                    <label htmlFor="price3">100ml</label>
                                </div>
                            </div>
                            <div className='my-3'>
                                <p className='text-sm'>${third}</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button className='bg-[#333333] text-white w-[90%] py-2'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider1