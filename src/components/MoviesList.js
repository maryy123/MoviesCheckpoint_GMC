import React, { useState } from "react";
import Filter from "./Filter";
import "./MoviesList.css";
const MoviesList = ({ items, input, rate }) => {
  const handleName = (name) => {
    alert(name);
  };

  return (
    <div className="items">
      <Filter items={items} input={input} rate={rate} handleName={handleName} />
    </div>
  );
};

export default MoviesList;
