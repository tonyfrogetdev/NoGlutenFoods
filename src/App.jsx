import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NoGlutenFoods from "./components/NoGlutenFoods";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <Navbar setSelectedCategory={setSelectedCategory} />
      <Hero />
      <NoGlutenFoods selectedCategory={selectedCategory} />
    </>
  );
}

export default App;
