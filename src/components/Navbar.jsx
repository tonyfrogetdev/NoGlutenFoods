import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = ({ setSelectedCategory, toggleCartVisibility }) => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
    console.log("état : " + nav);
  };

  return (
    <div className="z-20 bg-white fixed text-black h-20 w-full mx-auto flex justify-around items-center">
      <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-200 inline-block text-transparent bg-clip-text">
        <Link to="/">NoGlutenFoods</Link>
      </h1>

      <button
        onClick={toggleCartVisibility}
        className="p-5 my-auto text-2xl text-orange-300"
      >
        <AiOutlineShoppingCart />
      </button>

      <ul className="text-center hidden md:flex gap-6">
        <a href="#burgers" onClick={() => setSelectedCategory("burger")}>
          <li className="rounded-lg h-8 w-36 border border-orange-300 btn-color">
            NoGlutenBurgers
          </li>
        </a>
        <a href="#pizza" onClick={() => setSelectedCategory("pizza")}>
          <li className="rounded-lg h-8 w-36 border border-orange-300 btn-color">
            NoGlutenPizza
          </li>
        </a>
      </ul>

      <div onClick={toggleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={`${
          nav
            ? "fixed top-[80px] h-full w-5/6 ease-in-out duration-500"
            : "fixed top-[-100%] ease-in-ou duration-500"
        }`}
      >
        <ul className="text-center grid grid-cols-2 gap-2 p-8 text-xl w-full bg-color rounded-md text-white md:hidden ">
          <li className="p-2 border border-white rounded-lg  btn-color-small ">
            <a href="#burger" onClick={() => setSelectedCategory("burger")}>
              Burgers
            </a>
          </li>
          <li className="p-2 border border-white  rounded-lg btn-color-small">
            <a href="#pizza" onClick={() => setSelectedCategory("pizza")}>
              Pizza
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
