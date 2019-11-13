import React from "react";
import Risk from "./risk.js";
import Risks from "../risks.json";
import { Row, Col } from "reactstrap";

export default class RiskDescriber extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTab = this.toggleTab.bind(this);
    this.state = {
      tab: "skybrud"
    };
  }

  toggleTab(state) {
    this.setState({
      tab: state
    });
  }

  getRisks(type) {
    return this.props.dangers.risks[type].map((id, i) => (
      <Risk
        key={i}
        title={Risks[id][type]}
        description={Risks[id].description}
        image={this.props.dangers[id]}
        percentage={this.props.dangers[String(id).concat("_percentage")]}
        text={Risks[id].text}
      />
    ));
  }

  render() {
    const rain_image = require(`../assets/gauges/risk-${this.props.rain_risk.factor}.png`);
    const riskImageTab2 = require(`../assets/gauges/risk-${this.props.flood_risk.factor}.png`);

    return (
      <div className="water-comes-app-hightlighted">
        <Row>
          <Col
            onClick={() => this.toggleTab("skybrud")}
            className="water-comes-app-estimate"
          >
            <h3>Skybrud</h3>
            <img src={rain_image} className="img-fluid" alt="Risiko måler" />
            <p>{this.props.rain_risk.text}</p>
          </Col>

          <Col
            onClick={() => this.toggleTab("stormflod")}
            className="water-comes-app-estimate"
          >
            <h3>Stormflod</h3>
            <img src={riskImageTab2} className="img-fluid" alt="Risiko måler" />
            <p>{this.props.flood_risk.text}</p>
          </Col>
        </Row>
        <div className="water-comes-app-explanation">
          <h3>Faktorer, der påvirker boligens risiko ved {this.state.tab}</h3>
          {this.state.tab === "skybrud" ? (
            <div>
              {this.getRisks("high")}
              {this.getRisks("medium")}
              {this.getRisks("low")}
              <Risk
                title={Risks["other"].title}
                description={Risks["other"].description}
              />
            </div>
          ) : (
            <div>
              Her skal være tekst om risiko ved stormflod
              <p>
                Din højde over vandoverfladen i meter: er{" "}
                {this.props.dangers.flood.groundHeight}.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
