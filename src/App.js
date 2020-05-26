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
    selected_video: 1,
    // https://www.youtube.com/embed/FSs_JYwnAdI
    displayed_video: {
      video1: "",
      video2: "",
      video3: "",
      video4: "",
    },
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

  onVideoSelect = () => {};

  renderVideo = (videos) => {
    let video_arr = [];

    if (this.state.number_of_video === 1) {
      video_arr.push(
        <DraggableItem
          width={this.state.width}
          height={this.state.height}
          videoURL={""}
        />
      );
    } else {
      for (const property in videos) {
        if (videos[property] !== "") {
          video_arr.push(
            <DraggableItem
              width={this.state.width}
              height={this.state.height}
              videoURL={videos[property]}
            />
          );
        }
      }
    }

    return video_arr;
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="video-container">
          {this.renderVideo(this.state.displayed_video)}
        </div>
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
