import React from "react";
import "./notes.css";
import notesLogo from "../../../assets/logos/notesIcon.svg";
import threeDots from "../../../assets/logos/three-dots.svg";
import {notesData} from "../../sampleData/tagData";

function NotesWidget(){
    return ( 
    <div className="notes-widget-holder">
        <div className="header-notes-widget">
            <span>Notes</span>
            <button>+ New Note</button>
        </div>
        <div className="bodySection-notes-widget">
            {notesData.map((item)=>{
                return <div className="note-component">
                <section className="note-component-header">
                    <div>
                        <img src={notesLogo} alt="notes" />
                        <span>{item.createdDate}</span>
                    </div>
                    <img src={threeDots} alt="notes menu" />
                </section>
                <section className="note-component-content">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                </section>
                <ul className="note-component-tagList">
                    <li>Tech</li>
                    <li>AI</li>
                </ul>
            </div>
            })}
        </div>
    </div>);
}

export default NotesWidget;