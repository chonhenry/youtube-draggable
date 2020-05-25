import React from "react";
import "./App.css";
import DraggableItem from "./component/draggable-item/draggable-item";
import Draggable from "react-draggable";

class App extends React.Component {
  state = {
    activeDrags: 0,
    width: 500,
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

  onClick = () => {
    // console.log(123);
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.width.value !== "") {
      this.setState({ width: this.width.value });
    }

    if (this.height.value !== "") {
      this.setState({ height: this.height.value });
    }
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    return (
      <div className="container">
        <form onSubmit={(e) => this.onSubmit(e)}>
          <label for="fname">Width:</label>
          <input type="text" ref={(el) => (this.width = el)} />

          <label for="fname">Height:</label>
          <input type="text" ref={(el) => (this.height = el)} />

          <input type="submit" value="Submit" />
        </form>

        {/* <Draggable handle="strong" {...dragHandlers}>
          <div className="box">
            <strong
              className="drag-cursor"
              onClick={() => this.onClick()}
              style={{ width: this.state.width }}
            >
              <div className="drag-here">Drag here</div>
            </strong>
            <iframe
              width={this.state.width}
              height={this.state.height}
              src="https://www.youtube.com/embed/FSs_JYwnAdI"
            ></iframe>
          </div>
        </Draggable> */}

        <DraggableItem />
      </div>
    );
  }
}

export default App;
