import React, { Component } from "react";

const rowStyle = {
  margin: "10px 0px",
  height: "3em",
  display: "flex",
  alignItems: "center",
  cursor: "pointer"
};

export default class Action extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    if (this.props.recomShown) {
      this.setState(state => ({ collapse: !state.collapse }));
      this.props.setKey(this.props.keyId);
      this.props.handleChange();
    } else {
      this.setState(state => ({ collapse: !state.collapse, recomShown: true }));
      this.props.setKey(this.props.keyId);
    }
  }

  render() {
    return (
      <div style={rowStyle} onClick={this.toggle}>
        <div
          style={{
            height: "30px",
            width: "30px",
            border: "5px solid #006FA8",
            backgroundColor: "white",
            color: !this.state.collapse ? "white" : "#006FA8",
            textAlign: "center",
            fontSize: "1em",
            fontWeight: 800
          }}
        >
          ✓
        </div>
        <div />
        <div
          style={{ marginLeft: "10px", fontWeight: "350", fontSize: "1.2em" }}
        >
          {this.props.task}
        </div>
      </div>
    );
  }
}
