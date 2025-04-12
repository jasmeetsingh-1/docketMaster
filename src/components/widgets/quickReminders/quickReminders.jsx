import React, { useEffect, useState } from "react";
import axios from "axios";
import "./quickReminders.css";
import tick from "../../../assets/logos/tick.svg";
import { ExclamationSvg } from "../../../assets/svgContainer";

function QuickReminders() {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [allReminders, setAllReminders] = useState([]);
  const [filteredReminders, setFilteredReminders] = useState([]);
  const [currentWeek, setCurrentWeek] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    generateCurrentWeek();
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedDate && allReminders.length > 0) {
      filterRemindersByDate(selectedDate);
    }
  }, [selectedDate, allReminders]);

  const generateCurrentWeek = () => {
    const today = new Date();
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const week = Array.from({ length: 7 }, (_, i) => {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      return {
        date: `${nextDate.getDate()} ${months[nextDate.getMonth()]}`,
        day: days[nextDate.getDay()],
        isSelected: i === 0,
        dateObject: nextDate,
      };
    });

    setCurrentWeek(week);
    setSelectedDate(today);
  };

  const filterRemindersByDate = (date) => {
    const filtered = allReminders.filter(
      (item) => new Date(item.dueDate).toDateString() === new Date(date).toDateString()
    );
    const sorted = [...filtered].sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
    setFilteredReminders(sorted);
  };

  const handleDateClick = (index, dateObject) => {
    setCurrentWeek((prev) =>
      prev.map((item, idx) => ({
        ...item,
        isSelected: idx === index,
      }))
    );
    setSelectedDate(dateObject);
  };

  const formatTimeToSpan = (dateString) => {
    const date = new Date(dateString);
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return date.toLocaleTimeString("en-US", options);
  };

  const reminderCheckboxHandler = (reminderId) => {
    const updated = allReminders.map((item) =>
      item.reminderId === reminderId ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setAllReminders(updated);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/reminder/getReminders`, {
        headers: {
          userId: "b6c9f3e2-9e1c-4c1f-a4a0-82fd434cf6e5",
        },
      });
      const res = response.data.reminders;
      console.log("data from the getReminders >>", res);
      setAllReminders(res);
    } catch (error) {
      console.error("some error in getReminders API", error);
    }
  };

  return (
    <div className="quickReminders-holder">
      <section className="reminders-section-header">
        <span>Quick Reminder</span>
        <button className="new-reminder-button">+ Add new reminder</button>
      </section>
      <div className="reminders-section">
        <ul className="navbar-quickReminders-ul">
          {currentWeek.map((date, index) => (
            <li
              key={index}
              onClick={() => handleDateClick(index, date.dateObject)}
              className={`navbar-quickReminders-item${date.isSelected ? " isSelected" : ""}`}
            >
              <span>{date.date}</span>
              <span>{date.day}</span>
            </li>
          ))}
        </ul>

        <div className="reminders-list">
          {filteredReminders.length > 0 ? (
            filteredReminders.map((task, idx) => (
              <div className="reminder" key={task.reminderId}>
                <div className="reminder-checkbox" onClick={() => reminderCheckboxHandler(task.reminderId)}>
                  {task.isCompleted ? <img src={tick} alt="Complete the reminder" /> : ""}
                </div>
                <div className="reminderSection">
                  <div className="reminderSection-header">
                    <span className={task.isCompleted ? "reminder-completed" : ""}>{task.title}</span>
                    <span>{formatTimeToSpan(task.dueDate)}</span>
                  </div>
                  <span className={task.isCompleted ? "reminder-completed" : ""}>{task.description}</span>
                </div>
              </div>
            ))
          ) : (
            <section className="empty-reminders">
              <ExclamationSvg />
              <p>No reminders for this date.</p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuickReminders;