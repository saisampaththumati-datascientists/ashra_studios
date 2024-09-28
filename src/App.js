import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
// import Header from './Carousel'; // Keep the Header import if you're using it
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import PhotoGallery from './PhotoGallery';
import Footer from './Footer';
import NotFound from './NotFound';
import Carousel from './Carousel'; // Import the Carousel component correctly

function App() {
  const location = useLocation(); // Get the current location

  return (
    <>
      <Navbar />
      {/* <Header /> */}
      {location.pathname !== '/photos' && location.pathname !== '/contact' && <Carousel /> } 
     

      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photos" element={<PhotoGallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
