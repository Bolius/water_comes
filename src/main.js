import React from "react";
import styled from "styled-components";
import AboutSite from "./components/about.js";
import AdressSelect from "./components/address-select.js";
import ResultPage from "./views/result-page.js";
import DataBasis from "./components/data-basis.js";
import DataLoader from "./components/data-loader.js";

const Container = styled.div`
  margin: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.setAddress = this.setAddress.bind(this);
    this.setData = this.setData.bind(this);
    this.resetAddress = this.resetAddress.bind(this);
    this.state = { address: {}, address_selected: false, has_data: false };
  }

  setData(data) {
    this.setState({
      address_selected: true,
      has_data: true,
      address: data
    });
  }

  setAddress(data) {
    this.setState({
      address_selected: true,
      has_data: false,
      address: data
    });
  }

  resetAddress() {
    this.setState({ address: {}, address_selected: false, has_data: false });
  }

  render() {
    return (
      <div style={{ margin: "5%" }}>
        <Container>
          <AboutSite />
          {!this.state.has_data ? (
            !this.state.address_selected ? (
              <AdressSelect setAddress={this.setAddress} />
            ) : (
              <DataLoader
                dawaData={this.state.address}
                setData={this.setData}
              />
            )
          ) : (
            <div>
              <ResultPage
                address={this.state.address}
                dangers={this.state.address.dangers}
                reset={this.resetAddress}
              />
              <DataBasis />
            </div>
          )}
        </Container>
      </div>
    );
  }
}
