import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../../context/GlobalContex";
import Li from "../../components/List";
import Box from "@mui/material/Box";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";

function Detail() {
  const { id } = useParams();
  const { API_KEY, addToFavlist, favList } = useContext(GlobalContext);

  const [detailsData, setDetailsData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchDetailsData() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${API_KEY}`
      );
      const result = await response.json();
      if (result.status == "fail") throw result.message;
      setDetailsData(result.data.recipe);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err.split(":")[0]);
    }
  }

  useEffect(() => {
    fetchDetailsData();
  }, []);
  console.log(detailsData)

  return (
    <>
    {loading ? (
      <div className="text-center mt-3">
        <CircularProgress />
      </div>
    ) : error ? (
      <p>{error}</p>
    ) : (
    <div className="card m-2" style={{ width: "95%" }}>
      <div className="row g-0">
        <div className="col-md-4 position-relative">
          <img
            src={detailsData.image_url}
            className="img-fluid h-100 rounded-start image"
            alt={detailsData.title}
          />
          <IconButton
            className="position-absolute top-0 end-0"
            color="error"
            onClick={() => addToFavlist(detailsData)}
          >
            {favList &&
            favList.findIndex((items) => items.id == detailsData.id) != -1 ? (
              <MdFavorite size={"2em"} />
            ) : (
              <MdFavoriteBorder size={"2em"} />
            )}
          </IconButton>
        </div>
        <div className="col-md-8">
          <div className="card-header">
            <h3>{detailsData.title}</h3>
          </div>
          <div className="card-body">
            <h3>Ingredients:- </h3>
            <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
              {detailsData &&
                detailsData.ingredients.length > 0 &&
                detailsData.ingredients.map((items, ind) => (
                  <Li key={ind} items={items} />
                ))}
            </Box>
          </div>
        </div>
      </div>
    </div>

    )}
    </>
  );
}

export default Detail;
