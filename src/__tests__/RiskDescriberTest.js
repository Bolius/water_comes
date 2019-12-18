import React from "react";
import { act } from "react-dom/test-utils";
import { render } from "react-dom";

import RiskDB from "../risks.json";
import RiskDescriber from "../components/risk-describer.js";

let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

const testData = [
  {
    threatLevel: "medium",
    risks: {
      basement: { risk: "medium" },
      conductivity: { risk: "high" },
      hollowing: { risk: "low" }
    },
    floodType: "skybrud"
  },
  {
    threatLevel: "low",
    risks: {
      fastningDegree: { risk: "medium" },
      basement: { risk: "high" },
      hollowing: { risk: "low" }
    },
    floodType: "skybrud"
  },
  {
    threatLevel: "high",
    risks: {
      fastningDegree: { risk: "medium" },
      basement: { risk: "high" },
      hollowing: { risk: "low", image: "base64" }
    },
    floodType: "stormflod"
  }
];

describe("Testing risk describer", () => {
  test.each`
    testData
    ${testData[0]}
    ${testData[1]}
    ${testData[2]}
  `("Tests that the header is rendered corretly", ({ testData }) => {
    act(() => {
      render(
        <RiskDescriber
          floodType={testData.floodType}
          threatLevel={testData.threatLevel}
          risks={testData.risks}
        />,
        container
      );
    });
    const header = container.getElementsByClassName(
      "water-comes-app-estimate"
    )[0];
    const headerImg = header.getElementsByTagName("img")[0].src;
    expect(headerImg).toContain(testData.threatLevel);

    let danishRiskText = "";
    switch (testData.threatLevel) {
      case "high":
        danishRiskText = "høj";
        break;
      case "medium":
        danishRiskText = "mellem";
        break;
      case "low":
        danishRiskText = "lav";
        break;
      default:
        throw "Invalid threatlevel";
    }
    expect(header.textContent.toLowerCase()).toContain(danishRiskText);
  });

  test.each`
    testData
    ${testData[0]}
    ${testData[1]}
    ${testData[2]}
  `("Tests that the risks are renderd corretly", ({ testData }) => {
    act(() => {
      render(
        <RiskDescriber
          floodType={testData.floodType}
          threatLevel={testData.threatLevel}
          risks={testData.risks}
        />,
        container
      );
    });
    const risk_list = container.getElementsByClassName("risk-list")[0];
    if (testData.floodType === "skybrud") {
      expect(risk_list.textContent).toContain(RiskDB["rain_other"].title);
    } else {
      expect(risk_list.textContent).toContain(RiskDB["flood_other"].title);
    }

    // Tests order
    const risks = Array.from(risk_list.childNodes);
    expect(risks.length).toBe(Object.keys(testData.risks).length + 1);
    const order = ["high", "medium", "low"];
    let orderIndex = 0;
    for (var i = 0; i < risks.length - 1; i++) {
      if (risks[i].textContent.includes(order[orderIndex])) {
        expect(risks[i].textContent).toContain(order[orderIndex]);
      } else {
        let currentLevel = order[orderIndex];
        expect(
          risks
            .slice(i, risks.length - 1)
            .filter(risk => risk.textContent.includes(currentLevel)).length
        ).toBe(0);
        ++orderIndex;
      }
    }
  });
});
