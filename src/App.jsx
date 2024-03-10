import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NoGlutenFoods from "./components/NoGlutenFoods";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import Layout from "./components/Layout";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <BrowserRouter>
      <>
        <Navbar setSelectedCategory={setSelectedCategory} />

        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <NoGlutenFoods selectedCategory={selectedCategory} />
              </Layout>
            }
          />
          <Route path="/product/:productId/" element={<ProductPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
