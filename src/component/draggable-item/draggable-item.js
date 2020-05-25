import React from "react";
import "./draggable-item.scss";
import Draggable from "react-draggable";

class DraggableItem extends React.Component {
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <div className="draggable-container">
        <Draggable handle="strong" {...dragHandlers}>
          <div className="box">
            <strong
              className="drag-cursor"
              //   onClick={() => this.onClick()}
              //   style={{ width: this.state.width }}
            >
              <div className="drag-here">Drag here</div>
            </strong>
            <iframe
              width="600"
              height="600"
              src="https://www.youtube.com/embed/FSs_JYwnAdI"
            ></iframe>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default DraggableItem;
