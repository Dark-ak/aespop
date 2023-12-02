import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import fabul from "../../assets/fabul.png"
import tuneful from "../../assets/tuneful.png"
import rousing from "../../assets/rousing.png"
import heart from "../../assets/heart.png"
import majestic from "../../assets/majestic.png"
import { CustomButtonGroup} from '../CustomArrow'
import CustomDot from '../CustomSlider'
 

const slider2 = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className='pt-36 text-center'>
            <Carousel
                arrows={false}
                swipeable={true}
                customButtonGroup={<CustomButtonGroup />}
                draggable={true}
                responsive={responsive}
                renderDotsOutside={true}
                customDot={<CustomDot />}
                ssr={true}
            >
                <div>
                    <img src={fabul} alt="" draggable={false}/>
                    <p className=' font-medium mt-4'>Fabulous Forms</p>
                    <p className='text-sm'>A trio of daily essentials</p>
                </div>

                <div>
                    <img src={tuneful} alt="" draggable={false}/>
                    <p className=' font-medium mt-4'>Tuneful Textures</p>
                    <p className='text-sm'>A trio  of hand care staples</p>
                </div>
                <div>
                    <img src={rousing} alt="" draggable={false}/>
                    <p className=' font-medium mt-4'>Rousing Rythms</p>
                    <p className='text-sm'>An invigorating body care trio</p>
                </div>
                <div>
                    <img src={heart} alt="" draggable={false}/>
                    <p className=' font-medium mt-4'>Heartful Harmonies</p>
                    <p className='text-sm'>Fragrant staples at home</p>
                </div>

                <div>
                    <img src={majestic} alt="" draggable={false}/>
                    <p className=' font-medium mt-4'>Majestic Melodies</p>
                    <p className='text-sm'>Four hand and body care Staples</p>
                </div>

            </Carousel>
        </div>
    )
}

export default slider2