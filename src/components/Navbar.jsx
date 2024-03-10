import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = ({ setSelectedCategory }) => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
    console.log("état : " + nav);
  };
  console.log(setSelectedCategory);
  return (
    <div className="bg-white fixed text-black h-20 w-full mx-auto flex justify-around items-center">
      <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-200 inline-block text-transparent bg-clip-text">
        <Link to="/">NoGlutenFoods</Link>
      </h1>
      <div className="flex gap-3 md:gap-6">
        <button className="rounded-lg h-8 w-28 border border-orange-300 btn-color">
          Commander
        </button>
        <button className="rounded-lg h-8 w-16 border border-orange-300 btn-color">
          Panier
        </button>
      </div>
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
              NoGlutenBurgers
            </a>
          </li>
          <li className="p-2 border border-white  rounded-lg btn-color-small">
            <a href="#pizza" onClick={() => setSelectedCategory("pizza")}>
              NoGlutenPizza
            </a>
          </li>

          <button className="p-2 border border-white  rounded-lg btn-color-small">
            Commander
          </button>
          <button className="p-2 border border-white  rounded-lg btn-color-small">
            Panier
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
