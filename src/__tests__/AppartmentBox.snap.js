import React from "react";
import { create } from "react-test-renderer";
import ApartmentBox from "../components/apartment-box.js";

describe("Box in case of appartment", () => {
  test("Matches the snapshot", () => {
    const appBox = create(<ApartmentBox />).toJSON();
    expect(appBox).toMatchSnapshot();
  });
});
