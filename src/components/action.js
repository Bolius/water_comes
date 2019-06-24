import React, { Component } from "react";

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
      <div className="ww-action-row" onClick={this.toggle}>
        <div className="ww-action-checkbox">
          {this.state.collapse ? "✓" : " "}
        </div>

        <div className="ww-action-text">{this.props.task}</div>
      </div>
    );
  }
}
