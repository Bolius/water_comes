import React from "react";
import Risk from "./risk.js";
import Risks from "../risks.json";

export default class RiskDescriber extends React.Component {
  getRisks(type) {
    return this.props.dangers[type].map((id, i) => (
      <Risk
        key={i}
        title={Risks[id][type]}
        description={Risks[id].description}
        danger={type}
      />
    ));
  }

  render() {
    const riskImage = require(`../assets/gauges/risk-${this.props.risk}.png`);
    return (
      <div className="col">
        <div className="risk-summary">
          <h2>Skybrud</h2>
          <img src={riskImage} alt="Risiko måler" />
          <h3>{this.props.riskText}</h3>
        </div>

        <div className="risk-factor">
          <h2>
            Faktorer, der påvirker din boligs risiko ved {this.props.type}
          </h2>
          {this.getRisks("high")}
          {this.getRisks("medium")}
          {this.getRisks("low")}
        </div>
      </div>
    );
  }
}
