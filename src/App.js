import React, { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "./Gallery";
import "./App.css";
import { blur, grayscale, url } from "./utils";

function App() {
  const [photoGalleryArray, updatePhotoGalleryArray] = useState([]);
  const [isgrayscale, setisgrayscale] = useState(false);
  const [isBlur, setisBlur] = useState(false);

  const handleClickbtn1 = () => {
    setisgrayscale(!isgrayscale);
  };

  const handleClickbtn2 = () => {
    setisBlur(!isBlur);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        updatePhotoGalleryArray(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="w-100 text-light">Image Gallery</div>
      </nav>
      <div className="button-container">
        <button className="btn" onClick={() => handleClickbtn1()}>
          Random grayscale
        </button>
        <button className="btn" onClick={() => handleClickbtn2()}>
          Random blur
        </button>
      </div>

      <div className="image-div">
        {isgrayscale && <img src={grayscale} alt="Random grayscale" />}
        {isBlur && <img src={blur} alt="Random blur" />}
      </div>

      <div className="row">
        <Gallery images={photoGalleryArray} />
      </div>
    </div>
  );
}

export default App;
