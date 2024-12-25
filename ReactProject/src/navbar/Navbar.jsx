import { useState, useEffect } from "react";

const Navbar = () => {
  
  const [searchOpen, setSearchOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full m-3 max-w-[1200px]  md:flex items-center justify-between rounded-br-[80px] rounded-tr-3xl z-50 rounded-bl-3xl rounded-tl-[80px] mt-2 mx-auto h-16 bg-green-500 shadow-md shadow-gray-700">
        <div className="location flex items-center h-full mx-6 gap-2">
          <p className="text-white text-sm">
            <i
              className="fa mx-1 text-yellow-500 fa-location-dot"
              aria-hidden="true"
            ></i>
            123, street Coimbatore
          </p>
          <p className="text-white text-sm">
            <i
              className="fa fa-envelope mx-1 text-yellow-500"
              aria-hidden="true"
            ></i>
            support@example.com
          </p>
        </div>
        <div className="location flex items-center h-full mx-6 gap-1">
          <ul className="flex text-sm text-white capitalize gap-1">
            <li>privacy policy /</li>
            <li>Terms & Conditions /</li>
            <li>Sales & Refunds</li>
          </ul>
        </div>
      </div>

      {/* Mobile and Desktop Navbar */}
      <div
        className={`w-full bg-gray-100 z-50 ${
          isFixed ? "fixed top-0 shadow-md " : ""
        }`}
      >
        <nav
          className={`h-14 max-w-[1200px] delay-100 duration-1000 flex items-center justify-between p-3 w-full capitalize mx-auto bg-gray-100 z-[1000]  rounded-2xl mt-4 transition-transform ${
            isFixed ? "" : "mt-0"
          }`}
        >
          <h2 className="md:text-4xl sm:text-xl  text-xl  font-extrabold text-green-600">
            Fruitables
          </h2>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-7">
            <li>
              <a href="#" className="text-black text-md hover:text-green-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-md hover:text-green-700">
                About
              </a>
            </li>
            <li className="relative w-full max-w-44 group">
              <a href="#" className="text-black text-md hover:text-green-700">
                Services
                <span>
                  <i
                    className="fa fa-arrow-right duration-500 delay-150 transition-all group-hover:rotate-90"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
              <ul className="absolute -left-4 bg-gray-100 text-black opacity-0 invisible group-hover:visible group-hover:opacity-100 w-[150px] flex p-3 justify-center flex-col transition-all duration-700 ease-in-out delay-300 z-40">
                <li>
                  <a
                    href="#"
                    className="text-black text-center text-md hover:text-green-700"
                  >
                    Service 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-md hover:text-green-700"
                  >
                    Service 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-md hover:text-green-700"
                  >
                    Service 3
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="text-black text-md hover:text-green-700">
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop & Mobile Icons */}
          <div className="flex gap-4 md:gap-2 items-center">
            <a
              href="#"
              className={`md:text-2xl sm:text-xl  text-xl border-2 relative hover:bg-green-500 hover:text-white p-1 sm:p-2 rounded-full border-green-500 text-green-600 duration-700 delay-100 ${searchOpen ?  "hidden" :"" } `}
            >
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              <span className="absolute flex items-center justify-center sm:h-6 sm:w-6 h-5 w-5 bg-green-600 rounded-full text-xs font-bold -right-2 -top-2 text-white">
                1
              </span>
            </a>
            <a
              href="#"
              className={`md:text-2xl sm:text-xl  text-xl border-2 p-1 sm:p-2 rounded-full relative border-green-500 text-green-600 hover:bg-green-500 hover:text-white duration-700 delay-100 ${searchOpen ? "hidden" : ""} `}
            >
              <i className="fa fa-heart" aria-hidden="true"></i>
              <span className="absolute flex items-center justify-center sm:h-6 sm:w-6 h-5 w-5 bg-green-600 rounded-full text-xs font-bold -right-2 -top-2 text-white">
                1
              </span>
            </a>
            <a
              href="#"
              className={`md:text-2xl sm:text-xl  text-xl border-2 p-1 sm:p-2 rounded-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white duration-700 delay-100 ${
                searchOpen ? "hidden  " : ""
              }  `}
            >
              <i className="fa fa-user" aria-hidden="true"></i>
            </a>
            <div className="relative flex items-center">
              <button
                onClick={toggleSearch}
                className={`md:text-2xl sm:text-xl  text-md border-2 p-1 sm:p-2 hover:bg-green-500 hover:text-white rounded-full transition-all duration-700 ease-in-out delay-100 ${
                  searchOpen
                    ? "text-green-500 border-green-500"
                    : "text-green-600 border-green-500"
                }`}
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
              <div
                className={`absolute right-full p-2 ml-2 transition-all duration-700 ease-in-out ${
                  searchOpen ? "w-[200px] opacity-100" : "w-0 opacity-0"
                }`}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-8 py-4 sm:py-5  text-green-500 capitalize px-2 border-2 border-green-500 rounded-md outline-none transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>

          <button className="md:hidden    text-2xl " onClick={toggleMenu}>
            {menuOpen ? (
              <i className="fa fa-times text-green-600" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-bars text-green-600" aria-hidden="true"></i>
            )}
          </button>
        </nav>
        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out bg-gray-100  rounded-lg mt-1 shadow-md ${
            menuOpen
              ? "max-h-96 py-6  opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-4">
            <li>
              <a href="#" className="text-black text-md hover:text-green-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-md hover:text-green-700">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-md hover:text-green-700">
                Services
              </a>
              
            </li>
            <li>
              <a href="#" className="text-black text-md hover:text-green-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
