import React from "react";
import "./draggable-item.scss";
import Draggable from "react-draggable";

class DraggableItem extends React.Component {
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <Draggable
        handle=".drag-here"
        {...dragHandlers}
        onDrag={this.props.handleDrag}
        positionOffset={{ x: 20, y: 20 }}
      >
        <div className="draggable-video-container">
          <div className="corner">
            <i
              className="drag-here fas fa-arrows-alt fa-2x"
              onClick={() => this.props.onSelect(this.props.videoId)}
            />
            <form>
              <input
                className="video-url"
                type="text"
                placeholder="Place your Youtube URL here"
                onClick={() => this.props.onSelect(this.props.videoId)}
              />
            </form>
            <i
              className="delete fas fa-minus-square fa-2x"
              onClick={() => this.props.onDeleteClick(this.props.videoId)}
            />
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
