import React from "react";
import Risk from "./risk.js";
import Risks from "../risks.json";
import { Row } from "reactstrap";

export default class RiskDescriber extends React.Component {
  getRisks(threat) {
    return this.props.dangers.risks[threat]
      .map(type => (type === "basement" ? "kælder" : type))
      .map((factor, i) => (
        <Risk
          key={i}
          threat={threat}
          title={Risks[factor][threat]}
          description={Risks[factor].description}
          image={this.getImage(factor)}
        />
      ));
  }

  getImage(factor) {
    let img = undefined;
    switch (factor) {
      case "lavning":
        img = this.props.dangers.hollowing.image;
        img = img.substring(2, img.length - 1);
        img = `data:image/png;base64,${img}`;
        break;
      case "bebyggelse":
        img = this.props.dangers.fastningDegree.image;
        img = img.substring(2, img.length - 1);
        img = `data:image/png;base64,${img}`;
        break;
      default:
        img = undefined;
    }
    return img;
  }

  render() {
    const image = require(`../assets/gauges/risk-${this.props.risk.factor}.png`);

    return (
      <div className="water-comes-app-hightlighted">
        <Row noGutters className="water-comes-app-estimate">
          <img src={image} className="img-fluid" alt="Risiko måler" />
          <p className={"risc-" + this.props.risk.factor}>
            {this.props.risk.text}
          </p>
        </Row>
        <div className="water-comes-app-explanation">
          <h3>
            Faktorer, der påvirker boligens risiko ved {this.props.active}{" "}
          </h3>
          {this.props.risk.title === "Skybrud" ? (
            <div>
              {this.getRisks("high")}
              {this.getRisks("medium")}
              {this.getRisks("low")}
              <Risk
                title={Risks["other"].title}
                description={Risks["other"].description}
                threat={"medium"}
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
