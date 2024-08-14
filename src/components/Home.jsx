import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const images = [
    'https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/original/image-manager/patna3.jpg?t=1657952499&_gl=1*mf7vid*_ga*ODM4OTk0OTkuMTY1NDI1Mjg4NA..*_ga_WS2VZYPC6G*MTY1Nzk2MDY0MS4xNzIuMS4xNjU3OTYxMDk5LjQ.',
    'https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/original/image-manager/whatsapp-image-2022-09-01-at-4.29.53-pm.jpeg?t=1662030195&_gl=1*icagyb*_ga*NDUyMDA4MTEwLjE2NTk3NzAzMDM.*_ga_WS2VZYPC6G*MTY2MjAzMDI0My44My4xLjE2NjIwMzEzNTMuMTEuMC4w',
    'https://cdn11.bigcommerce.com/s-tj87duh98/product_images/uploaded_images/zirakpur1.jpg',
    'https://cdn11.bigcommerce.com/s-tj87duh98/product_images/uploaded_images/download-17-.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
      <button className="prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <img src={images[currentIndex]} alt="slide" className="slide-image" />
      <button className="next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Home;
