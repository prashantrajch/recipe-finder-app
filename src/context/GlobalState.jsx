import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContex";
import { useNavigate } from "react-router-dom";

export default function GlobalState({ children }) {
  const API_KEY = "72551abf-30d9-4512-8d5f-198e03e44bf2";
  const [searchValue, setSearchValue] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [recipeData, setRecipeData] = useState("");
  const [favList, setFavList] = useState([]);

  const navigate = useNavigate();

  async function fetchRecipeData() {
    setError('');
    setPending(true);
    navigate('/recipe-finder-app');
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchValue}&key=${API_KEY}`
      );
      const result = await response.json();
      if (result.results == 0) throw "You entered wrong input...";
      setRecipeData(result.data.recipes);
      setPending(false);
    } catch (err) {
      setPending(false);
      setError(err);
    }
  }

  useEffect(() => {
    if (searchValue) {
      fetchRecipeData();
    }
  }, [searchValue]);

  function addToFavlist(currentItem) {
    const copyFavList = [...favList];
    const index = copyFavList.findIndex((items) => items.id == currentItem.id);
    if (index == -1) {
      copyFavList.push(currentItem);
    } else {
      copyFavList.splice(index, 1);
    }
    setFavList(copyFavList);
  }

  return (
    <GlobalContext.Provider
      value={{ setSearchValue, API_KEY, recipeData, addToFavlist, favList,pending,error}}
    >
      {children}
    </GlobalContext.Provider>
  );
}
