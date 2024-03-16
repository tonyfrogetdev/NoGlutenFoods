import smartphone from "../assets/SmartPhone.png";
import laptop from "../assets/LapTop.png";

const OurApp = () => {
  return (
    <div className="bg-food-image bg-cover bg-bottom grid grid-cols-2 sm:h-[400px] ">
      <div className="relative bottom-0">
        <img
          src={smartphone}
          alt=""
          className="absolute w-[350px] z-10 right-[20px] bottom-[10px]"
        />
        <img src={laptop} alt="" className="absolute w-[400px]" />
      </div>

      <div className=" text-white max-w-[700px] p-5 my-auto bg-gradient-to-br from-transparent to-black ">
        <p className="text-3xl sm:text-5xl py-4 font-bold">
          Télécharge notre App !
        </p>
        <p className="text-3xl py-4">Utilise notre app sur iOS ou Android</p>
        <div className="py-4">
          <button className="bg-black mr-5 col-span-2 mx-auto my-auto rounded-lg before:ease relative h-8 w-20 overflow-hidden">
            <span className="relative z-10">iOS</span>
          </button>
          <button className="bg-black col-span-2 mx-auto my-auto rounded-lg before:ease relative h-8 w-20 overflow-hidden">
            <span className="relative z-10">Android</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurApp;
