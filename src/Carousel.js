import React from 'react';
import './index.css'; // Import your CSS file

function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          {/* Apply the 'cover-image' class to control size */}
          <img src={require('./assets/img/SID09197 copy.jpg')} className="d-block w-100 cover-image" alt="First slide" />
        </div>
        <div className="carousel-item">
          {/* Apply the 'cover-image' class to control size */}
          <img src={require('./assets/img/A19I7598 copy.jpg')} className="d-block w-100 cover-image" alt="Second slide" />
        </div>
        <div className="carousel-item">
          {/* Apply the 'cover-image' class to control size */}
          <img src={require('./assets/img/DIN04245 copy1.jpg')} className="d-block w-100 cover-image" alt="Third slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
