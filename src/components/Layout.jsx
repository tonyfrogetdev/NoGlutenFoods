import { useLocation } from "react-router-dom";
import Hero from "./Hero";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <Hero />}
      {children}
    </>
  );
};

export default Layout;
