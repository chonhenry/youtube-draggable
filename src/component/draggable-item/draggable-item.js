import React from "react";
import "./draggable-item.scss";
import Draggable from "react-draggable";

class DraggableItem extends React.Component {
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <Draggable handle=".drag-here" {...dragHandlers}>
        <div className="draggable-video-container">
          <div className="corner">
            <i class="drag-here fas fa-arrows-alt fa-2x" />
            <form>
              <input
                className="video-url"
                type="text"
                placeholder="Place your Youtube URL here"
              />
            </form>
            <i className="delete fas fa-minus-square fa-2x" />
          </div>

          <iframe
            className="youtube-video"
            width={this.props.width}
            height={this.props.height}
            src={this.props.videoURL}
          ></iframe>
        </div>
      </Draggable>
    );
  }
}

export default DraggableItem;

//https://www.youtube.com/embed/FSs_JYwnAdI
