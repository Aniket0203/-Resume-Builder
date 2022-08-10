import React from "react";
import resumeImg from "../assets/resume1.svg";

function Body() {
  return (
    <React.Fragment>
      <div className="Heading">
        <div className="left">
          <p>
            A <span>Resume</span> that <br />
            stands Out! <br />
            Make your own <br /> resume <span>it's free</span>
          </p>
        </div>
        <div className="right">
          <img src={resumeImg} className="img" />
        </div>
      </div>

      {/* <div className='container'> */}
      <div className="Box">
        <p className="p"> Create a new Resume</p>

        <p>
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              // any task
              window.location.assign("/createresume");
            }}
          >
            Start Resume
          </button>
        </p>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
}

export default Body;
