import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";


const AboutSection = () => (
    <ScrollableAnchor id="about">
      <section className="content-section bg-light">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2>
                Teaching Fundamentals, So You Can Become a Self-Learner Programmer
              </h2>
              <p className="lead mb-5">
                
              </p>
              <a
                className="btn btn-dark btn-xl js-scroll-trigger"
                href="#activities">
                Begin Your Journey in Tech!
              </a>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
  
  export default AboutSection;
  