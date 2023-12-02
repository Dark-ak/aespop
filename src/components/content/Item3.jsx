import Carousel from "react-multi-carousel"
import bleed from "../../assets/bleed.jpg"
import harbour from "../../assets/harbour.jpg"
import walk from "../../assets/walk.jpg"
import { CustomButtonGroup } from "../CustomArrow";


const Item3 = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className="grid lg:grid-flow-col mt-44 gap-10 lg:gap-0">
            <div className="w-[100%]">
                <div className='flex flex-col gap-4 px-5 md:px-26  '>
                    <p className='font-zapf text-[25px] md:text-3xl mb-4'>Store Locator</p>
                    <p className='font-suissere text-base'>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
                    <div className='flex items-center justify-between p-4 border-[#33333] border-[1px] w-[100%] md:w-[60%] group hover:bg-[#333333] cursor-pointer'>
                        <button className='font-suissereme pr-24 lg:pr-0 text-sm group-hover:text-white'>Find a nearby store</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>
            </div>
            <Carousel
                arrows={true}
                swipeable={true}

                draggable={true}
                responsive={responsive}
                ssr={true}
            >
                <div>
                    <img src={bleed} alt="" draggable={false} className="w-[100px]" />
                    <p></p>
                </div>

                <div>
                    <img src={harbour} alt="" draggable={false} />
                </div>

                <div>
                    <img src={walk} alt="" draggable={false} />
                </div>
            </Carousel>
        </div>
    )
}

export default Item3