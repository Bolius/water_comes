import React from "react";
import RiskDB from "../risks.json";

import Risk from "./risk.js";
import trackEvent from "../action_logger.js";

export default function RiskDescriber(props) {
  const image = require(`../assets/gauges/risk-${props.threatLevel}.png`);
  const hacky_threat_nr = // Update Css to avoid this
    ["low", "medium", "high"].indexOf(props.threatLevel) + 2;

  const riskImage = (
    <div noGutters className="water-comes-app-estimate">
      <img src={image} className="img-fluid" alt="Risiko måler" />
      <p className={`risc-${hacky_threat_nr}`}>
        {getRiskText(props.threatLevel)}
      </p>
    </div>
  );

  return (
    <div className="water-comes-app-hightlighted">
      {riskImage}

      <div className="water-comes-app-explanation">
        <h3>Faktorer, der påvirker boligens risiko ved {props.floodType}</h3>
        <div>
          {constructRisks(props.risks, props.dangers, props.floodType)}

          {props.floodType === "skybrud" ? (
            <Risk
              title={RiskDB["rain_other"].title}
              description={RiskDB["rain_other"].description}
              threatLevel={"medium"}
            />
          ) : (
            <Risk
              title={RiskDB["flood_other"].title}
              description={RiskDB["flood_other"].description}
              threatLevel={"medium"}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function getRiskText(threatLevel) {
  switch (threatLevel) {
    case "high":
      return "Høj risiko";
    case "medium":
      return "Mellem risiko";
    case "low":
      return "lav risiko";
    default:
      throw `Invalid threatlevel: ${threatLevel}`;
  }
}

function constructRisks(risks, dangers, floodType) {
  const risk_types = Object.keys(risks);
  const ordered_risks = ["high", "medium", "low"]
    .map(level =>
      risk_types.filter(risk_type => risks[risk_type].risk === level)
    )
    .reduce((acc, val) => acc.concat(val), [])
    .map(key => ({ name: key, data: risks[key] }));

  const logClick = title =>
    trackEvent({
      description: `Faneblad: ${floodType}`,
      eventLabel: `Faktorer: ${title}`,
      cloudbirstDimension: dangers.rain_threat,
      floodDimension: dangers.flood.risk
    });
  return ordered_risks.map((threat, i) => (
    <Risk
      key={i}
      logClick={() => logClick(RiskDB[threat.name][threat.data.risk])}
      threatLevel={threat.data.risk}
      title={RiskDB[threat.name][threat.data.risk]}
      description={RiskDB[threat.name].description}
      map={formatImage(threat.data.image)}
    />
  ));
}

function formatImage(image) {
  if (image !== undefined) {
    image = image.substring(2, image.length - 1);
    image = `data:image/png;base64,${image}`;
  }
  return image;
}
