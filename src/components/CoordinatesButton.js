import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  buttonClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  };
  render() {
    return (
      <div>
        <button onClick={this.buttonClick}>Coordinates Button</button>
      </div>
    );
  }
}
