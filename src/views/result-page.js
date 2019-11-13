import React from "react";
import MapBox from "../components/map-box.js";
import ActionHandler from "./action-handler.js";
import ApartmentBox from "../components/apartment-box.js";
import DataBasis from "../components/data-basis.js";

export default class ResultPage extends React.Component {
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
        {this.props.houseData.isApartment ? <ApartmentBox /> : ""}
        <MapBox address={this.props.houseData.text} reset={this.props.reset} />
        <ActionHandler dangers={dangers} />
        <DataBasis />
      </div>
    );
  }
}
