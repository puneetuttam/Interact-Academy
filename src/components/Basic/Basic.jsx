import React from "react";
import './Basic.css'
const Basic = () => {
  return (
    <div className="basic-container">
      <div className="section-1-container">
        <div className="section-1">
          <div className="narrative-container">
            <div className="narrative-header">
              <div className="collapse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
              </div>
              <div className="narrative-image"></div>
              <div className="narrative-info"></div>
            </div>
            <div className="narrative-body"></div>
          </div>
          <div className="path"></div>
        </div>
      </div>
      <div className="section-2-container"></div>
    </div>
  );
};

export default Basic;
