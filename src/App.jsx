import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NoGlutenFoods from "./components/NoGlutenFoods";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "./components/Info";
import OurApp from "./components/OurApp";
import Footer from "./components/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <>
        <Navbar
          setSelectedCategory={setSelectedCategory}
          toggleCartVisibility={toggleCartVisibility}
        />
        <Hero />
        <Routes>
          <Route
            path="/"
            element={
              <NoGlutenFoods
                selectedCategory={selectedCategory}
                isCartVisible={isCartVisible}
              />
            }
          />
        </Routes>
        <Info />
        <OurApp />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
