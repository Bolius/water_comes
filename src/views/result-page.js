import React from "react";
import MapBox from "../components/map-box.js";
import ActionHandler from "./action-handler.js";
import ApartmentBox from "../components/apartment-box.js";
import DataBasis from "../components/data-basis.js";

export default class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      showDataDescriber: false
    };
  }

  toggle() {
    this.setState({
      showDataDescriber: !this.state.showDataDescriber
    });
  }

  render() {
    let dangers = this.props.dangers;
    if (this.props.address.has_basement) {
      if (!dangers.high.includes("basement")) {
        dangers.high.push("basement");
      }
    }

    return (
      <div>
        {this.props.address.apartment ? <ApartmentBox /> : ""}
        <MapBox address={this.props.address.text} reset={this.props.reset} />
        <ActionHandler dangers={dangers} />
        <DataBasis />
      </div>
    );
  }
}
