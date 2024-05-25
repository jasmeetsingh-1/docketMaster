import React,{useState} from "react";
import Select from 'react-select';
import "./cssFiles/project.css";
import backgroundImage from "../../assets/projectsPageBanner.jpg";
import arrowDown from "../../assets/logos/downArrow.svg";

function ProjectPage() {

  const tags = ["Meetings", "Ui Designs", "Development", "UX Research"];


  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];


  return (
    <div className="project-page-mainHolder">
      <div className="sidebar-holder">Sidebar</div>
      <div className="main-projects-page">
        <div className="banner-projects-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="banner-content-left">
            <span className="location-banner-content-left">
              Projects / <span>My Project</span>
            </span>
            <h1 className="">My Project</h1>
          </div>
          <section className="project-banner-date">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="calendar"
              width="20"
              height="20"
            >
              <g fill="white">
                <path d="M49.6 54H14.4C12 54 10 52 10 49.6V17.3c0-2.4 1.6-4.4 3.7-4.4h2.2v2.9h-2.2c-.3 0-.7.6-.7 1.5v32.3c0 .8.7 1.5 1.5 1.5h35.2c.8 0 1.5-.7 1.5-1.5V17.3c0-.9-.5-1.5-.7-1.5h-2.2v-2.9h2.2c2 0 3.7 2 3.7 4.4v32.3C54 52 52 54 49.6 54"></path>
                <path d="M20.3 18.8c-.8 0-1.5-.7-1.5-1.5v-5.9c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v5.9c-.1.8-.7 1.5-1.5 1.5m23.4 0c-.8 0-1.5-.7-1.5-1.5v-5.9c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v5.9c0 .8-.7 1.5-1.5 1.5M24.7 12.9h14.6v3H24.7zM12.9 21.7h38.2v3H12.9zM45.2 27.6h2.9v2.9h-2.9zM39.3 27.6h3v2.9h-3zM33.5 27.6h2.9v2.9h-2.9zM27.6 27.6h2.9v2.9h-2.9zM21.7 27.6h3v2.9h-3zM45.2 33.5h2.9v2.9h-2.9zM39.3 33.5h3v2.9h-3zM33.5 33.5h2.9v2.9h-2.9zM27.6 33.5h2.9v2.9h-2.9zM21.7 33.5h3v2.9h-3zM15.9 33.5h2.9v2.9h-2.9zM45.2 39.3h2.9v3h-2.9zM39.3 39.3h3v3h-3zM33.5 39.3h2.9v3h-2.9zM27.6 39.3h2.9v3h-2.9zM21.7 39.3h3v3h-3zM15.9 39.3h2.9v3h-2.9zM39.3 45.2h3v2.9h-3zM33.5 45.2h2.9v2.9h-2.9zM27.6 45.2h2.9v2.9h-2.9zM21.7 45.2h3v2.9h-3zM15.9 45.2h2.9v2.9h-2.9z"></path>
              </g>
            </svg>
            12 Feb, 2023
          </section>
        </div>

        {/* project meta data section */}

        <div className="project-metaData-section">
          <table>
            <tr className="priority">
              <td>Priority</td>
              <td style={{width:"52px"}}>Medium</td>
            </tr>
            <div></div>
            <tr className="dueDate">
              <td>Due Date</td>
              <td> 28 Feb 2023 </td>
            </tr>
            <div></div>
            <tr className="tags">
              <td>Tags</td>
              <td className="tags-list">
              {tags.map((item) => (<span>{item}</span>))}
              </td>
            </tr>
            <div></div>
            <tr className="assignees">
              <td>Assignees</td>
              <td>
                <div>
                  <span>🧔🏻‍♂️</span>
                  Irvan Moses
                </div>
                <div>
                  <span>🧔🏻‍♂️</span>
                  Irvan Moses
                </div>
                <div>
                  <span>🧔🏻‍♂️</span>
                  Irvan Moses
                </div>
                {/* <div className="showMore-assignees">
                  +
                </div> */}
              </td>
            </tr>
            <div></div>
          </table>

        </div>

        {/* filters */}
      
        <div className="filters-newTask-section">
          <button className="adding-new-task-button">
            New Task <span><img src={arrowDown} alt="Create task" /></span>
          </button>
          <div className="filters">
            <Select placeholder="Filter" options={options}/>
            <Select placeholder="Sort" options={options}/>
            <Select placeholder="Label" options={options}/>
            <Select placeholder="Category" options={options}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectPage;
