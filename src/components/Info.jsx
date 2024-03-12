import time from "../assets/time.png";
import fork from "../assets/fork.png";
import address from "../assets/address.png";

const Info = () => {
  return (
    <div className="flex flex-col py-8 sm:h-[500px]">
      <h1 className="mx-auto text-5xl p-8">C&apos;est très simple :</h1>
      <div className="glass max-w-[1600px] flex flex-col mx-auto sm:flex-row justify-around">
        <div className="w-[300px]  flex flex-col justify-between p-5 mx-auto sm:mx-0 my-4 sm:my-0">
          <img src={address} alt="" className="w-[70px] mx-auto" />
          <p className="mx-auto">1. Donne ton adresse</p>
        </div>

        <div className="w-[300px]  flex flex-col justify-between p-5 mx-auto sm:mx-0 my-4 sm:my-0">
          <img src={fork} alt="" className="w-[70px] mx-auto" />
          <p className="mx-auto">2. Ensuite choisis ta bouffe</p>
        </div>

        <div className="w-[300px]  flex flex-col justify-between p-5 mx-auto sm:mx-0 my-4 sm:my-0">
          <img src={time} alt="" className="w-[70px] mx-auto" />
          <p className="mx-auto text-center">
            3. Attend que ça arrive chez toi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
