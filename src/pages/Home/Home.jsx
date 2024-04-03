import React, { useContext } from "react";
import RecipeCard from "../../components/Card";
import GlobalContext from "../../context/GlobalContex";
import CircularProgress from "@mui/material/CircularProgress";

function Home() {
  const { recipeData, pending, error } = useContext(GlobalContext);
  return (
    <div className="mt-3">
      <div className="d-flex gap-2 container-fluid flex-wrap justify-content-center">
        {pending ? (
          <CircularProgress />
        ) : error ? (
          <p>{error}</p>
        ) : (
          recipeData == '' ?
          <div>
            <h3>Now your Home Page</h3>
            <p>Please Search some recipe</p>
          </div>
          :
          recipeData.map((recipeItem) => (
            <RecipeCard key={recipeItem.id} item={recipeItem} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
