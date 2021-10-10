import React from "react";
import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import { FaPause } from "react-icons/fa";
import thumbnail from "../assets/thumbnail.jpg";
function Player() {
  return (
    <div className="player">
      <div className="player__image">
        <img src={thumbnail} alt="" />
      </div>
      <h4 className="player__track__title">Closer</h4>
      <p className="player__track__artist">Chainsmokers</p>
      <div className="player__track__seek">
        <input type="range" />
        <div className="player__track__seek__info">
          <span>1:10</span>
          <span>3:45</span>
        </div>
        <div className="player__options">
          <FiSkipBack />
          <FaPause />
          <FiSkipForward />
        </div>
      </div>
    </div>
  );
}

export default Player;
