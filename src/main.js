import React from "react";
import AdressSelect from "./components/address-select.js";
import ResultPage from "./views/result-page.js";
import exampleHouseData from "./example_house_data.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.setData = this.setData.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      houseData: {},
      hasData: false
    };

    this.state = {
      houseData: exampleHouseData,
      hasData: true
    }; // For debug
  }

  setData(houseData) {
    this.setState({
      hasData: true,
      houseData: houseData
    });
  }

  reset() {
    this.setState({ houseData: {}, hasData: false });
  }

  render() {
    if (!this.state.hasData) {
      return <AdressSelect setData={this.setData} />;
    } else {
      return <ResultPage houseData={this.state.houseData} reset={this.reset} />;
    }
  }
}
