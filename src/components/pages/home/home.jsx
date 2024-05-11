import React from "react";
import "./home.css";
import searchLogo from "../../../assets/logos/searchLogo.svg";
import banner from "../../../assets/homePageDashboard.svg";

// function Home() {
//   return (
//     <div className="home-page-holder">
//       <div className="home-page-left-section">
//         <Sidebar />
//       </div>
//       <div className="home-page-middle-section">
//         <span className="home-middle-section-greetings">
//           Welcome Back! Muhammed
//         </span>

//         <div>
//           <div className="heading-projects-section">
//             <img src={folderLogo} alt="Foldesrs" />
//             Folders
//           </div>
//           <div className="project-folders-section">
//             <ProjectComponent />
//             <ProjectComponent />
//             <ProjectComponent />
//             <ProjectComponent />
//             <ProjectComponent />
//             <ProjectComponent />
//           </div>
//         </div>
//       </div>
//       <div className="home-page-right-section">Right</div>
//     </div>
//   );
// }

// new home

function Home() {
  return (
    <div className="home-page-holder">
      <div className="home-page-searchHolder">
        <img src={searchLogo} alt="searchLogo" width="20px"/>
        <input type="text" placeholder="Start searching here ..." />
      </div>
      <div className="home-page-dashboard-container">
        <div className="home-page-banner">
          <img src={banner} alt="Welcome" />
          <div className="home-page-banner-content">
            <h3>
              Welcome back to your
            </h3>
            <h2>
              Daily Task Manager
            </h2>
            <button>
              Start Tracking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
