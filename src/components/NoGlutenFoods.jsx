import foods from "../foods.js";

const NoGlutenFoods = ({ selectedCategory }) => {
  const filterFoods = selectedCategory
    ? foods.filter((food) => food.productCategory === selectedCategory)
    : foods;

  console.log(filterFoods);
  return (
    <div className="max-w-[1600px] mx-auto py-8 px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterFoods.map((food) => (
          <div key={food.id} className="bg-white rounded-xl overflow-hidden">
            <img
              src={food.productImage}
              alt={food.productName}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">
                {food.productName}
              </h2>
              <p className="text-xl">Prix : {food.price} €</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoGlutenFoods;
