import React from "react";
import ProjectComponent from "../../reusable/projectComponent";
import "./home.css";

function Home() {
  return (
    <div className="home-page-holder">
      <div className="home-page-left-section">
        Left
      </div>
      <div className="home-page-middle-section">
        <div className="project-folders-section">
          <ProjectComponent />
          <ProjectComponent />
          <ProjectComponent />
          <ProjectComponent />
          <ProjectComponent />
          <ProjectComponent />
        </div>
      </div>
      <div className="home-page-right-section">
        Right
      </div>  
    </div>
  );
}

export default Home;
