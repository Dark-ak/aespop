
const CustomButtonGroup = ({ next, previous, carouselState }) => {

    const {totalItems, currentSlide} = carouselState

    console.log(currentSlide)

    return (
        <div className="custom-button-group absolute">
            <button className={currentSlide === 0 ? 'disable hidden' : 'bg-black p-4  absolute'} onClick={() => previous()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
            </button>
            <button onClick={() => next()} className={`${currentSlide === 2 ? 'hidden' : 'bg-black p-4 absolute left-[91.5rem]'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
            </button>

        </div>
    )
}

export { CustomButtonGroup }