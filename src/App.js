import React from "react";
import ReactDOM from "react-dom";
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
    // displayed_video: {
    //   video1: "",
    //   video2: null,
    //   video3: null,
    //   video4: null,
    // },
    displayed_video: [
      { id: "video1", url: "", x: 0, y: 0 },
      { id: "video2", url: null, x: 0, y: 0 },
      { id: "video3", url: null, x: 0, y: 0 },
      { id: "video4", url: null, x: 0, y: 0 },
    ],
  };

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
    // console.log(this.state.activeDrags);
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
    // console.log(this.state.activeDrags);
  };

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

    console.log(
      ReactDOM.findDOMNode(this.refs[videoId]).getBoundingClientRect()
    );
  };

  onClickDeleteBtn = (videoId) => {
    this.setState({ number_of_video: this.state.number_of_video - 1 });

    let new_arr = this.state.displayed_video;
    for (const property in new_arr) {
      if (new_arr[property].id === videoId) {
        new_arr[property].url = null;
        break;
      }
    }

    this.setState(
      { displayed_video: new_arr },
      console.log(this.state.displayed_video)
    );
  };

  onClickAddBtn = () => {
    if (this.state.number_of_video < 4) {
      this.setState({ number_of_video: this.state.number_of_video + 1 });

      let new_arr = this.state.displayed_video;
      for (const property in new_arr) {
        if (new_arr[property].url === null) {
          new_arr[property].url = "";
          break;
        }
      }

      this.setState({ displayed_video: new_arr });
    }
  };

  renderVideo = (videos) => {
    return this.state.displayed_video.map((video) => {
      if (video.url === "") {
        return (
          <DraggableItem
            key={video.id}
            width={this.state.width}
            height={this.state.height}
            videoURL={video.url}
            videoId={video.id}
            onSelect={this.onVideoSelect}
            onDeleteClick={this.onClickDeleteBtn}
            ref={`${video.id}`}
            x={this.state.x}
            y={this.state.y}
          />
        );
      }
    });
  };

  render() {
    return (
      <div className="container">
        <Navbar
          onClickAddBtn={this.onClickAddBtn}
          ref="UniqueElementIdentifier"
        />
        <div className="videos-container">
          {this.renderVideo(this.state.displayed_video)}
        </div>
      </div>
    );
  }
}

export default App;

//
//
//
////
////
////
////
////
////
////
////
////
////
////
////
//
//
{
  /* <form onSubmit={(e) => this.onSubmit(e)}>
          <label for="fname">Width:</label>
          <input type="text" ref={(el) => (this.width = el)} />

          <label for="fname">Height:</label>
          <input type="text" ref={(el) => (this.height = el)} />

          <input type="submit" value="Submit" />
        </form> */
}

// onSubmit = (e) => {
//   e.preventDefault();
//   if (this.width.value !== "") {
//     this.setState({ width: this.width.value });
//   }

//   if (this.height.value !== "") {
//     this.setState({ height: this.height.value });
//   }
// };

// let video_arr = [];

// if (this.state.number_of_video === 1) {
//   video_arr.push(
//     <DraggableItem
//       width={this.state.width}
//       height={this.state.height}
//       videoURL={this.state.displayed_video.video1}
//       videoId={"video1"}
//       onClick={this.onVideoSelect}
//     />
//   );
// } else if (this.state.number_of_video <= 4) {
//   let i = 1;
//   for (const property in videos) {
//     if (i <= this.state.number_of_video) {
//       video_arr.push(
//         <DraggableItem
//           width={this.state.width}
//           height={this.state.height}
//           videoURL={videos[property]}
//           videoId={`video${i}`}
//           onClick={this.onVideoSelect}
//         />
//       );
//       i = i + 1;
//     }
//   }
// }
