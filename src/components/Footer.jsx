import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-10 bg-color sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 gap-y-12 gap-x-12 md:grid-cols-4">
          <h1 className="font-bold text-xl text-white">NoGlutenFoods</h1>

          <div>
            <p className="mt-8 text-white font-semi-bold"> Support </p>
            <ul className="mt-8 space-y-4">
              <li>
                <a href="">Contacts</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mt-8 space-y-4 text-white"> Le Développeur </p>
            <ul className="mt-8">
              <li className="text-white font-bold hover:text-xl hover:text-red-500">
                <a href="https://www.youtube.com/@MadagasCode">MadagasCode</a>
              </li>
              <li className="text-white font-bold hover:text-xl hover:text-red-500">
                <a href="https://github.com/tonyfrogetdev/NoGlutenFoods/tree/main">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mt-8 space-y-4 text-white">Rejoins nous </p>
            <ul className="mt-8">
              <li>
                <a href="">Franchises</a>
              </li>
              <li>
                <a href="">Offres d'emplois</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-28 2xl:mt-32">
          <div className="sm:flex items-center sm:space-x-6">
            <ul className="flex gap-5 text-white text-3xl mb-3 sm:mb-0">
              <li>
                <a href="#" className="hover:text-blue-500">
                  <AiFillFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tonyfrogetdev/"
                  className="hover:text-blue-500"
                >
                  <AiFillLinkedin />
                </a>
              </li>
            </ul>

            <ul className="flex gap-6 text-white">
              <li>
                <a href="#">Politique de confidentialité</a>
              </li>

              <li>
                <a href="#" className="hidden md:block">
                  Conditions générales de ventes
                </a>
                <a href="" className="md:hidden">
                  CGV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
