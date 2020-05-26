import React from "react";
import "./navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        {/* <div className="choose-video">
          <div className="title">Video Number</div>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div> */}

        <div className="video-qty">
          <div className="title">Add Video (Maximum 4)</div>
          {/* <input
            className="video-qty-input"
            type="number"
            defaultValue="1"
            min="1"
            max="4"
          /> */}
          <div className="add-btn">Add</div>
        </div>

        <div className="select-video">
          <div className="title">
            Press <i class="fas fa-arrows-alt"></i> to move and select video
          </div>
        </div>

        <div className="adj width-adj">
          <div className="title">{`Width: ${1}px`}</div>
          <input
            className="width-slider"
            type="range"
            min="300"
            max="1000"
            step="100"
            defaultValue="600"
          />
        </div>

        <div className="adj height-adj">
          <div className="title">{`Height: ${1}px`}</div>
          <input
            className="height-slider"
            type="range"
            min="200"
            max="1000"
            step="100"
            defaultValue="400"
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
