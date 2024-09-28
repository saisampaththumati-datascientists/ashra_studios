import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import custom CSS styles

function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const photoData = [
    { fileName: 'assets/img/055.jpg', description: 'Photo 1 description' },
    { fileName: 'assets/img/25.jpg', description: 'Photo 2 description' },
    { fileName: 'assets/img/4.jpg', description: 'Photo 3 description' },
    { fileName: 'assets/img/A19I7598 copy.jpg', description: 'Photo 4 description' },
    { fileName: 'assets/img/A19I7680 copy.jpg', description: 'Photo 5 description' },
    { fileName: 'assets/img/DIN04245 copy1.jpg', description: 'Photo 6 description' },
    { fileName: 'assets/img/RAM04053 copy.jpg', description: 'Photo 7 description' }
  ];

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = () => {
    setLoading(true);
    setTimeout(() => {
      setPhotos(photoData);
      setLoading(false);
    }, 1000); // Simulate a delay for loading
  };

  return (
    <div>
      {/* Header */}
      <header className="py-5">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <h1 className="display-5 fw-bold">All Photos</h1>
            <p className="fs-4">Browse through our complete photo collection. New photos will appear as you scroll down.</p>
          </div>
        </div>
      </header>

      {/* Photo Gallery */}
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="photo-gallery">
            {loading ? (
              <div className="text-center my-3">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              photos.map((photo, index) => (
                <div key={index} className="photo-item">
                  <img
                    src={require(`./${photo.fileName}`)}
                    alt={photo.description}
                    className="photo-img"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default PhotoGallery;
