import React from "react";

import DataContent from "./data-content.js";

export default class DataBasis extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div className={"data-basis"}>
        <div onClick={this.toggle}>
          <h2>Se datagrundlaget her</h2>
          <span class="icon-data-basis">{this.state.collapse ? "-" : "+"}</span>
        </div>
        <div class="data-basis-content">{this.state.collapse ? <DataContent /> : ""}</div>
      </div>
    );
  }
}
