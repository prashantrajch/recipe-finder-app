import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContex";
import RecipeCard from "../../components/Card";

function Favourite() {
  const { favList } = useContext(GlobalContext);
  return (
    <div className="mt-3">
      <div className="d-flex gap-2 container-fluid flex-wrap justify-content-center">
        {favList == "" ? (
          <h3>Favourites List is empty</h3>
        ) : (
          favList.map((recipeItem) => (
            <RecipeCard key={recipeItem.id} item={recipeItem} />
          ))
        )}
      </div>
    </div>
  );
}

export default Favourite;
