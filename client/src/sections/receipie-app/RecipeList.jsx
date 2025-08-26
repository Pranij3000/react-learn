import FoodItem from "./../../components/recipie-app/FoodItem";
export default function RecipeList({ foodData, setSelected }) {
  return (
    <>
      <div className="recipe-list">
        <div className="row">
          {foodData.length === 0 ? (
            <p>No recipe found</p>
          ) : (
            foodData.map((food) => {
              return (
                <div className="col-6" key={food.idMeal}>
                  <FoodItem food={food} setSelected={setSelected} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
