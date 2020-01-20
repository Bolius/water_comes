import React from "react";
import MapBox from "../components/map-box.js";
import ActionHandler from "./action-handler.js";

import DataBasis from "../components/data-basis.js";

export default class ResultPage extends React.Component {
  render() {
    return (
      <div>
        <MapBox
          address={this.props.houseData.text}
          isApartment={this.props.houseData.isApartment}
          reset={this.props.reset}
          showModal={this.props.toggleDataModal}
        />
        <ActionHandler dangers={this.props.houseData.dangers} />
        <DataBasis showModal={this.props.toggleDataModal} />
      </div>
    );
  }
}
