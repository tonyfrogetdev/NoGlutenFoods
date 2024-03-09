import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="max-w-[1600px] mx-auto grid sm:grid-cols-2 sm:h-[600px] gap-4">
      <div className="bg-food-image2 bg-cover bg-center w-full flex flex-col justify-center text-center p-4 h-[300px] sm:h-full">
        <div className="bg-white rounded-xl w-[400px] md:w-[700px] mx-auto grid grid-cols-10 p-4">
          <form className="border border-slate-800 col-span-7 sm:col-span-8 flex justify-between  items-center max-w-[700px] mx-auto w-full p-1 rounded-md ">
            <input
              type="text"
              className="ml-4 bg-transparent focus:outline-none"
              placeholder="Entre ta localisation"
            />
            <button className="text-2xl">
              <AiOutlineSearch />
            </button>
          </form>
          {/* Le bouton est bizarre en écran tablette*/}
          <button className="ml-4 mx-auto my-auto col-span-2 rounded-lg before:ease h-8 w-24 overflow-hidden bg-color">
            <span>Clique</span>
          </button>
        </div>
      </div>

      <div className="bg-food-image bg-cover bg-center h-[300px] sm:h-full"></div>
    </div>
  );
};

export default Hero;
