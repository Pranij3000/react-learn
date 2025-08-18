import { useState, useEffect } from "react";

export default function RecipeSearch() {
  const [search, setSearch] = useState("");

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
