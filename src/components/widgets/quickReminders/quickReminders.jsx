import React, { useEffect, useState } from "react";
import "./quickReminders.css";
import tick from "../../../assets/logos/tick.svg";
import { ExclamationSvg } from "../../../assets/svgContainer";

const reminders = [
  {
    title: "8 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "8 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "8 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "8 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "8 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "8 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "8 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "8 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "8 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "8 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "8 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "8 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "8 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "8 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "8 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "9 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-09"),
    isCompleted:false,
  },
  {
    title: "09 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-09"),
    isCompleted:false,
  },
  {
    title: "11 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-11"),
    isCompleted:false,
  },
  {
    title: "12 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-12"),
    isCompleted:false,
  },
  {
    title: "06 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-06"),
    isCompleted:false,
  },
  {
    title: "08 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-08"),
    isCompleted:false,
  },
  {
    title: "10 apr",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas, dignissimos odit reprehenderit ea voluptatem ut ducimus ",
    dueDate: new Date("2025-04-10"),
    isCompleted:false,
  },
];

function QuickReminders() {
  const [reminderList, setReminderList] = useState([]);
  const [currentWeek, setCurrentWeek] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    generateCurrentWeek();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      filterRemindersByDate(selectedDate);
    }
  }, [selectedDate]);

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

  const filterRemindersByDate = (selectedDate) => {
    const filtered = reminders.filter(
      item => new Date(item.dueDate).toDateString() === new Date(selectedDate).toDateString()
    );
    setReminderList(filtered);
  };

  const handleDateClick = (index, dateObject) => {
    setCurrentWeek(prev =>
      prev.map((item, idx) => ({
        ...item,
        isSelected: idx === index,
      }))
    );
    filterRemindersByDate(dateObject);
    setSelectedDate(dateObject);
  };

  const formatTimeToSpan = (date) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
  
    const timeString = date.toLocaleTimeString('en-US', options);
    return timeString;
  }

  const reminderCheckboxHandler = (index) => {


    setReminderList((prev)=>{
      return prev.map((item,i)=>{
        if(i === index){
          return {...item,isCompleted: !item.isCompleted}
        }else{
          return {...item}
        }
      })
    })

    //sorting list 
    setReminderList((prev) => {
      return prev.sort((x,y)=> Number(y.isCompleted)-Number(x.isCompleted))
    })

  }

  return (
    <div className="quickReminders-holder">
      <section className="reminders-section-header">
        <span>Quick Reminder</span>
        <button className="new-reminder-button">
          + Add new reminder
        </button>
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
          {reminderList.length > 0 ? (
            reminderList.map((task, idx) => (
              <div className="reminder" key={idx}>
                <div className="reminder-checkbox" onClick={()=>{reminderCheckboxHandler(idx)}}>
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
              <ExclamationSvg/>
              <p>No reminders for this date.</p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuickReminders;