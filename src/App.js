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
    selected_video: "video1",
    // https://www.youtube.com/embed/FSs_JYwnAdI
    displayed_video: {
      video1: { video_id: 1, url: null },
      video2: { video_id: 2, url: null },
      video3: { video_id: 3, url: null },
      video4: { video_id: 4, url: null },
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
  //     this.setState({ width: this.width.value });
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

  onVideoSelect = (videoId) => {
    this.setState({ selected_video: videoId }, () =>
      console.log(this.state.selected_video)
    );
  };

  onClickAddBtn = () => {
    if (this.state.number_of_video < 4) {
      this.setState({ number_of_video: this.state.number_of_video + 1 });
    }
  };

  renderVideo = (videos) => {
    let video_arr = [];

    if (this.state.number_of_video === 1) {
      video_arr.push(
        <DraggableItem
          width={this.state.width}
          height={this.state.height}
          videoURL={this.state.displayed_video.video1.url}
          videoId={"video1"}
          onClick={this.onVideoSelect}
        />
      );
    } else if (this.state.number_of_video <= 4) {
      let i = 1;
      for (const property in videos) {
        if (i <= this.state.number_of_video) {
          video_arr.push(
            <DraggableItem
              width={this.state.width}
              height={this.state.height}
              videoURL={videos[property].url}
              videoId={`video${i}`}
              onClick={this.onVideoSelect}
            />
          );
          i = i + 1;
        }
      }
    }

    return video_arr;
  };

  render() {
    return (
      <div className="container">
        <Navbar onClickAddBtn={this.onClickAddBtn} />
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
