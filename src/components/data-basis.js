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
          <div>SE DATAGRUNDLAGET HER</div>
          <div>{this.state.collapse ? "-" : "+"}</div>
        </div>
        <div>{this.state.collapse ? <DataContent /> : ""}</div>
      </div>
    );
  }
}
