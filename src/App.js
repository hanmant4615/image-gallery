import React, { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "./Gallery";
import "./App.css";
import { url } from "./utils";

function App() {
  const [photoGalleryArray, updatePhotoGalleryArray] = useState([]);

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
      <div className="row">
        <Gallery images={photoGalleryArray} />
      </div>
    </div>
  );
}

export default App;
