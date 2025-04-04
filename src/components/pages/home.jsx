import React from "react";
import "./cssFiles/home.css";
import SearchBar from "../reusable/searchBar";
import TaskSection from "../widgets/taskSection/taskSection";
import QuickReminders from "../widgets/quickReminders/quickReminders";
import NotesWidget from "../widgets/notes/notes";


const homeNavbarContent = [
  { label: "Projects" },
  { label: "Dashboard" },
  { label: "Calender" },
  { label: "Teams" },
  { label: "Settings" }
];


function Home() {
  return (
    <div className="home-page-main-holder">
      <div className="home-page-welcomeBanner">
        {/* home navbar */}
        <div className="navbar-home-welomeBanner">
          <div className="navbar-welcomeBanner">
            <ul className="navbar-ul">
            {homeNavbarContent.map((item, index) => (
              <li key={index} className="navbar-item">
                {item.label}
              </li>
            ))}
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
        <div>
          <NotesWidget/>
        {/* #ffeb87   #FFC645 */}
        </div>
      </div>
    </div>
  );
}

export default Home;
