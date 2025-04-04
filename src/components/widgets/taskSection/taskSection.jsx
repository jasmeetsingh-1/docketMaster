import React from "react";
import "./taskSection.css";
import threeDots from "../../../assets/logos/three-dots.svg";

const myProjectsList = [
  {
    title: "Aero branding Project",
    description: "We have to make a brand logo by end of the week",
    priority: "p0",
  },
  {
    title: "Aero branding Project",
    description: "We have to make a brand logo by end of the week",
    priority: "p1",
  },
  {
    title: "Aero branding Project",
    description: "We have to make a brand logo by end of the week",
    priority: "p2",
  },
  {
    title: "Aero branding Projects",
    description: "We have to make a brand logo by end of the week",
    priority: "p0",
  },
];

function TaskSection() {

  return (
    <div className="taskSection-main-holder">
      <span>My Projects</span>
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
              {/* this emojis would be eventually based on the gender  */}
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
