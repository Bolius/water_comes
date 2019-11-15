import React from "react";
import Risk from "./risk.js";
import Risks from "../risks.json";
import { Row } from "reactstrap";

export default class RiskDescriber extends React.Component {
  getRisks(threat) {
    return this.props.dangers.risks[threat]
      .filter(type => type !== "basement")
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

  renderBasement() {
    if (this.props.dangers.risks["high"].includes("basement")) {
      return (
        <Risk
          key={5}
          threat={"high"}
          title={Risks["kælder"].high}
          description={Risks.basement.description}
        />
      );
    } else {
      // Dirty hack because specifications changed last minute.
      // TODO make basement proper risk again.
      return (
        <Risk
          key={10}
          threat={"low"}
          title={Risks["kælder"].low}
          description={Risks.basement.description}
        />
      );
    }
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
        <Row className="water-comes-app-estimate">
          <h3>{this.props.risk.title}</h3>
          <img src={image} className="img-fluid" alt="Risiko måler" />
          <p>{this.props.risk.text}</p>
        </Row>
        <div className="water-comes-app-explanation">
          <h3>Faktorer, der påvirker boligens risiko ved {this.props.tab} </h3>
          {this.props.risk.title === "Skybrud" ? (
            <div>
              {this.renderBasement()}
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
