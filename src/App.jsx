import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NoGlutenFoods from "./components/NoGlutenFoods";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "./components/Info";

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
      </>
    </BrowserRouter>
  );
}

export default App;
