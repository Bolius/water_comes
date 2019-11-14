import React from "react";
import MapBox from "../components/map-box.js";
import ActionHandler from "./action-handler.js";

import DataBasis from "../components/data-basis.js";

export default class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDataDescription = this.toggleDataDescription.bind(this);
    this.state = {
      showDataDescriber: false
    };
  }

  toggleDataDescription() {
    this.setState({
      showDataDescriber: !this.state.showDataDescriber
    });
  }

  render() {
    let dangers = this.props.houseData.dangers;
    if (
      this.props.houseData.hasBasement &&
      !dangers.risks.high.includes("basement")
    ) {
      dangers.risks.high.push("basement");
    }

    return (
      <div>
        <MapBox
          address={this.props.houseData.text}
          isApartment={this.props.houseData.isApartment}
          reset={this.props.reset}
        />
        <ActionHandler dangers={dangers} />
        <DataBasis
          toggleDataDescription={this.toggleDataDescription}
          showDataDescriber={this.state.showDataDescriber}
        />
      </div>
    );
  }
}
