export default function FoodItem({ food, setSelected }) {
  const itemSelection = (e) => {
    e.preventDefault();
    setSelected(food);
  };
  return (
    <>
      <div className="food-card mb-20">
        <div className="img-wrapper">
          <img src={food.strMealThumb} alt="" className="img-fluid" />
        </div>
        <div className="content-wrapper">
          <h4>{food.strMeal}</h4>
          <p>{food.strCategory}</p>
          <button onClick={(e) => itemSelection(e)}>View the Recipe</button>
        </div>
      </div>
    </>
  );
}
