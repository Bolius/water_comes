import React from "react";
import Risk from "./risk.js";
import Risks from "../risks.json";
import { Row, Col } from "reactstrap";

export default class RiskDescriber extends React.Component {
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
    const image = require(`../assets/gauges/risk-${this.props.risk.factor}.png`);

    return (
      <div className="water-comes-app-hightlighted">
        <Row className="water-comes-app-estimate">
          <h3>{this.props.risk.title}</h3>
          <img src={image} className="img-fluid" alt="Risiko måler" />
          <p>{this.props.risk.text}</p>
        </Row>
        <div className="water-comes-app-explanation">
          <h3>Faktorer, der påvirker boligens risiko ved {this.props.tab} </h3>
          {this.props.tab === "skybrud" ? (
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
