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
          <h3>{this.props.title}</h3>
          <span className="plus-btn">{this.state.showDescription ? "-" : "+"}</span>
          {this.state.showDescription ? (
            <p>{this.props.description}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
