import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import your CSS file

function About() {
  const navigate = useNavigate();

  const navigateToPhotos = () => {
    navigate('/photos'); // Use the navigate function
  };

  return (
    <section className="about-section text-center" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8">
            {/* Apply the 'custom-text' class to the heading */}
            <h2 className="text-black mb-4 custom-text">Welcome to Ashra Studios</h2>
            {/* Apply the 'custom-text_1' class to the paragraph */}
            <p className="text-black custom-text_1">
              where we transform moments into timeless treasures. Capturing the essence of love and the beauty of matrimony is not just our profession, but our passion. We specialize in telling your unique love story through the lens, preserving every laugh, tear, and tender embrace in stunning detail.
              Our approach is rooted in authenticity and intimacy, aiming to document the genuine emotions and connections shared between couples on their special day. With a keen eye for detail and a commitment to excellence, we ensure that every photograph encapsulates the magic and emotion of your wedding day.
            </p>
          </div>
        </div>
        <button className="btn btn-primary mt-4" onClick={navigateToPhotos}>
          View Photo Gallery
        </button>
      </div>
    </section>
  );
}

export default About;
