import React, { useState } from "react";
import "./AddMovie.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Box from "@material-ui/core/Box";
import { Rating } from "@material-ui/lab";

const AddMovie = ({ tab, setTab }) => {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      // backgroundColor: theme.palette.background.paper,
      // backgroundColor: "#e8b912",
      border: "2px solid gray",
      borderRadius: "20px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   States:
  const [name, setName] = useState("???");
  const [desc, setDesc] = useState("???");
  const [imageSrc, setImageSrc] = useState("???");
  const [rate, setRate] = useState(1);
  const [date, setDate] = useState("???");
  const [type, setType] = useState("");

  return (
    <div>
      <button className="addBtn" type="button" onClick={handleOpen}>
        <span class="before">+</span>
        <span class="after">Add Movie</span>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">ADD YOUR MOVIE !</h2>
            <p id="transition-modal-description">
              <form>
                <label>Name</label>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                  maxlength="10"
                  placeholder="Name"
                />
                <label>Description</label>
                <input
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                  placeholder="Description"
                />
                <label>ImageSrc</label>
                <input
                  onChange={(e) => {
                    setImageSrc(e.target.value);
                  }}
                  type="url"
                  placeholder="Should be an URL"
                />

                {/* Rating */}
                <label>Rating</label>
                <div className="rating">
                  <Box>
                    <Rating
                      value={rate}
                      onChange={(event, newValue) => {
                        setRate(newValue);
                      }}
                    />
                  </Box>
                </div>
                <label>Date</label>
                <input
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  placeholder="Date"
                  type="number"
                />

                {/* type */}
                <label>Type</label>

                <div className="type">
                  <label>Action</label>
                  <input
                    type="checkbox"
                    value="Action"
                    onChange={(e) =>
                      e.target.checked
                        ? setType(type + " " + e.target.value)
                        : null
                    }
                  />

                  <label>Horror</label>
                  <input
                    type="checkbox"
                    value="Horror"
                    onChange={(e) =>
                      e.target.checked
                        ? setType(type + " " + e.target.value)
                        : null
                    }
                  />

                  <label>Drama</label>
                  <input
                    type="checkbox"
                    value="Drama"
                    onChange={(e) =>
                      e.target.checked
                        ? setType(type + " " + e.target.value)
                        : null
                    }
                  />

                  <label>Comedy</label>
                  <input
                    type="checkbox"
                    value="Comedy"
                    onChange={(e) =>
                      e.target.checked
                        ? setType(type + " " + e.target.value)
                        : null
                    }
                  />

                  <label>Crime</label>
                  <input
                    type="checkbox"
                    value="Crime"
                    onChange={(e) =>
                      e.target.checked
                        ? setType(type + " " + e.target.value)
                        : null
                    }
                  />
                </div>

                {/* Submit button */}
                <input
                  onClick={(e) => {
                    setTab([
                      ...tab,
                      {
                        id: Math.random(),
                        image: imageSrc,
                        rating: rate,
                        name: name,
                        date: date,
                        type: type.trim().split(" ").join(" | "),
                        description: desc,
                      },
                    ]);
                    e.preventDefault();
                    setOpen(false);
                    setType("");
                    setName("???");
                    setDesc("???");
                    setImageSrc("???");
                    setDate("???");
                  }}
                  type="submit"
                  value="SUBMIT"
                  className="submit"
                />
              </form>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddMovie;
