import React from "react";
import AdressSelect from "./components/address-select.js";
import DataModal from "./components/data-modal.js";
import ResultPage from "./views/result-page.js";
import exampleHouseData from "./example_house_data.js";
import computeRainRisk from "./data-handlers/rain-risk.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.setData = this.setData.bind(this);
    this.reset = this.reset.bind(this);
    this.toggleDataModal = this.toggleDataModal.bind(this);
    this.state = {
      nrAddress: 1,
      showModal: false,
      houseData: {},
      hasData: false
    };
    if (process.env.REACT_APP_SKIP_INPUT === "true") {
      let data = exampleHouseData;
      data.dangers.rain_threat = computeRainRisk(exampleHouseData.dangers);
      this.state = {
        showModal: false,
        houseData: data,
        hasData: true
      };
    }
  }

  toggleDataModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  setData(houseData) {
    this.setState({
      hasData: true,
      houseData: houseData
    });
  }

  reset() {
    this.setState({
      houseData: {},
      hasData: false
    });
  }

  render() {
    return (
      <div>
        <DataModal
          showModal={this.state.showModal}
          toggleDataModal={this.toggleDataModal}
        />
        {!this.state.hasData ? (
          <AdressSelect
            toggleDataModal={this.toggleDataModal}
            setData={this.setData}
          />
        ) : (
          <ResultPage
            toggleDataModal={this.toggleDataModal}
            houseData={this.state.houseData}
            reset={this.reset}
          />
        )}
      </div>
    );
  }
}
