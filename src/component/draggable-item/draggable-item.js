import React from "react";
import "./draggable-item.scss";
import Draggable from "react-draggable";

class DraggableItem extends React.Component {
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <div className="draggable-container">
        <Draggable handle=".drag-here" {...dragHandlers}>
          <div className="box">
            <strong className="drag-cursor">
              <div className="drag-here">Drag Here</div>
            </strong>
            <iframe
              width={this.props.width}
              height={this.props.height}
              src="https://www.youtube.com/embed/FSs_JYwnAdI"
            ></iframe>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default DraggableItem;
