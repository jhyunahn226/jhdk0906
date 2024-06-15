import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ImageCarousel = ({ photos, handleImageClick }) => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={3000}
    >
      {photos.map((photo) => (
        <div key={photo.id} onClick={() => handleImageClick(photo)}>
          <img src={photo.url} alt={photo.description} />
          <p className="legend">{photo.description}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
