import React, { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { BiSearch } from "react-icons/bi";
import GlobalContext from "../context/GlobalContex";

function Search() {
  const [value, setValue] = useState("");
  const { setSearchValue } = useContext(GlobalContext);

  function handleSumbit(e) {
    e.preventDefault();
    setSearchValue(value);
    setValue("");
  }

  return (
    <form action="" onSubmit={handleSumbit}>
      <div className="search">
        <Paper
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
          className="searchBox"
        >
          <InputBase
            sx={{ ml: 1, width: "100%" }}
            placeholder="Search food Recipe"
            inputProps={{ "aria-label": "search food recipe" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <IconButton>
            <BiSearch />
          </IconButton>
        </Paper>
      </div>
    </form>
  );
}

export default Search;
