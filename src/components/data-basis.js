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
      <div
        style={{
          marginTop: "15px",
          marginBottom: "15px",
          backgroundColor: "#eff9fd"
        }}
      >
        <div
          onClick={this.toggle}
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1.2em"
          }}
        >
          <div style={{ paddingLeft: "30px" }}>SE DATAGRUNDLAGET HER</div>
          <div
            style={{
              textAling: "right",
              color: "#006EA7",
              paddingRight: "40px",
              fontWeight: "800",
              fontSize: "1.8em"
            }}
          >
            {this.state.collapse ? "-" : "+"}
          </div>
        </div>
        <div>{this.state.collapse ? <DataContent /> : ""}</div>
      </div>
    );
  }
}
