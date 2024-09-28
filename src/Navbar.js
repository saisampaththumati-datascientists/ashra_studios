import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you include your CSS file
import '../src/App.css'
function Navbar() {
  const scrollToSection = (section) => {
      const element = document.getElementById(section);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.location.hash = section; // Update the URL hash
      }
  };


    return (
        <nav className="text-black navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand custom-navbar-text" to="/">ASHRA</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    Menu <i className="fas fa-bars custom-navbar-text"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link custom-navbar-link" to="/">Home</Link> 
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link custom-navbar-link" href="#" onClick={() => scrollToSection('projects')}>Projects</a>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link custom-navbar-link" to="/photos">Photos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link custom-navbar-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

