import React, { useState } from "react";
import RiskDescriber from "../components/risk-describer.js";
import Resume from "../components/resume.js";

import classnames from "classnames";

export default class ActionHandler extends React.Component {
  formatRisks(value) {
    let risk = {};
    switch (value) {
      case "high":
        risk = { text: "Høj risiko", factor: 4 };
        break;
      case "low":
        risk = { text: "Lav risiko", factor: 2 };
        break;
      case "medium":
        risk = { text: "Mellem risiko", factor: 3 };
        break;
    }
    return risk;
  }

  render() {
    const types = Object.keys(this.props.dangers.risks);
    const nr_factors = types.map(type => this.props.dangers.risks[type].length);
    const risk = types[nr_factors.indexOf(Math.max.apply(Math, nr_factors))];
    const rain_risk = this.formatRisks(risk);
    console.log(this.props.dangers.flood.risk);
    const flood_risk = this.formatRisks(this.props.dangers.flood.risk);

    return (
      <div className="water-comes-app-actions">
        <RiskDescriber
          rain_risk={rain_risk}
          flood_risk={flood_risk}
          dangers={this.props.dangers}
        />
        <Resume dangers={this.props.dangers} />
      </div>
    );
  }
}
