import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
const ProductShipping = () => {

  return (
    <>
      <div className=" h-full mt-20 md:mt-4 w-full my-8 gap-3  p-3  place-items-center grid  md:grid-cols-3  sm:grid-cols-2 grid-cols-1  lg:grid-cols-4 ">
        <div
          className=" hover:shadow-[0_0_5px_green] duration-500  p-5 flex justify-center rounded-2xl h-72 "
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div className="h-40 w-40 rounded-full bg-green-500 relative">
            <div className="flex items-center justify-center   h-full  w-full "></div>
            <i
              class="fa fa-truck absolute  top-[40%] left-[40%] text-3xl text-white "
              aria-hidden="true"
            ></i>
            <div className="h-10 w-12 rounded-bl-full text-white rounded-tr-full bg-green-500 absolute -bottom-2 right-7 "></div>
            <h2 className="mt-4 text-center text-xl ">Free Shipping</h2>
            <p className="text-sm text-center whitespace-nowrap">
              Free on order over $300
            </p>
          </div>
        </div>
        <div
          className=" hover:shadow-[0_0_5px_green] duration-500 flex justify-center p-5  rounded-2xl h-72"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div className="h-40 w-40 rounded-full bg-green-500 relative">
            <div className="flex items-center justify-center   h-full  w-full "></div>
            <i
              class="fa fa-user-lock absolute  top-[40%] left-[40%] text-3xl text-white "
              aria-hidden="true"
            ></i>
            <div className="h-10 w-12 rounded-bl-full text-white rounded-tr-full bg-green-500 absolute -bottom-2 right-7 "></div>
            <h2 className="mt-4 text-center text-xl whitespace-nowrap">
              Security Payment
            </h2>
            <p className="text-sm whitespace-nowrap text-center ">
              100% security payment
            </p>
          </div>
        </div>
        <div
          className=" hover:shadow-[0_0_5px_green] duration-500 flex justify-center p-5  rounded-2xl h-72"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div className="h-40 w-40 rounded-full bg-green-500 relative">
            <div className="flex items-center justify-center   h-full  w-full "></div>
            <i
              class="fa-solid fa-arrows-left-right absolute  top-[40%] left-[40%] text-3xl text-white "
              aria-hidden="true"
            ></i>
            <div className="h-10 w-12 rounded-bl-full text-white rounded-tr-full bg-green-500 absolute -bottom-2 right-7 "></div>
            <h2 className="mt-4 text-center whitespace-nowrap text-xl ">
              30 Day Return
            </h2>
            <p className="text-sm whitespace-nowrap text-center ">
              30 day money guarantee
            </p>
          </div>
        </div>
        <div
          className=" hover:shadow-[0_0_5px_green] duration-500 flex justify-center p-5  rounded-2xl h-72"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div className="h-40 w-40 rounded-full bg-green-500 relative">
            <div className="flex items-center justify-center   h-full  w-full "></div>
            <i
              class="fa fa-phone absolute  top-[40%] left-[40%] text-3xl text-white "
              aria-hidden="true"
            ></i>
            <div className="h-10 w-12 rounded-bl-full text-white rounded-tr-full bg-green-500 absolute -bottom-2 right-7 "></div>
            <h2 className="mt-4 text-center whitespace-nowrap text-xl ">
              24/7 Support
            </h2>
            <p className="text-sm whitespace-nowrap text-center ">
              Support every time fast
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductShipping;
