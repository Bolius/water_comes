import React from "react";
import { act } from "react-dom/test-utils";
import { render } from "react-dom";
import Risk from "../components/risk.js";

let container;

const testData = [
  {
    title: "some_title",
    threatLevel: "medium",
    description: "some long description",
    map: "someImage"
  },
  {
    title: "some_title",
    threatLevel: "high",
    description: "some long description",
    map: "someImage"
  },
  {
    title: "some_title",
    threatLevel: "low",
    description: "some long description",
    map: undefined
  }
];

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing risk box", () => {
  test.each`
    testData
    ${testData[0]}
    ${testData[1]}
    ${testData[2]}
  `(
    "Tests that elements are corretly renderd and changes on click ",
    ({ testData }) => {
      const logger = jest.fn();
      act(() => {
        render(
          <Risk
            title={testData.title}
            description={testData.description}
            threatLevel={testData.threatLevel}
            map={testData.map}
            logClick={logger}
            toggleTracker={{}}
          />,
          container
        );
      });
      const header = container.getElementsByTagName("header")[0];
      const title = container.getElementsByTagName("h4")[0];
      const riskImage = container.getElementsByClassName("danger")[0];
      const description = container.getElementsByClassName("description")[0];

      expect(logger).not.toHaveBeenCalled();
      expect(title.textContent).toBe(testData.title);
      expect(riskImage.textContent).toContain(testData.threatLevel);
      expect(description.textContent).toBe("");

      act(() => {
        header.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });

      expect(description.textContent).toBe(testData.description);
      expect(logger).toHaveBeenCalled();

      const map = container.getElementsByClassName("map-wrapper");
      if (testData.map === undefined) {
        expect(map.length).toBe(0);
      } else {
        expect(map[0].getElementsByTagName("img")[0].src).toContain(
          testData.map
        );
      }
    }
  );
});
