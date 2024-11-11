import React from "react";

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.download_url}
          alt={`image_${image.id}`}
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default Gallery;
