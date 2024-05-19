import React from "react";
import "./cssFiles/home.css";
import SearchBar from "../reusable/searchBar";
import TaskSection from "../widgets/taskSection/taskSection";
import QuickReminders from "../widgets/quickReminders/quickReminders";

function Home() {
  return (
    <div className="home-page-main-holder">
      <div className="home-page-welcomeBanner">
        <div className="navbar-home-welomeBanner">
          <div className="navbar-welcomeBanner">
            <ul className="navbar-ul">
              <li className="navbar-item">Projects</li>
              <li className="navbar-item">Dashboard</li>
              <li className="navbar-item">Calender</li>
              <li className="navbar-item">Teams</li>
              <li className="navbar-item">Settings</li>
            </ul>
          </div>
        </div>
        <div className="welcomeBanner-heading">
          Hey Ashik!
          <h1>You've got 5 tasks today</h1>
        </div>
        <div className="searchBar-welcomeBanner">
          <SearchBar />
        </div>
      </div>
      <div className="homePage-contentSection">
        <div>
          <TaskSection/>
        </div>
        <div>
          <QuickReminders/>
        </div>
        <div>Notes
        {/* #ffeb87   #FFC645 */}
        </div>
      </div>
    </div>
  );
}

export default Home;
