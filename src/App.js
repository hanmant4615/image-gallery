import React, { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "./Gallery";
import "./App.css";
import { blur, grayscale, url } from "./utils";

function App() {
  const [photoGalleryArray, updatePhotoGalleryArray] = useState([]);

  const handleClickbtn1 = () => {
    axios
      .get(grayscale)
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickbtn2 = () => {
    axios
      .get(blur)
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.log(error);
      });
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
        <div className="button-container">
          <button className="btn" onClick={() => handleClickbtn1}>
            Random grayscale
          </button>
          <button className="btn" onClick={() => handleClickbtn2}>
            Random blur
          </button>
        </div>
      </nav>
      <div className="row">
        <Gallery images={photoGalleryArray} />
      </div>
    </div>
  );
}

export default App;
