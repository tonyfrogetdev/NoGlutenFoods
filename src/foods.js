import burgerclassic from "./assets/noglutenfoods/Burger1.png";
import burgerChicken from "./assets/noglutenfoods/Burger2.png";
import burgerTandoori from "./assets/noglutenfoods/Burger3.png";
import pizzaChevreMiel from "./assets/noglutenfoods/pizza1.png";
import pizzaBarbecue from "./assets/noglutenfoods/pizza2.png";
import pizzaCalzone from "./assets/noglutenfoods/pizza3.png";

export const foods = [
  {
    id: 1,
    productName: "BurgerMaxClassic",
    price: 14.99,
    productImage: burgerclassic,
    productCategory: "burger",
  },
  {
    id: 2,
    productName: "BurgerChicken",
    price: 14.99,
    productImage: burgerChicken,
    productCategory: "burger",
  },
  {
    id: 3,
    productName: "BurgerTandoori",
    price: 16.99,
    productImage: burgerTandoori,
    productCategory: "burger",
  },
  {
    id: 4,
    productName: "BurgerTandoori&Frites",
    price: 18.99,
    productImage: burgerTandoori,
    productCategory: "burger",
  },
  {
    id: 5,
    productName: "PizzaChevreMiel",
    price: 15.99,
    productImage: pizzaChevreMiel,
    productCategory: "pizza",
  },
  {
    id: 6,
    productName: "PizzaBarbecue",
    price: 15.99,
    productImage: pizzaBarbecue,
    productCategory: "pizza",
  },
  {
    id: 7,
    productName: "PizzaCalzone",
    price: 19.99,
    productImage: pizzaCalzone,
    productCategory: "pizza",
  },
  {
    id: 8,
    productName: "PizzaBarbecue&Frites",
    price: 19.99,
    productImage: pizzaBarbecue,
    productCategory: "pizza",
  },
];

export default foods;
