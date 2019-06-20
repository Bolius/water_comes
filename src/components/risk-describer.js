import React from "react";
import styled from "styled-components";
import Risk from "./risk.js";
import Risks from "../risks.json";

export default class RiskDescriber extends React.Component {
  getRisks(type) {
    return this.props.dangers[type].map((id, i) => (
      <Risk
        key={i}
        title={Risks[id][type]}
        description={Risks[id].description}
      />
    ));
  }

  render() {
    const riskImage = require(`../assets/gauges/risk-${this.props.risk}.png`);
    return (
      <div style={{ margin: "20px" }}>
        <div
          style={{
            fontWeight: "600",
            fontSize: "1.2em",
            backgroundColor: "#d5eff9",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h2>Skybrud</h2>

          <img
            src={riskImage}
            style={{ height: "64px", width: "64px" }}
            className="img-fluid"
            alt="Risiko måler"
          />

          <h5 style={{ color: "#3687b7" }}>{this.props.riskText}</h5>
        </div>

        <div
          style={{
            fontSize: "1.2em",
            fontWeight: 600,
            backgroundColor: "#eff9fd",
            padding: "0.8em",
            textAlign: "center"
          }}
        >
          Faktorer, der påvirker boligens risiko ved {this.props.type}
        </div>

        <div>
          {this.getRisks("high")}
          {this.getRisks("medium")}
          {this.getRisks("low")}
        </div>
      </div>
    );
  }
}
