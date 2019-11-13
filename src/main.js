import React from "react";
import AdressSelect from "./components/address-select.js";
import ResultPage from "./views/result-page.js";
import { BeatLoader as Loader } from "react-spinners";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.setAddress = this.setAddress.bind(this);
    this.resetAddress = this.resetAddress.bind(this);
    this.setLoading = this.setLoading.bind(this);

    this.state = {
      address: {},
      address_selected: false,
      loading: false
    };
  }

  setAddress(address) {
    let state = this.state;
    state.address = address;
    state.address_selected = true;
    state.loading = false;
    this.setState(state);
  }

  resetAddress() {
    this.setState({ address: {}, address_selected: false });
  }

  setLoading() {
    this.setState({ loading: !this.state.loading });
  }

  render() {
    if (this.state.loading) {
      return (
        <Loader
          sizeUnit={"px"}
          size={25}
          color={"rgb(94, 179, 219)"}
          loading={true}
        />
      );
    } else {
      if (!this.state.address_selected) {
        return (
          <div>
            <AdressSelect
              setAddress={this.setAddress}
              setLoading={this.setLoading}
            />
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
}
