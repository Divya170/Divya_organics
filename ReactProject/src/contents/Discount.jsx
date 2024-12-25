import Aos from "aos";
import { useState, useEffect } from "react";

const Discount = () => {

  const [discounts, setDiscounts] = useState([
    {
      id: 1,
      title: "Healthy Fruits",
      description: "Up to 30% off ",
      image: "/f7.png",
    },
    {
      id: 2,
      title: "Fresh Vegetables",
      description: "Up to 40% off",
      image: "/v1.png",
    },
    {
      id: 3,
      title: "Dry Fruits",
      description: "Up to 30% off",
      image: "/df2.png",
    },
  ]);

  return (
    <>
      <div className="h-full w-full p-10">
        <h2
          className="text-center text-4xl font-bold text-green-600"
          data-aos="fade-right"
        >
          Discounts & Offers
        </h2>
        <p className="text-center text-sm text-gray-500" data-aos="fade-right">
          Get exclusive deals and discounts on your favorite products.
        </p>
        <div className="mt-10" data-aos="fade-right">
          <button className="w-full capitalize h-12 text-white font-bold bg-green-500 rounded-full">
            See All Offers
          </button>
        </div>
        <div className="h-full my-6 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {discounts.map((product) => (
              <div
                className="h-[440px] w-full max-w-80 relative overflow-hidden border-2 border-green-600 rounded-2xl"
                key={product.id}
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <div className="image z-40 w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64"
                  />
                </div>
                <div className="content w-full bg-green-500 h-full"></div>
                <div
                  className="absolute h-40 w-60 bg-gray-600 top-[45%] flex flex-col capitalize items-center justify-center rounded-3xl left-[14%]"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <span className="text-lg text-white font-bold">
                    {product.title}
                  </span>
                  <span className="text-lg text-white font-bold">
                    {product.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
