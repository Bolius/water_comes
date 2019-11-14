import React from "react";
import { Col } from "reactstrap";
import LinkList from "./link-list.js";
import Modal from "react-responsive-modal";

export default class DataBasis extends React.Component {
  render() {
    return (
      <div className="water-comes-app-data">
        <header onClick={this.props.showModal}>
          <h3>Se datagrundlaget her</h3>
          <i className="icon-add-24">add</i>
        </header>
      </div>
    );
  }
}
