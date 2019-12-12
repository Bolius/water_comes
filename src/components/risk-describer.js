import React from "react";
import Risk from "./risk.js";
import RiskFile from "../risks.json";
import { Row } from "reactstrap";

export default class RiskDescriber extends React.Component {
  getRisks(risks) {
    const risk_types = Object.keys(risks);
    //console.log(risks);
    const ordered_risks = ["high", "medium", "low"]
      .map(level =>
        risk_types.filter(risk_type => risks[risk_type].risk === level)
      )
      .reduce((acc, val) => acc.concat(val), [])
      .map(key => ({ name: key, data: risks[key] }));

    return ordered_risks.map((threat, i) => (
      <Risk
        key={i}
        tab={this.props.active}
        threat={threat.data.risk}
        title={RiskFile[threat.name][threat.data.risk]}
        description={RiskFile[threat.name].description}
        image={this.formatImage(threat.data.image)}
        dangers={this.props.dangers}
      />
    ));
  }

  formatImage(image) {
    if (image !== undefined) {
      image = image.substring(2, image.length - 1);
      image = `data:image/png;base64,${image}`;
    }
    return image;
  }

  render() {
    let riskText = "";
    switch (this.props.threatLevel) {
      case "high":
        riskText = "Høj risiko";
        break;
      case "medium":
        riskText = "Mellem risiko";
        break;
      case "low":
        riskText = "lav risiko";
        break;
      default:
        console.log("error");
    }
    const image = require(`../assets/gauges/risk-${this.props.threatLevel}.png`);
    const hacky_threat_nr =
      ["low", "medium", "high"].indexOf(this.props.threatLevel) + 2;
    // Update Css to avoid this

    return (
      <div className="water-comes-app-hightlighted">
        <Row noGutters className="water-comes-app-estimate">
          <img src={image} className="img-fluid" alt="Risiko måler" />
          <p className={`risc-${hacky_threat_nr}`}>{riskText}</p>
        </Row>
        <div className="water-comes-app-explanation">
          <h3>
            Faktorer, der påvirker boligens risiko ved {this.props.active}
          </h3>
          <div>
            {this.getRisks(this.props.risks)}
            {this.props.active === "skybrud" ? (
              <Risk
                title={RiskFile["rain_other"].title}
                description={RiskFile["rain_other"].description}
                threat={"medium"}
                dangers={this.props.dangers}
              />
            ) : (
              <Risk
                title={RiskFile["flood_other"].title}
                description={RiskFile["flood_other"].description}
                threat={"medium"}
                dangers={this.props.dangers}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
