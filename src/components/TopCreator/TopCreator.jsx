import React from "react";
import "./TopCreator.css";
import img1 from "../../assets/top-creator1.png";
import img2 from "../../assets/top-creator2.png";
import img3 from "../../assets/top-creator3.png";
import img4 from "../../assets/top-creator4.png";
import reelIcon from "../../assets/reel-icon.svg";
const TopCreator = () => {
  return (
    <div className="container">
      <div className="top-creator">
        <div className="main">Top Crypto Creators and Projects to Follow</div>
        <div className="sub">
          Answers to your crypto doubts, straight from the experts
        </div>
      </div>
      <div className="video-container">
        <div className="video-card-container">
          <div className="card-1">
            <div className="reel-icon">
              <img src={reelIcon}></img>
            </div>
            <img src={img1} alt="" />
            <div className="card-title">
              How to plan your retirement with crypto?
            </div>
          </div>
        </div>
        <div className="video-card-container">
          <div className="reel-icon">
            <img src={reelIcon}></img>
          </div>
          <img src={img2} alt="" />
          <div className="card-title">Why are there limited Bitcoin?</div>
        </div>
        <div className="video-card-container">
          <div className="reel-icon">
            <img src={reelIcon}></img>
          </div>
          <img src={img3} alt="" />
          <div className="card-title">How does Uniswap actually work? </div>
        </div>
        <div className="video-card-container">
          <div className="reel-icon">
            <img src={reelIcon}></img>
          </div>
          <img src={img4} alt="" />
          <div className="card-title">
            How to spot crypto projects to invest in?{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCreator;
