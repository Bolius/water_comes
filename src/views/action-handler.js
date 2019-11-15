import React from "react";
import RiskDescriber from "../components/risk-describer.js";
import Resume from "../components/resume.js";
export default class ActionHandler extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTab = this.toggleTab.bind(this);
    const types = Object.keys(this.props.dangers.risks);
    const nr_factors = types.map(type => this.props.dangers.risks[type].length);
    const risk = types[nr_factors.indexOf(Math.max.apply(Math, nr_factors))];
    let rain_risk = this.formatRisks(risk);
    let flood_risk = this.formatRisks(this.props.dangers.flood.risk);
    rain_risk["title"] = "Skybrud";
    flood_risk["title"] = "Stormflod";

    this.state = {
      tab: "skybrud",
      active_risk: rain_risk,
      rain_risk: rain_risk,
      flood_risk: flood_risk
    };
  }
  formatRisks(value) {
    let risk = {};
    switch (value) {
      case "high":
        risk = { text: "Høj risiko", factor: 4 };
        break;
      case "low":
        risk = { text: "Lav risiko", factor: 2 };
        break;

      default:
        risk = { text: "Mellem risiko", factor: 3 };
        break;
    }
    return risk;
  }

  toggleTab(state) {
    this.setState({
      tab: state,
      active_risk:
        state === "skybrud" ? this.state.rain_risk : this.state.flood_risk
    });
  }

  render() {
    return (
      <div className="water-comes-app-tabs">
        <ul className="nav nav-tabs">
          <li className="nav-item" onClick={() => this.toggleTab("skybrud")}>
            <a
              className={
                "nav-link " + (this.state.tab === "skybrud" ? " active" : "")
              }
            >
              Skybrud
            </a>
          </li>
          <li className="nav-item" onClick={() => this.toggleTab("stormflod")}>
            <a
              className={
                "nav-link " + (this.state.tab === "stormflod" ? " active" : "")
              }
            >
              Stormflod
            </a>
          </li>
        </ul>
        <div className="water-comes-app-actions">
          <RiskDescriber
            risk={this.state.active_risk}
            dangers={this.props.dangers}
            active={this.state.tab}
          />
          <Resume
            active={this.state.tab}
            risk={this.state.active_risk}
            dangers={this.props.dangers}
          />
        </div>
      </div>
    );
  }
}
