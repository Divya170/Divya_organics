import { useState } from "react";

const OrganicFruit = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterClick = (category, e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    setFilter(category);
  };

  return (
    <>
      <nav
        className="h-14 my-2 max-w-[1200px] delay-100 duration-1000 flex items-center justify-between p-3 w-full mx-auto bg-gray-100 rounded-2xl mt-4 transition-transform"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <h2
          className="lg:text-4xl hidden md:block font-extrabold text-gray-900"
          style={{ textShadow: "0 0 2px darkblue" }}
        >
          organic products
        </h2>
        <ul className="flex items-center md:gap-7 text-sm flex-wrap gap-1">
          {["all", "f", "v", "df"].map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={(e) => handleFilterClick(item, e)}
                className={`text-black sm:p-3 p-1 text-md capitalize rounded-3xl w-full font-bold text-md hover:text-green-700 ${
                  filter === item ? "bg-green-600 text-white" : ""
                }`}
              >
                {item === "f"
                  ? "fruits"
                  : item === "v"
                  ? "vegetables"
                  : item === "df"
                  ? "dry fruits"
                  : "all"}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <FilteringOrganicFruits filter={filter} />
    </>
  );
};

const FilteringOrganicFruits = ({ filter }) => {
  const products = [
    {
      id: 1,
      type: "f",
      img: "/f1.png",
      name: "Organic Apple",
      desc: "Organic apples are grown in carefully managed environments free from synthetic pesticides. They're rich in antioxidants, making them a healthy addition to your diet. Enjoy the fresh taste of nature's best.",
    },
    {
      id: 2,
      type: "v",
      img: "/v1.png",
      name: "Organic Carrot",
      desc: "Organic carrots are full of vitamins and minerals, grown without harmful chemicals. They provide a natural sweetness, ideal for cooking or eating raw. Keep your body nourished with these vibrant veggies.",
    },
    {
      id: 3,
      type: "df",
      img: "/df1.png",
      name: "Dry Almonds",
      desc: "Dry almonds are a wholesome snack packed with protein, fiber, and healthy fats. They are grown organically, ensuring you get only the best. Perfect for a quick energy boost or as a nutritious addition to recipes.",
    },
    {
      id: 4,
      type: "f",
      img: "/f7.png",
      name: "Organic Banana",
      desc: "Organic bananas are nature’s powerhouse, loaded with potassium and other essential nutrients. Grown without synthetic pesticides, they offer a pure, sweet flavor. Great for snacking or smoothies.",
    },
    {
      id: 5,
      type: "v",
      img: "/v9.png",
      name: "Organic Broccoli",
      desc: "Organic broccoli is a nutrient-dense vegetable, grown in healthy soil without chemical fertilizers. Rich in vitamins C and K, it's perfect for boosting your immune system and adding to a balanced diet.",
    },
    {
      id: 6,
      type: "df",
      img: "/df4.png",
      name: "Organic Almonds",
      desc: "Organic almonds provide a rich, buttery flavor packed with healthy fats and proteins. They’re cultivated without synthetic inputs, giving you a natural, wholesome snack for any time of day.",
    },
    {
      id: 7,
      type: "f",
      img: "/f10.png",
      name: "Organic Apple",
      desc: "This organic apple variety is cultivated in pristine orchards, free of pesticides. Its crisp texture and sweet-tart flavor make it an excellent snack. Packed with fiber, it promotes good digestive health.",
    },
    {
      id: 8,
      type: "v",
      img: "/v6.png",
      name: "Organic Carrot",
      desc: "These organic carrots are handpicked and grown in nutrient-rich soil. They are packed with beta-carotene, promoting eye health. Whether you cook or eat them raw, they’re a tasty and healthy option.",
    }
  ];

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.type === filter);

  return (
    <div className="h-full w-full  gap-7 p-3 place-items-center grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="border-2 border-green-600 max-w-[270px] cursor-pointer relative duration-500 hover:shadow-[0_0_7px_black] w-full flex flex-col justify-center rounded-2xl h-full "
          data-aos="fade-up" 
          data-aos-offset="200"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <span className="p-3 h-4 flex items-center justify-center capitalize -right-1 top-1 group-hover:shadow-[1px_2px_3px_green,-1px_-1px_2px_green] absolute text-center font-bold w-full max-w-4 text-white mb-2 rounded-3xl mx-2 bg-green-500">
            {product.type}
          </span>
          <div className="h-52 w-full relative overflow-hidden object-cover delay-700 bg-center rounded-xl bg-cover">
            <img
              src={product.img}
              alt={product.name}
              className="rounded-2xl hover:scale-125 duration-700"
            />
          </div>
          <div className="content  w-full mt-2 p-3 rounded-b-xl rounded-t-md">
            <h3 className="text-sm text-center sm:text-xl text-black font-bold">
              {product.name}
            </h3>
            <p className="text-sm sm:text-base indent-10 text-justify text-gray-500">
              {product.desc}
            </p>
            <div className="h-12 mt-2 flex items-center justify-center gap-3 w-full">
              <button className="group p-3 w-full text-black font-bold flex items-center justify-center gap-3 hover:text-white hover:bg-green-500 duration-500 rounded-2xl border-2 border-green-600">
                Add to Cart
                <i
                  className="fa fa-shopping-cart text-black font-bold duration-500 group-hover:text-white"
                  aria-hidden="true"
                ></i>
              </button>
              <a
                href="#"
                className="text-2xl border-2 p-2 rounded-full relative border-green-500 text-white bg-green-500 hover:text-green-500 hover:bg-white duration-700 delay-100"
              >
                <i className="fa fa-heart" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrganicFruit;
