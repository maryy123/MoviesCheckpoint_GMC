import React, { useState } from "react";
import Filter from "./Filter";
import "./MoviesList.css";

const MoviesList = ({
  match,
  items,
  input,
  rate,
  setSelected,
  setShowTrailer,
  showTrailer,
}) => {
  // const handleName = (name) => {
  //   alert(name);
  // };

  return (
    <div className="items">
      <Filter
        items={items}
        input={input}
        rate={rate}
        match={match}
        setSelected={setSelected}
        setShowTrailer={setShowTrailer}
        showTrailer={showTrailer}
      />
    </div>
  );
};

export default MoviesList;
