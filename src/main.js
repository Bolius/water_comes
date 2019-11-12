import React from 'react';
import { Container } from 'reactstrap'
import AboutSite from './components/about.js'
import AdressSelect from './components/address-select.js'
import ResultPage from './views/result-page.js'
import DataBasis from './components/data-basis.js'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.setAddress = this.setAddress.bind(this);
    this.resetAddress = this.resetAddress.bind(this);
    this.state = {address: {}, address_selected: false};
  }

  setAddress(address) {
    let state = this.state;
    state.address = address;
    state.address_selected = true;
    this.setState(state);
  }

  resetAddress(){
    this.setState({address: {}, address_selected: false})
  }

  render() {return (
    <Container>
      <AboutSite/>
      {!this.state.address_selected ?
        <AdressSelect setAddress={this.setAddress}/>
      :
        <ResultPage address={this.state.address} reset={this.resetAddress} dangers={this.state.address.dangers}/>
      }
      {!this.state.address_selected ?
        ""
      :
      <DataBasis/>
      }

    </Container>
  );}
}
