import foods from "../foods.js";
import { useEffect, useState } from "react";
import { BsCart, BsStarFill } from "react-icons/bs";

const NoGlutenFoods = ({ selectedCategory, isCartVisible }) => {
  // Filtre la nourriture selon la catégorie selectionner
  const filterFoods = selectedCategory
    ? foods.filter((food) => food.productCategory === selectedCategory)
    : foods;

  // Recupere les éléments du panier depuis le stockage local
  const fromLocalStorage = JSON.parse(localStorage.getItem("foods"));
  const [cartItems, setCartItems] = useState(fromLocalStorage);

  // vérifie les données du panier existant dans le stockage local sinon les initialise avec les valeurs par défauts
  if (!localStorage.getItem("foods")) {
    localStorage.setItem(
      "foods",
      JSON.stringify({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 })
    );
  }
  // utilise un effet pour surveiller les changements dans cartItems et synchronise avec stockage local
  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(cartItems));
  }, [cartItems]);

  //Ajout d'un article au panier
  const addToCart = (id) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: cartItems[id] + 1 }));
  };
  //Retrait d'un article du panier
  const removeFromCart = (id) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: 0 }));
  };

  // Calcul montant total
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        let itemInfo = foods.find((food) => food.id === Number(key));
        totalAmount += cartItems[key] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2);
  };

  return (
    <div
      className=" my-10 max-w-[1600px] place-items-center flex flex-col gap-12 lg:mx-auto"
      id="food"
    >
      {isCartVisible && (
        <div className="z-10 fixed p-4 right-0 top-[80px] bg-color w-96 h-96 overflow-y-scroll">
          <p className="text-2xl font-bold">
            Ta commande : {getTotalAmount()}€
          </p>
          {foods.map((food) => {
            if (cartItems[food.id] !== 0) {
              return (
                <div
                  key={food.id}
                  className="glass my-3 grid grid-cols-5 overflow-hidden"
                >
                  <img
                    src={food.productImage}
                    alt={food.productName}
                    className="rounded-lg w-[100px] h-[100px] object-cover col-span-2"
                  />
                  <div>
                    <p className="text-xl font-bold pl-2">
                      {cartItems[food.id]} x
                    </p>
                    <p className="flex items-center space-x-4 italic">
                      {food.productName}
                    </p>
                    <p>{food.price}€</p>
                  </div>

                  <div className="relative right-0 bottom-0 gap-2 font-bold">
                    <button
                      onClick={() => removeFromCart(food.id)}
                      className="text-red-500 bg-red-300 hover:text-red-100 p-2 rounded"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}

      <h2 className="text-3xl p-4 w-full text-start">NoGlutenFoods</h2>
      <div className="grid lg:grid-cols-4 place-items-center gap-6">
        {filterFoods.map((food) => (
          <div
            key={food.id}
            className="card w-full md:w-[380px] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            <img
              src={food.productImage}
              alt={food.productName}
              className="object-cover object-center w-full h-48"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{food.productName}</h2>
              <div className="flex my-2">
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
              </div>
              <div className="flex justify-between items-center mt-4">
                <h3 className="font-semibold text-lg">{food.price} €</h3>
                <button
                  onClick={() => addToCart(food.id)}
                  className="flex items-center gap-1 bg-orange-300 hover:bg-color text-white font-bold py-2 px-4 rounded"
                >
                  <BsCart />
                  <span>Ajouter</span>
                </button>
              </div>
            </div>

            {cartItems[food.id] > 0 && (
              <div className="absolute top-0 left-0 bg-green-600 text-white font-bold rounded-br-lg px-3 py-1">
                {cartItems[food.id]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoGlutenFoods;
