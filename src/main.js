import React from "react";
import AdressSelect from "./components/address-select.js";
import ResultPage from "./views/result-page.js";
import exampleAddress from "./example_response.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.setAddress = this.setAddress.bind(this);
    this.resetAddress = this.resetAddress.bind(this);

    this.state = {
      address: exampleAddress,
      address_selected: true
    }; // For debug

    // this.state = {
    //   address: {},
    //   address_selected: false
    // };
  }

  setAddress(address) {
    this.setState({
      address_selected: true,
      address: address
    });
  }

  resetAddress() {
    this.setState({ address: {}, address_selected: false });
  }

  render() {
    if (!this.state.address_selected) {
      return (
        <div>
          <AdressSelect setAddress={this.setAddress} />
        </div>
      );
    } else {
      return (
        <ResultPage
          address={this.state.address}
          reset={this.resetAddress}
          dangers={this.state.address.dangers}
        />
      );
    }
  }
}
