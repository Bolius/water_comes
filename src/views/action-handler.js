import React from "react";
import RiskDescriber from "../components/risk-describer.js";
import Resume from "../components/resume.js";
export default class ActionHandler extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTab = this.toggleTab.bind(this);

    const rain_risks_names = [
      "basement",
      "conductivity",
      "hollowing",
      "fastningDegree"
    ];

    this.rain_risks = {};
    for (var risk of rain_risks_names) {
      this.rain_risks[risk] = this.props.dangers[risk];
    }

    // The most common risk level exluding flood risk
    let rain_risk_levels = rain_risks_names.map(
      threat => this.props.dangers[threat].risk
    );
    this.rain_threat = ["high", "medium", "low"]
      .map(level => [
        level,
        rain_risk_levels.filter(risk_level => risk_level === level).length
      ])
      .reduce((acc, elem) => (acc[1] < elem[1] ? elem : acc), ["def", 0])[0];

    this.state = {
      tab: "skybrud",
      threatLevel: this.rain_threat,
      risks: this.rain_risks
    };
  }

  toggleTab(state) {
    this.setState({
      tab: state,
      threatLevel: "skybrud" ? this.rain_threat : this.props.dangers.flood.risk,
      risks:
        state === "skybrud"
          ? this.rain_risks
          : { flood: this.props.dangers.flood }
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
        <div className="water-comes-app-actions"></div>
        <RiskDescriber
          threatLevel={this.state.threatLevel}
          risks={this.state.risks}
          active={this.state.tab}
        />
        <Resume
          threatLevel={this.state.threatLevel}
          active={this.state.tab}
          risk={this.state.active_risk}
          dangers={this.props.dangers}
        />
      </div>
    );
  }
}
