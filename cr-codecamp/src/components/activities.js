import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const CourseActivities = [
  {
    title: "Evening Code Classes",
    description: "Every night we gather over locally sourced foods and learn the fundamentals of programming",
    icon: 'fas fa-seedling'
   
},
{
    title: "Build Essential Connections",
    description: "Forge lasting relationships with your fellow coders with a group project.",
    icon: 'fas fa-globe'
   
  },
  {
    title: "Day Trips to Epic Locations",
    description: (
      <span>
        We <i className="fas fa-heart" /> our health as much as we love programming.  Enjoy daily yoga classes & guided outings!
      </span>
    ),
    icon: 'fas fa-tint'
    
  },
  {
    title: "Ongoing Mentor Support",
    description: "We ensure that you have the proper support after the program ends to continue your path individually.",
    icon: 'fas fa-leaf'
    
  }
];
const CourseSections = () => (
  <ScrollableAnchor id="activities">
    <section className="content-section bg-primary text-white text-center">
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-0">Program Outline</h3>
          <h2 className="mb-5">Activities</h2>
        </div>
        <div className="row">
          {CourseActivities.map((project, index) => (
            <div
              className="col-lg-3 col-md-6 mb-5 mb-lg-0"
              key={`service_${index}`}
            >
              <span className="project-icon rounded-circle mx-auto mb-3">
                <i className={project.icon} />
               
              </span>
              <h4>
                <strong>{project.title}</strong>
              </h4>
              <p className="text-faded mb-0">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);
export default CourseSections;
