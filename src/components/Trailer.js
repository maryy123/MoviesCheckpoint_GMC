import React from "react";
import Movie from "./Movie";
import "./Trailer.css";
const Trailer = ({
  location: {
    state: { el },
  },
  history,
}) => {
  return (
    <div className="trailer">
      <Movie item={el} />
      <div className="section">
        {el.video ? (
          <iframe src={el.video}></iframe>
        ) : (
          <div className="no-available">No available trailer</div>
        )}
        <button onClick={() => history.push("/")}>Home</button>
      </div>
    </div>
  );
};

export default Trailer;
