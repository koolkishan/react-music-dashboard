import React from "react";
import { BsArrowRight } from "react-icons/bs";

import song1 from "../assets/song1.jpeg";
import song2 from "../assets/song2.jpeg";
import song3 from "../assets/song3.jpeg";

function TrendingTracks() {
  return (
    <div className="trending__tracks">
      <div className="trending__info">
        <div>
          <h3>Trending Tracks</h3>
          <span>Today</span>
        </div>
        <div className="icon">
          <BsArrowRight />
        </div>
      </div>
      <div className="trend">
        <div className="trend__info">
          <img src={song1} alt="" />
          <div>
            <h4>Positions</h4>
            <span>Ariana Grande</span>
          </div>
        </div>
        <div className="trend__meta">
          <span>3.49M plays</span>
          <span>232K likes</span>
        </div>
      </div>
      <div className="trend">
        <div className="trend__info">
          <img src={song2} alt="" />
          <div>
            <h4>Trampoline</h4>
            <span>Zyan Malik</span>
          </div>
        </div>
        <div className="trend__meta">
          <span>41.44B plays</span>
          <span>512K likes</span>
        </div>
      </div>
      <div className="trend">
        <div className="trend__info">
          <img src={song3} alt="" />
          <div>
            <h4>Without Me</h4>
            <span>Hasley</span>
          </div>
        </div>
        <div className="trend__meta">
          <span>15.41M plays</span>
          <span>411K likes</span>
        </div>
      </div>
    </div>
  );
}

export default TrendingTracks;
