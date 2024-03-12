import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NoGlutenFoods from "./components/NoGlutenFoods";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

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

        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <NoGlutenFoods
                  selectedCategory={selectedCategory}
                  isCartVisible={isCartVisible}
                />
              </Layout>
            }
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
