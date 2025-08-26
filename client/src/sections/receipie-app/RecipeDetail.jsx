export default function RecipeDetail({ selected }) {
  return (
    <>
      <div className="food-detail">
        <div className="img-container mb-8">
          <img src={selected.strMealThumb} alt="" className="img-fluid" />
        </div>
        <h2 className="mb-8">{selected.strMeal}</h2>
        <p>{selected.strInstructions}</p>
      </div>
    </>
  );
}
