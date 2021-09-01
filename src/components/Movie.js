import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import "./Movie.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Movie = ({ item, location }) => {
  return (
    <div className="element">
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={item.image} alt={item.name} />
            <h1>{item.name}</h1>
            <h4>{item.date}</h4>
            <span className="minutes">117 min</span>
            <p className="type">{item.type}</p>
          </div>
          <div className="movie_desc" style={{ display: "flex" }}>
            <p className="text">{item.description}</p>
          </div>
          <div className="movie_social">
            <ul>
              <li>
                <i className="material-icons">share</i>
              </li>
              <li>
                <i className="material-icons">
                  {/* rating */}
                  <div>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Typography component="legend"></Typography>
                      <Rating name="read-only" value={item.rating} readOnly />
                    </Box>
                  </div>
                </i>
              </li>
              <li>
                <i className="material-icons">
                  chat_bubble
                  {console.log(location)}
                </i>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="blur_back "
          style={{ backgroundImage: `url(${item.image})` }}
        />
      </div>
    </div>
  );
};

export default Movie;
