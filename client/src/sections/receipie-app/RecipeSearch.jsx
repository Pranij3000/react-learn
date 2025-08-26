import { useState, useEffect } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/search.php";
const apiKey = "d182b662568a43cfbb3b35fb0f3a41ca";

export default function RecipeSearch({ setFoodData }) {
  const [search, setSearch] = useState("Chicken");

  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${url}?s=${search}`);
      const data = await res.json();
      setFoodData(data.meals || []);
    };
    fetchFood();
  }, [search]);

  return (
    <>
      <section className="recipe-search py-20">
        <div className="container">
          <div className="search-wrapper mx-auto width-fit">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
      </section>
    </>
  );
}
