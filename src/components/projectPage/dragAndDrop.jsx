import React, { useState } from "react";
import "./dragAndDrop.css";
import { Draggable, Droppable } from "react-drag-and-drop";
import TaskContainer from "../reusable/taskContainer";
import { projectData, tagData } from "../sampleData/tagData";

function DragDrop() {
  const [projectTaskList, setProjectTaskList]= useState(projectData);

  const findingTaskColorCode = (tagId) =>{
    let taskColorCode ;
    const tag=tagData.filter((item)=>item.id===tagId);
    taskColorCode=tag[0].colorCode;
    return taskColorCode;
  }

  const  checkingIfDropLocationHave = (itemId, list) =>{
    let flag = false;
    list.forEach((item)=>{
      if(item.id === itemId){
        flag = true; return;
      }
    })
    return flag;
  }

  const taskDropHandler = (task, dropLocation) => {
    const data = JSON.parse(task.task);
    const taskItem=data.item; 
    //check here if the dropLocation have the task then dont drop 
    if(!checkingIfDropLocationHave(taskItem.id,projectTaskList[dropLocation])){
      setProjectTaskList((prev) => {
        const updatedPickList = prev[data.pickLocation].filter((item) => item.id !== taskItem.id);
        const updatedDropList = [...prev[dropLocation], taskItem];
        return {
          ...prev,
          [data.pickLocation]: updatedPickList,
          [dropLocation]: updatedDropList,
        };
      });
    } else console.error("Task Already in",dropLocation);
  };
 
  return (
    <div className="drag-drop-holder">
      <div className="drop-sections">
        <p>To Do</p>
        <Droppable onDrop={(task)=>taskDropHandler(task,"toDo")} types={["task"]}>
          {projectTaskList.toDo?.map((item,index) => {
            const task={item:item,pickLocation:"toDo"};
            return <Draggable type="task" data={JSON.stringify(task)} key={index}>
              <TaskContainer colorCode={findingTaskColorCode(item.tagId)} taskDetails={item} />
            </Draggable>;
          })}
        </Droppable>
      </div>
      <div className="drop-sections">
        <p>In Progress </p>
        <Droppable onDrop={(task)=>taskDropHandler(task,"inProgress")} types={["task"]}>
          {projectTaskList.inProgress?.map((item,index) => {
            const task={item:item,pickLocation:"inProgress"};
            return <Draggable type="task" data={JSON.stringify(task)} key={index}>
              <TaskContainer colorCode={findingTaskColorCode(item.tagId)} taskDetails={item} />
            </Draggable>;
          })}
        </Droppable>
      </div>
      <div className="drop-sections">
        <p>Completed </p>
        <Droppable onDrop={(task)=>taskDropHandler(task,"completed")} types={["task"]}>
          {projectTaskList.completed?.map((item,index) => {
            const task={item:item,pickLocation:"completed"};
            return <Draggable type="task" data={JSON.stringify(task)} key={index}>
              <TaskContainer colorCode={findingTaskColorCode(item.tagId)} taskDetails={item} />
            </Draggable>;
          })}
        </Droppable>
      </div>
      <div className="drop-sections">
        <p>Overdue</p>
        <Droppable onDrop={(task)=>taskDropHandler(task,"overdue")} types={["task"]}>
          {projectTaskList.overdue?.map((item,index) => {
            const task={item:item,pickLocation:"overdue"};
            return <Draggable type="task" data={JSON.stringify(task)} key={index}>
              <TaskContainer colorCode={findingTaskColorCode(item.tagId)} taskDetails={item} />
            </Draggable>;
          })}
        </Droppable>
      </div>
    </div>
  );
}

export default DragDrop;
