import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import './errorPage.css'; // Import your CSS file

function PageNotFound() {
  const navigate = useNavigate(); // Use the useNavigate hook for programmatic navigation

  return (
    <Fragment>
      <div className="page-not-found">
        <h2 className="title">Invalid URL</h2>
        <button className="go-home-button" onClick={() => navigate("/home")}>
          Go to Home
        </button>
      </div>
    </Fragment>
  );
}

export default PageNotFound;