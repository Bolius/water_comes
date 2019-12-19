// Function that takes a a backend response and computes the rain risk according
// to the specification given by the subject experts.

// Functions to avoid a lot of repeated typing
const isLow = danger => danger.risk === "low";
const isHigh = danger => danger.risk === "high";

var computeRainRisk = function(dangers) {
  if (
    isLow(dangers.basement) &&
    isLow(dangers.hollowing) &&
    !isHigh(dangers.conductivity) &&
    !isHigh(dangers.fastningDegree)
  ) {
    return "low";
  } else if (
    isLow(dangers.basement) &&
    isLow(dangers.hollowing) &&
    (isHigh(dangers.conductivity) || isHigh(dangers.fastningDegree))
  ) {
    return "medium";
  } else if (isHigh(dangers.hollowing) && isHigh(dangers.basement)) {
    return "high";
  } else if (isHigh(dangers.hollowing)) {
    if (isLow(dangers.conductivity) && isLow(dangers.fastningDegree)) {
      return "medium";
    } else {
      return "high";
    }
  } else if (isHigh(dangers.basement)) {
    return "medium";
  } else {
    // Default case with most common
    console.log("Reached non special case in risk computer");
    console.log(dangers);

    const rain_risks_names = [
      "basement",
      "conductivity",
      "hollowing",
      "fastningDegree"
    ];

    // The most common risk level exluding flood risk
    let rain_risk_levels = rain_risks_names.map(threat => dangers[threat].risk);
    let rain_threat = ["high", "medium", "low"]
      .map(level => [
        level,
        rain_risk_levels.filter(risk_level => risk_level === level).length
      ])
      .reduce((acc, elem) => (acc[1] < elem[1] ? elem : acc), ["def", 0])[0];

    return rain_threat;
  }
};

export default computeRainRisk;
