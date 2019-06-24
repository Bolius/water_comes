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
      />
    ));
  }

  render() {
    const riskImage = require(`../assets/gauges/risk-${this.props.risk}.png`);
    return (
      <div>
        <div className="risk-summary">
          <h2>Skybrud</h2>
          <img src={riskImage} alt="Risiko måler" />
          <h5>{this.props.riskText}</h5>
          <h5>Faktorer, der påvirker boligens risiko ved {this.props.type}</h5>
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
