import React from "react";
import "./navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="video-qty">
          <div className="title">Add Video (Maximum 4)</div>
          {/* <input
            className="video-qty-input"
            type="number"
            defaultValue="1"
            min="1"
            max="4"
          /> */}
          <div className="add-btn" onClick={this.props.onClickAddBtn}>
            Add
          </div>
        </div>
        <div className="select-video">
          <div className="title">
            Press <i className="fas fa-arrows-alt"></i> to move and select video
          </div>
        </div>

        {/* <div className="pick-video">
          <div className="title">Pick video to adjust size</div>
          <select
            onChange={(e) => {
              if (e.target.value === "All") {
                this.props.onSelect(`all`);
              } else {
                this.props.onSelect(`video${e.target.value}`);
              }
            }}
          >
            <option>All</option>
            <option selected>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div> */}

        <div className="adj width-adj">
          <div className="title">{`Width: ${this.props.width}px`}</div>
          <input
            className="width-slider"
            type="range"
            min="300"
            max="1000"
            step="100"
            defaultValue={this.props.width}
            onChange={(e) => this.props.onWidthChange(e.target.value)}
          />
        </div>

        <div className="adj height-adj">
          <div className="title">{`Height: ${this.props.height}px`}</div>
          <input
            className="height-slider"
            type="range"
            min="200"
            max="1000"
            step="100"
            defaultValue={this.props.height}
            onChange={(e) => this.props.onHeightChange(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
