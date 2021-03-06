import React from "react";
import AdressSelect from "./components/address-select.js";
import DataModal from "./components/data-modal.js";
import ResultPage from "./views/result-page.js";
import exampleHouseData from "./example-house.json";
import trackEvent from "./data-handlers/action-logger.js";

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
      this.state = {
        showModal: false,
        houseData: exampleHouseData,
        hasData: true
      };
    }
  }

  toggleDataModal() {
    if (!this.state.showModal) {
      if (!this.state.hasData) {
        trackEvent({
          description: `Datagrundlag`,
          eventLabel: `Side: adresseindtastning`,
          cloudbirstDimension: "Ikke regnet endnu",
          floodDimension: "Ikke regnet endnu"
        });
      } else {
        trackEvent({
          description: `Datagrundlag`,
          eventLabel: `Side: resultatside`,
          cloudbirstDimension: this.state.houseData.rain_risk.risk,
          floodDimension: this.state.houseData.storm_flood.risk
        });
      }
    }
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
