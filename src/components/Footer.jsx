import React, { useState } from 'react'
import insta from "../assets/instagram.png"
import link from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"

const Footer = () => {

    const [email, setEmail] = useState('Email Address');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };
    return (
        <div className='bg-[#252525] text-white p-2'>
            <div>
                <div className='grid grid-cols-2 pb-10 p-3 gap-10 md:grid-cols-3 lg:grid-cols-4'>
                    <div className='col-span-2 md:col-span-3 lg:col-span-1'>
                        <p className='font-suissereme text-[13px] py-3 border-b-[1px] border-b-white'>Subscribe to Aespop communications</p>
                        <div className='border-[1px] border-white p-2 flex items-start justify-between my-3' onClick={() => setEmail("")} >
                            <input type="text" className='bg-[#252525] font-suissereme text-[20px] focus:outline-none' value={email} onChange={handleInputChange} />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </div>
                        <div className='flex gap-3'>
                            <input type="checkbox" />
                            <p className='text-xs md:text-sm'>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.</p>
                        </div>
                    </div>
                    <div className=''>
                        <p className='font-suissereme text-sm py-3 border-b-white border-b-[1px]'>Order and Support</p>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-1 pt-3'>
                                <p className='font-suissere text-xs'>Contact Us</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                            <div className='flex gap-1'>
                                <p className='font-suissere text-xs'>FAQs</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                            <div className='flex gap-1'>
                                <p className='font-suissere text-xs'>Shipping</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                            <div className='flex gap-1'>
                                <p className='font-suissere text-xs'>Returns</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                            <p className='font-suissere text-xs'>Order History</p>
                            <p className='font-suissere text-xs'>Terms and Conditions</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-suissereme text-sm py-3 border-b-white border-b-[1px]'>Services</p>
                        <div className='flex flex-col gap-4'>
                            <p className='font-suissere text-xs pt-3'>Live Assistance</p>
                            <p className='font-suissere text-xs'>Corporate Gifts</p>
                            <p className='font-suissere text-xs'>Facial Appointments</p>
                            <p className='font-suissere text-xs'>Click and Collect</p>
                            <p className='font-suissere text-xs'>Video Consultation</p>
                        </div>
                    </div>

                    <div>
                        <p className='font-suissereme text-sm py-3 border-b-white border-b-[1px]'>Location preferences</p>
                        <div className='pt-3 flex flex-col gap-3'>
                            <div>
                                <p className='font-suissereme text-xs pb-1'>Shipping:</p>
                                <p className='underline font-suissere text-xs'>Hong Kong SAR, China</p>
                            </div>
                            <div>
                                <p className='font-suissereme text-xs pb-1'>Language:</p>
                                <p className='font-suissere underline'>English</p>
                                <p>繁體中文</p>

                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='font-suissereme text-sm py-3 border-b-white border-b-[1px]'>Sustainability</p>
                        <p className='font-suissere text-sm pt-3 leading-[1rem]'>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>

                    </div>


                    <div>
                        <p className='font-suissereme text-sm py-3 border-b-white border-b-[1px]'>About</p>
                        <div className='flex flex-col gap-4 cursor-pointer'>
                            <p className='font-suissere text-xs pt-3'>Our Story</p>
                            <p className='font-suissere text-xs'>Foundation</p>
                            <p className='font-suissere text-xs'>Careers</p>
                            <p className='font-suissere text-xs'>Privacy Policy</p>
                            <p className='font-suissere text-xs'>Accessibility</p>
                            <p className='font-suissere text-xs'>Cookie Policy</p>
                        </div>
                    </div>

                    <div className='hidden lg:inline'>
                        <p className='font-suissereme text-sm py-3 border-b-white border-b-[1px]'>Social Links</p>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-1 pt-3'>
                                <p className='font-suissere text-xs'>Instagram</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                            <div className='flex gap-1'>
                                <p className='font-suissere text-xs'>Twitter</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                            <p className='font-suissere text-xs'>Wechat</p>
                            <div className='flex gap-1'>
                                <p className='font-suissere text-xs'>Linkedln</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                            <div className='flex gap-1'>
                                <p className='font-suissere text-xs'>Weibo</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-t-[2px] p-3 flex justify-between '>
                    <p className='font-suissereme text-base'>&copy; Aespop</p>
                    <div className='flex gap-10 lg:hidden'>
                        <img src={insta} alt="" />
                        <img src={twitter} alt="" />
                        <img src={link} alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer