import React from "react";
import "./App.css";
import DraggableItem from "./component/draggable-item/draggable-item";
import Navbar from "./component/navbar/navbar";

class App extends React.Component {
  state = {
    activeDrags: 0,
    width: 600,
    height: 400,
    number_of_video: 1,
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
        <Navbar />
        <DraggableItem width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}

export default App;

{
  /* <form onSubmit={(e) => this.onSubmit(e)}>
          <label for="fname">Width:</label>
          <input type="text" ref={(el) => (this.width = el)} />

          <label for="fname">Height:</label>
          <input type="text" ref={(el) => (this.height = el)} />

          <input type="submit" value="Submit" />
        </form> */
}
