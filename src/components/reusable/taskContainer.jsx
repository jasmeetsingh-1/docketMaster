import React, { useEffect } from "react";
import "./cssFiles/taskContainer.css";
import goldenStar from "../../assets/logos/star-svgrepo-com.svg";

function TaskContainer({colorCode, taskDetails}) {

  return (
    <div className="task-container" style={{backgroundColor:colorCode}}>
      <div className="task-header">
        <section>
          {" "}
          <img src={goldenStar} alt="today" /> Today
        </section>
        <div className="up-arrow-svg">
          <svg
            fill="#343434db"
            version="1.1"
            id="Capa_1"
            width="20px"
            height="20px"
            viewBox="0 0 575.279 575.279"
          >
            <g>
              <g>
                <path
                  d="M287.64,575.279c158.86,0,287.639-128.779,287.639-287.639C575.279,128.78,446.5,0,287.64,0S0,128.78,0,287.641
C0,446.5,128.78,575.279,287.64,575.279z M330.541,147.106c5.787-0.288,10.484-4.954,10.484-10.747v-35.312
c0-5.792,3.32-7.169,7.416-3.072l153.689,153.688c4.098,4.098,4.098,10.738,0,14.835L348.441,420.188
c-4.096,4.098-7.416,2.721-7.416-3.072v-31.814c0-5.793-4.33-12.316-9.783-14.27c-36.117-12.941-163.655-49.486-236.945,48.014
c-3.479,4.631-6.08,3.863-5.848-1.928C93.786,284.7,199.264,153.603,330.541,147.106z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="task-title">{taskDetails.title}</div>
      <div className="task-footer">
        <section className="task-timing">{taskDetails.dueTime}</section>
        <section className="task-team">
          <span>🧔🏻‍♂️</span>
          <span>🧔🏻‍♂️</span>
        </section>
      </div>
    </div>
  );
}

export default TaskContainer;
