import React, { useState } from 'react';
import './Projects.css'; // Import your CSS file for styling

function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="projects-section bg-lights" id="projects">
      <div className="container px-4 px-lg-5">
        {/* Featured Project Row */}
        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
          <div className="col-xl-8 col-lg-7">
            <img
              src={isHovered ? require('./assets/img/4.jpg') : require('./assets/img/SID09332 copy.jpg')}
              className="project-image"
              alt="Project"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <p className="text-black-50 mb-0 custom-text_1">
                From the excitement of getting ready to the heartfelt vows exchanged, and the joyous celebrations that follow, we are there to capture every fleeting moment, allowing you to relive the magic of your wedding day for years to come. Whether it’s a grand affair or an intimate ceremony, we understand the importance of every detail and strive to deliver a personalized experience tailored to your unique vision and style.
              </p>
            </div>
          </div>
        </div>

        {/* Project One Row */}
        <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
          <div className="col-lg-6">
            <img className="img-fluid project-image" src={require('./assets/img/25.jpg')} alt="Misty" />
          </div>
          <div className="col-lg-6">
            <div className="bg-custom text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <p className="mb-0 text-black-50 custom-text_1">
                    Behind every great photograph is a talented and dedicated team, and at Ashra Studios, we’re proud to have some of the best in the industry. Our team of experienced photographers and creative professionals are passionate about their craft and committed to delivering exceptional results. With a keen eye for detail, a flair for creativity, and a commitment to excellence, our team works tirelessly to capture the perfect shot, every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Two Row */}
        <div className="row gx-0 justify-content-center">
          <div className="col-lg-6">
            <img className="img-fluid project-image" src={require('./assets/img/SID08308 copy.jpg')} alt="Mountains" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-custom text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <p className="mb-0 text-black-50 custom-text_1">
                    Whether you’re planning a wedding, celebrating a milestone, or simply want to capture the beauty of everyday life, Ashra Studios is here to help you preserve the moments that matter most. Contact us today to learn more about our services and let us help you tell your story through the art of photography.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
}

export default Projects;
