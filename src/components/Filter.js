import React from "react";
import Movie from "./Movie";

const Filter = ({ items, input, rate, handleName }) => {
  const t = items.filter(
    (el) =>
      el.rating >= rate && el.name.toUpperCase().startsWith(input.toUpperCase())
  );
  return (
    <div>
      {t.length > 0
        ? t.map((el, i) => <Movie item={el} key={i} handleName={handleName} />)
        : "No such movie !!"}
    </div>
  );
};

export default Filter;
