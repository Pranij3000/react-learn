import { useState } from "react";
import RecipieHeader from "./sections/receipie-app/RecipieHeader";
import RecipeSearch from "./sections/receipie-app/RecipeSearch";
import RecipeList from "./sections/receipie-app/RecipeList";
import RecipeDetail from "./sections/receipie-app/RecipeDetail";

export default function RecipieApp() {
  const [foodData, setFoodData] = useState([]);
  const [selected, setSelected] = useState("");
  console.log(selected);

  return (
    <>
      <RecipieHeader />
      <RecipeSearch setFoodData={setFoodData} />
      <div className="recipie-container">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <RecipeList foodData={foodData} setSelected={setSelected} />
            </div>
            <div className="col-4">
              <RecipeDetail selected={selected} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
