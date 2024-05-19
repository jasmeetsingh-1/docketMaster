import React from "react";
import "./taskSection.css";
import threeDots from "../../assets/logos/three-dots.svg";

function TaskSection() {
  const myProjectsList = [
    {
      title: "Aero branding Projects",
      description: "We have to make a brand logo by end of the week",
      priority: "One",
    },
    {
      title: "Aero branding Projects",
      description: "We have to make a brand logo by end of the week",
      priority: "Two",
    },
    {
      title: "Aero branding Projects",
      description: "We have to make a brand logo by end of the week",
      priority: "Three",
    },
    // {
    //   title: "Aero branding Projects",
    //   projectTitle: "Logo, Brand Identity, Brand Strategy",
    //   description: "We have to make a brand logo by end of the week",
    //   colorCode: "#e5524b",
    // },
  ];

  return (
    <div className="taskSection-main-holder">
      <span>My task</span>
      <div className="taskSection-navbar">
        <ul className="navbar-taskSection-ul">
          <li className="navbar-taskSection-item">Recently</li>
          <li className="navbar-taskSection-item">Today</li>
          <li className="navbar-taskSection-item">Upcoming</li>
          <li className="navbar-taskSection-item">Later</li>
        </ul>
      </div>
      <div className="projects-list-holder-taskSection">
        {myProjectsList.map((item) => (
          <div className={`project-taskSection priority${item.priority}`}>
            <div className="project-header">
              <span>{item.title}</span>
              <div>
                <img src={threeDots} alt="menu" />
              </div>
            </div>
            <span className="project-description">{item.description}</span>
            <div className="project-team-holder">
              <div>🧔🏻‍♂️</div>
              <div>👩🏻‍💼</div>
              <div>👩🏻‍💼</div>
              <div>🧔🏻‍♂️</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskSection;
