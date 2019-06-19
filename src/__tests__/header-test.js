import React from "react";
import { create } from "react-test-renderer";
import ReactDOM from "react-dom";
import Header from "../components/header.js";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
});

describe("Header component", () => {
  test("it matches the snapshot", () => {
    const component = create(<Header />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
