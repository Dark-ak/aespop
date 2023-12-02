import React, { useEffect, useState } from 'react'
import Logo from "../../assets/logo.svg"
import LogoP from "../../assets/logoo.svg"

const Nav = () => {

    const [index, setIndex] = useState(1)
    const [play, setPlay] = useState(true)

    useEffect(() => {
        // Adjust the interval time (in milliseconds) as needed
        if (play == true) {
            const intervalId = setInterval(() => {
                setIndex(prevIndex => (prevIndex === 3 ? 1 : prevIndex + 1));
            }, 6000);

            return () => {
                // Clear the interval when the component is unmounted or when the effect is cleaned up
                clearInterval(intervalId);
            };
        }
    }, [play]);

    const prev = () => {
        setIndex(prevIndex => (prevIndex === 1 ? 3 : prevIndex - 1))
        clearInterval()
    }
    const next = () => {
        setIndex(prevIndex => (prevIndex === 3 ? 1 : prevIndex + 1))
        clearInterval()

    }

    return (
        <div>
            <div>
                <div className='font-suissereme bg-[#fffef2] p-7 md:flex md:justify-between hidden '>
                    <div className='text-sm flex gap-7 mx-5'>
                        <p className='hidden lg:inline'>Skin Care</p>
                        <p className='hidden md:inline lg:hidden'>Shop</p>
                        <p className='hidden lg:inline'>Body Hand</p>
                        <p className='hidden lg:inline'>Hair</p>
                        <p className='hidden lg:inline'>Fragrance</p>
                        <p className='hidden lg:inline'>Home</p>
                        <p className='hidden lg:inline'>Kits & Travel</p>
                        <p className='hidden lg:inline'>Gifts</p>
                        <p>Read</p>
                        <p>Stores</p>
                        <p className='hidden lf:inline'>Facial Appointments</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#333333]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </div>
                    <div className='text-sm flex gap-7 px-2'>
                        <p>Log</p>
                        <p>Cabinet</p>
                        <p>Cart</p>
                    </div>
                </div>
                <div>
                    <div className={`bg-firstpc h-[358px] bg-no-repeat  ${index == 1 && "lg:h-[618px] bg-firstpc bg-[length:300%_358px] bg-[85%_0%]  md:bg-cover  md:h-[618px]"} ${index == 2 && "bg-secondpc bg-[length:150%_358px] bg-[100%_90%] md:bg-cover md:bg-center md:h-[618px]"} ${index == 3 && "bg-thirdpc bg-right bg-cover md:h-[619px]  lg:bg-[length:55%_120%] "}`}>
                        <div className='flex items-center justify-between'>
                            <div className={`flex items-start gap-20 lg:pt-14 ${index==3 && "lg:bg-[#f6f5e8] lg:w-[50%] lg:h-[619px]"} `}>
                                <img src={Logo} alt="" className={`w-20 text-black ml-8 lg:w-32 ${index==3 && "lg:hidden"}`} />
                                <img src={LogoP} alt="" className={`hidden w-30 ml-8 mt-11 ${index == 3 && "lg:inline"}`}  />
                                <div className='hidden lg:inline lg:w-[70%]'>
                                    <div className={`text-white flex flex-col gap-5 mt-12 leading-[27.2px] ${index != 1 && "hidden"}`}>
                                        <p className='font-suissereme text-sm'>A new Othertopias fragrance</p>
                                        <p className='font-suissere text-3xl '>Ouranon Eau de Parfum</p>
                                        <p className='font-suissere text-[1rem] w-[40%]'>A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.</p>
                                    </div>
                                    <div className={`text-white flex flex-col gap-5 mt-12 leading-[27.2px] ${index != 2 && "hidden"}`}>
                                        <p className='font-suissere text-sm'>Hand and Body Care</p>
                                        <p className='font-suissere text-3xl'>Buoyant Bodies</p>
                                        <p className='font-suissere text-[1rem] w-[40%]'>Three joyful elements of bathing—cleansing, scrubbing and hydrating—are facilitated by formulations boasting a variety of benefits and aromas, ensuring optimal satisfaction for all.</p>
                                    </div>
                                    <div className={`text-black flex flex-col gap-5 mt-12 leading-[27.2px] w-[80%] ${index != 3 && "hidden"} `}>
                                        <p className='font-suissere text-sm'>Supporting city Skin</p>
                                        <p className='font-suissere text-3xl '>Parsley Seed Anti-Oxidant Intense Serum</p>
                                        <p className='font-suissere text-[1rem]'>Explore how this anti-oxidant-rich serum hydrates, replenishes and fortifies the skin via a suite of ingredients selected with urban dwellers in mind.</p>
                                    </div>
                                    <div className={`border-white  font-suissereme border-[1px] flex items-center mt-10 justify-between  px-[20px] py-[19px] w-[300px] cursor-pointer group hover:bg-white ${index == 3 && "hover:bg-[#333333] border-[rgba(51,51,51,.2)]"}`}>
                                        <button className={`text-white group-hover:text-[#333333]   ${index != 1 && 'hidden'}`}>Discover Ouranon</button>
                                        <button className={`text-white group-hover:text-[#333333]  ${index != 2 && 'hidden'}`}>Discover Body & Hand Care</button>
                                        <button className={`text-[#333333] group-hover:text-white ${index != 3 && 'hidden'}`}>Discover the formulation</button>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={index == 3 ? '#333333' :'currentColor'} className={`w-4 h-4 text-white ${index == 3 && "text-black group-hover:text-white"} group-hover:text-[#333333]`}>
                                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-[30px] md:hidden mr-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <p className='font-suissere text-white'>Cart</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={`px-4 ${index == 1 && "bg-[#5b3e45]"} ${index == 2 && "bg-[#333333]"}  ${index == 3 && "bg-[#f6f5e8]"} md:flex md:flex-col md:text-left md:items-center lg:bg-[#fffef2] pb-14 lg:pb-0`}>
                        <div className={`font-suissere flex md:justify-center md:items-center  text-sm gap-3 pt-5 leading-7  text-[#333333] items-center ${index == 1 && "text-white"} lg:pt-0 `}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 text-[#333333] ${index != 3 && "text-white"} lg:text-[#333333]`} onClick={prev}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            <p className={`text-[#333333] ${index != 3 && "text-white"} lg:text-[#333333]`}>{index} / 3</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 text-[#333333] ${index != 3 && "text-white"} lg:text-[#333333]`} onClick={next}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                            {play ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 text-[#333333] ${index != 3 && "text-white"} lg:text-[#333333]`} onClick={() => setPlay(!play)}>
                                    <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 text-[#333333] ${index != 3 && "text-white"} lg:text-[#333333]`} onClick={() => setPlay(!play)}>
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                </svg>
                            )}

                        </div>
                        <div className='flex flex-col md:items-center lg:hidden'>
                            <div className='pt-8 pb-5 md:flex md:flex-col md:items-center md:w-[50%]'>
                                <div className={`text-white flex flex-col gap-6 ${index != 1 && "hidden"}`}>
                                    <p className='font-suissere text-[.875rem]'>A new Othertopias fragrance</p>
                                    <p className='font-suissere text-[1.5rem] '>Ouranon Eau de Parfum</p>
                                    <p className='font-suissere text-[1rem]'>A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.</p>
                                </div>
                                <div className={`text-white flex flex-col gap-6 ${index != 2 && "hidden"}`}>
                                    <p className='font-suissere text-[.875rem]'>Hand and Body Care</p>
                                    <p className='font-suissere text-[1.5rem] '>Buoyant Bodies</p>
                                    <p className='font-suissere text-[1rem]'>Three joyful elements of bathing—cleansing, scrubbing and hydrating—are facilitated by formulations boasting a variety of benefits and aromas, ensuring optimal satisfaction for all.</p>
                                </div>
                                <div className={`text-[#333333] flex flex-col gap-6 ${index != 3 && "hidden"}`}>
                                    <p className='font-suissere text-[.875rem]'>Supporting city Skin</p>
                                    <p className='font-suissere text-[1.5rem] '>Parsley Seed Anti-Oxidant Intense Serum</p>
                                    <p className='font-suissere text-[1rem]'>Explore how this anti-oxidant-rich serum hydrates, replenishes and fortifies the skin via a suite of ingredients selected with urban dwellers in mind.</p>
                                </div>
                            </div>
                            <div className='border-white border-2 flex items-center justify-between px-[25px] md:gap-[20vh] py-[19px]'>
                                <button className={`text-white  ${index != 1 && 'hidden'}`}>Discover Ouranon</button>
                                <button className={`text-white  ${index != 2 && 'hidden'}`}>Discover Body & Hand Care</button>
                                <button className={`text-[#333333] ${index != 3 && 'hidden'}`}>Discover the formulation</button>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 text-white ${index == 3 && "text-[#333333]"}`}>
                                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Nav