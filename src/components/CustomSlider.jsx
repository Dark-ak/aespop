
const CustomDot = ({ onClick, active, index, carouselState }) => {
    const { currentSlide } = carouselState;
    return (
      <li className="active:bg-gray-50">
        <button
          style={{ background: active ? "grey" : "initial" }}
          onClick={() => onClick()}
        />
      </li>
    );
  };
  
  export default CustomDot;