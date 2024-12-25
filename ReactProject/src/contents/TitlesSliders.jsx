import { useState, useEffect, useRef } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
// ImageSlider component
const ImageSlider = () => {
  const images = ["v1.png", "v2.png", "v3.png", "v4.png", "v5.png"];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const startX = useRef(0);
  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Handle next slide
  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Handle previous slide
  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    const endX = e.clientX;
    if (startX.current > endX + 50) {
      handleNext();
    } else if (startX.current < endX - 50) {
      handlePrev();
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  return (
    <div
      className="h-64 md:h-80 w-full border-2 border-green-600 rounded-2xl relative  overflow-hidden"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      ))}

      {/* Next and Previous buttons */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
        onClick={handleNext}
      >
        &#10095;
      </button>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-green-600" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const TitlesSliders = () => {
  return (
    <>
      <div
        className="h-[60vh]  sm:h-[70vh] relative capitalize min-h-[400px] lg:px-20 px-2 w-full max-w-full"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
      >
        <div className="grid md:grid-cols-2 gap-3 place-items-center grid-cols-1 h-full rounded-xl p-4 w-full">
          <div className="g">
            <div className="md:mt-10"></div>
            <h3 className="text-sm sm:text-xl text-black font-bold">
              100% organic foods
            </h3>
            <h2
              className="lg:leading-[70px] lg:text-5xl md:text-4xl sm:text-2xl text-xl tracking-wide font-extrabold text-green-600"
              style={{ textShadow: "0 0 1px darkblue" }}
            >
              Organic Veggies & Fruits Foods
            </h2>

            <div className="h-20 w-full mt-4 relative lg:mt-20 max-w-[500px]">
              <input
                type="text"
                placeholder="search items.."
                className="bg-transparent border-2   outline-none text-green-700 border-green-600 h-16 w-full rounded-full p-2 pr-32"
              />
              <button className="absolute right-0 p-[19px] border-2 border-green-600 rounded-full bg-green-500 text-white font-bold w-32">
                Search
              </button>
            </div>
          </div>

          <ImageSlider />
        </div>
      </div>
    </>
  );
};

export default TitlesSliders;
