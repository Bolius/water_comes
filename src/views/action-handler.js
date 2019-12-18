import React from "react";
import RiskDescriber from "../components/risk-describer.js";
import Resume from "../components/resume.js";
import trackEvent from "../data-handlers/action-logger.js";
export default class ActionHandler extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTab = this.toggleTab.bind(this);
    this.logClick = this.logClick.bind(this);

    this.rain_risks = {};
    const rain_risks_names = [
      "basement",
      "conductivity",
      "hollowing",
      "fastningDegree"
    ];
    for (var risk of rain_risks_names) {
      this.rain_risks[risk] = this.props.dangers[risk];
    }

    this.state = {
      tab: "skybrud",
      threatLevel: this.props.dangers.rain_threat,
      risks: this.rain_risks
    };
  }
  logClick = title =>
    trackEvent({
      description: `Faneblad: ${this.state.tab}`,
      eventLabel: `Faktorer: ${title}`,
      cloudbirstDimension: this.props.dangers.rain_threat,
      floodDimension: this.props.dangers.flood.risk
    });

  toggleTab(state) {
    this.setState({
      tab: state,
      threatLevel:
        state === "skybrud"
          ? this.props.dangers.rain_threat
          : this.props.dangers.flood.risk,
      risks:
        state === "skybrud"
          ? this.rain_risks
          : { flood: this.props.dangers.flood }
    });
  }

  render() {
    return (
      <div className="water-comes-app-tabs">
        <ul className="nav nav-tabs" style={{ cursor: "pointer" }}>
          <li className="nav-item" onClick={() => this.toggleTab("skybrud")}>
            <span
              className={
                "nav-link " + (this.state.tab === "skybrud" ? " active" : "")
              }
            >
              Skybrud
            </span>
          </li>
          <li className="nav-item" onClick={() => this.toggleTab("stormflod")}>
            <span
              className={
                "nav-link " + (this.state.tab === "stormflod" ? " active" : "")
              }
            >
              Stormflod
            </span>
          </li>
        </ul>
        <div className="water-comes-app-actions">
          <RiskDescriber
            threatLevel={this.state.threatLevel}
            floodType={this.state.tab}
            risks={this.state.risks}
            logClick={this.logClick}
          />
          <Resume
            threatLevel={this.state.threatLevel}
            floodType={this.state.tab}
            dangers={this.props.dangers}
          />
        </div>
      </div>
    );
  }
}
