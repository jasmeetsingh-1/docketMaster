import React from "react";
import "./sidebar.css";
import logo from "../../assets/docketMasterLogo.svg";
import settingSvg from "../../assets/logos/settingLogo.svg";
import { ActivitySvg, AnalyticsSvg, CalenderSvg, OverviewSvg, ProjectSvg } from "../../assets/sidebarSvgContainer";

function Sidebar() {
  return (
    <div className="sidebar-holder">
      <div>
        <section className="sidebar-header">
          <img src={logo} alt="DocketMaster" />
          <h2>DocketMaster</h2>
        </section>
        <section className="sidebar-menu">
          <ul>
            <li>
              <OverviewSvg/>
              Overview
            </li>
            <li>
              <CalenderSvg/>
              Calender
            </li>
            <li>
              <AnalyticsSvg/>
              Analytics
            </li>
            <li>
              <ActivitySvg/>
              Activity
            </li>
            <li>
              <ProjectSvg/>
              Projects
            </li>
          </ul>
        </section>
      </div>
      <div className="sidebar-footer">
        <div className="user-image-sidebar-footer">
          🕺
        </div>
        <div className="content-footer-sidebar">
          <span>Muhammed Ali</span>
          <span>Free Account</span>
        </div>
          <img src={settingSvg} alt="Settings" />
      </div>
    </div>
  );
}

export default Sidebar;
