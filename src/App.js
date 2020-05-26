import React from "react";
import "./App.css";
import DraggableItem from "./component/draggable-item/draggable-item";
import Draggable from "react-draggable";

class App extends React.Component {
  state = {
    activeDrags: 0,
    width: 600,
    height: 400,
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
    // console.log(this.state.activeDrags);
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
    // console.log(this.state.activeDrags);
  };

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   if (this.width.value !== "") {
  //     this.setState({ width: this.width.value }, () =>
  //       console.log(this.state.width)
  //     );
  //   }

  //   if (this.height.value !== "") {
  //     this.setState({ height: this.height.value });
  //   }
  // };

  onWidthSliderChange = (e) => {
    console.log(e.target.value);
    this.setState({ width: e.target.value });
  };

  onHeightSliderChange = (e) => {
    console.log(e.target.value);
    this.setState({ height: e.target.value });
  };

  render() {
    return (
      <div className="container">
        {/* <form onSubmit={(e) => this.onSubmit(e)}>
          <label for="fname">Width:</label>
          <input type="text" ref={(el) => (this.width = el)} />

          <label for="fname">Height:</label>
          <input type="text" ref={(el) => (this.height = el)} />

          <input type="submit" value="Submit" />
        </form> */}

        <input
          className="width-slider"
          type="range"
          min="200"
          max="1000"
          step="100"
          defaultValue="600"
          onChange={(e) => this.onWidthSliderChange(e)}
        />
        <input
          className="height-slider"
          type="range"
          min="200"
          max="1000"
          step="100"
          defaultValue="400"
          onChange={(e) => this.onHeightSliderChange(e)}
        />
        <DraggableItem width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}

export default App;
