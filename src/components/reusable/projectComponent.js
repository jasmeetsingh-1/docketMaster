import React from "react";
import "./cssFiles/projectComponent.css";
import folderSvg from "../../assets/folder-logo.svg";
import threeDots from "../../assets/three-dots.svg";

function ProjectComponent() {
  return (
    <div className="project-folder-div-holder">      
      <div class="sample-support-div"></div>
      <div className="project-name-svg">
        <img src={folderSvg} alt="folder"/>
        Team Projects
      </div>
      <div className="project-date-holder">
        <span>Apr 2, 2023</span>
        <img src={threeDots} alt="menu"/>
      </div>
    </div>
  );
}

export default ProjectComponent;
