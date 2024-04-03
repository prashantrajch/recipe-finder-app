import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favourite from "./pages/Favourite/Favourite";
import Detail from "./pages/Details/Detail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/recipe-finder-app" element={<Home />} />
        <Route path="/recipe-finder-app/favourite" element={<Favourite />} />
        <Route path="/recipe-finder-app/details/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
