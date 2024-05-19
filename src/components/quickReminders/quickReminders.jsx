import React from "react";
import "./quickReminders.css";
import tick from "../../assets/logos/tick.svg";

function QuickReminders() {
  const reminders = [
    {
      title: "Reminder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    },
    {
      title: "Reminder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    },
    {
      title: "Reminder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    },
    {
      title: "Reminder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    },
    {
      title: "Reminder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    },
    {
      title: "Reminder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    },
  ];
  return (
    <div className="quickReminders-holder">
      <span>Quick reminder</span>

      <div className="reminders-section">
        <ul className="navbar-quickReminders-ul">
          <li className="navbar-quickReminders-item">
            <span>MON</span>
            <span>7</span>
          </li>
          <li className="navbar-quickReminders-item">
            <span>TUE</span>
            <span>8</span>
          </li>
          <li className="navbar-quickReminders-item">
            <span>WED</span>
            <span>9</span>
          </li>
          <li className="navbar-quickReminders-item">
            <span>THU</span>
            <span>10</span>
          </li>
          <li className="navbar-quickReminders-item">
            <span>FRI</span>
            <span>11</span>
          </li>
          <li className="navbar-quickReminders-item">
            <span>SAT</span>
            <span>12</span>
          </li>
          <li className="navbar-quickReminders-item">
            <span>SUN</span>
            <span>13</span>
          </li>
         
        </ul>
        <div className="reminders-list">
        {reminders.map((item) => (
          <div className="reminder">
            <div className="reminder-checkbox">
              <img src={tick} alt="Complete the reminder" />
            </div>
            <div className="reminderSection">
              <div className="reminderSection-header">
              <span>{item.title}</span>
              <span>01:00 PM</span>
              </div>
             
              <span>{item.description}</span>
            </div>
          </div>
        ))}
         </div>
      </div>
    </div>
  );
}

export default QuickReminders;
