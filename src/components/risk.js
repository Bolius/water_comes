import React, { Component } from "react";
export default class Risk extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { showDescription: false };
  }

  toggle() {
    this.setState(state => ({ showDescription: !state.showDescription }));
  }

  render() {
    return (
      <div>
        <div className="risk-row" onClick={this.toggle}>
          <h5>{this.props.title}</h5>
          <h5 className="plus-btn">{this.state.showDescription ? "-" : "+"}</h5>
          {this.state.showDescription ? (
            <div>{this.props.description}</div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
