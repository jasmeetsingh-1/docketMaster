import React from "react";
import "./notes.css";
import notesLogo from "../../../assets/logos/notesIcon.svg";
import threeDots from "../../../assets/logos/three-dots.svg";

function NotesWidget(){
    return ( 
    <div className="notes-widget-holder">
        <div className="header-notes-widget">
            <span>Notes</span>
            <button>+ New Note</button>
        </div>
        <div className="bodySection-notes-widget">
            <div className="note-component">
                <section className="note-component-header">
                    <div>
                        <img src={notesLogo} alt="notes" />
                        <span>Apr 2, 2023</span>
                    </div>
                    <img src={threeDots} alt="notes menu" />
                </section>
                <section className="note-component-content">
                    <h5>ChatGPT Tricks for business marketing</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima accusantium, nisi aut nihil illo magni amet.</p>
                </section>
                <ul className="note-component-tagList">
                    <li>Tech</li>
                    <li>AI</li>
                </ul>
            </div>
        </div>
    </div>);
}

export default NotesWidget;