import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
  const [dragging, setDragging] = useState(false);

  const products = [
    { id: 1, img: "/v1.png", price: "$20" },
    { id: 2, img: "/v2.png", price: "$25" },
    { id: 3, img: "/f7.png", price: "$30" },
    { id: 4, img: "/f9.png", price: "$35" },
    { id: 5, img: "/df1.png", price: "$40" },
    { id: 6, img: "/v4.png", price: "$45" },
    { id: 7, img: "/v7.png", price: "$45" },
    { id: 8, img: "/f1.png", price: "$45" },
    { id: 9, img: "/df2.png", price: "$45" },
    { id: 10, img: "/df3.png", price: "$45" },
    { id: 11, img: "/f8.png", price: "$45" },
  ];

  const getProductName = (img) => {
    if (img.includes("/v")) return "Vegetable";
    if (img.includes("/f")) return "Fruit";
    if (img.includes("/df")) return "Dry Fruit";
    return "Product";
  };

  const settings = {
    // dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: "40px",
    // slidesToShow: 1,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    draggable: true,
    beforeChange: () => setDragging(true),
    afterChange: () => setTimeout(() => setDragging(false), 100), // Set a short delay
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div
      className={`w-full mx-auto  max-w-full sm:px-10 md:py- ${
        dragging ? "cursor-grabbing  " : " cursor-grab"
      }`}
    >
      <h2
        className="text-2xl font-bold text-green-600 text-center mb-6"
        style={{ textShadow: "0 0 2px black" }}
        data-aos="fade-right"
      >
        Our Products
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 relative"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="bg-white rounded-lg shadow-lg border-2 border-green-500 p-6 text-center">
              <img
                src={product.img}
                alt={getProductName(product.img)}
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">
                {getProductName(product.img)}
              </h3>
              <p className="text-green-600 font-bold text-xl">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <button className="bg-green-500 shadow-[0_0_5px_black] text-xs sm:text-md hidden md:block text-white font-bold rounded-full p-2 hover:bg-green-600">
      Prev
    </button>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <button className="bg-green-500 hidden sm:block shadow-[0_0_5px_black] text-xs sm:text-md font-bold  text-white  rounded-full p-2 hover:bg-green-600">
      Next
    </button>
  </div>
);

export default ProductSlider;
