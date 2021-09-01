import React from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";

const Filter = ({ items, input, rate, match }) => {
  const t = items.filter(
    (el) =>
      el.rating >= rate && el.name.toUpperCase().startsWith(input.toUpperCase())
  );
  return (
    <div>
      {t.length > 0
        ? t.map((el) => (
            <Link
              to={{ pathname: `/${el.id}`, state: { el } }}
              style={{ textDecoration: "none" }}
            >
              <Movie item={el} key={el.id} />
            </Link>
          ))
        : "No such movie !!"}

      {console.log(match.params)}
    </div>
  );
};

export default Filter;
