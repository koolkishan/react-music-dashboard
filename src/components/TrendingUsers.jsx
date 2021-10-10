import React from "react";
import { BsArrowRight } from "react-icons/bs";

import trend1 from "../assets/trending1.png";
import trend2 from "../assets/trending2.png";
import trend3 from "../assets/trending3.png";

function TrendingUsers() {
  return (
    <div className="trending__users">
      <div className="trending__info">
        <div>
          <h3>Trending Users</h3>
          <span>Today</span>
        </div>
        <div className="icon">
          <BsArrowRight />
        </div>
      </div>
      <div className="trend">
        <img src={trend1} alt="" />
        <div className="trend__info">
          <h4>Taylor Swift</h4>
          <span>2M Followers</span>
        </div>
      </div>
      <div className="trend">
        <img src={trend2} alt="" />
        <div className="trend__info">
          <h4>Justin Beiber</h4>
          <span>38.7K Followers</span>
        </div>
      </div>
      <div className="trend">
        <img src={trend3} alt="" />
        <div className="trend__info">
          <h4>Rose</h4>
          <span>99.1K Followers</span>
        </div>
      </div>
    </div>
  );
}

export default TrendingUsers;
