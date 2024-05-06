import React from "react";
import ProjectComponent from "../../reusable/projectComponent";
import "./home.css";
import Sidebar from "../../sidebar/sidebar";
import folderLogo from "../../../assets/Folder.svg";

function Home() {
  return (
    <div className="home-page-holder">
      <div className="home-page-left-section">
        <Sidebar />
      </div>
      <div className="home-page-middle-section">
        <span className="home-middle-section-greetings">
          Welcome Back! Muhammed
        </span>

        <div>
          <div className="heading-projects-section">
            <img src={folderLogo} alt="Foldesrs" />
            Folders
          </div>
          <div className="project-folders-section">
            <ProjectComponent />
            <ProjectComponent />
            <ProjectComponent />
            <ProjectComponent />
            <ProjectComponent />
            <ProjectComponent />
          </div>
        </div>
      </div>
      <div className="home-page-right-section">Right</div>
    </div>
  );
}

export default Home;
