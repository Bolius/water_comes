import React from 'react';
import AdressSelect from './components/address-select.js'
import ResultPage from './views/result-page.js'
import Modal from 'react-responsive-modal';
import DataBasis from './components/data-basis.js'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.setAddress = this.setAddress.bind(this);
    this.resetAddress = this.resetAddress.bind(this);
    this.state = {
      address: {},
      address_selected: false,
      showDataDescriber: false
    };
    this.toggle = this.toggle.bind(this);
  }

  setAddress(address) {
    let state = this.state;
    state.address = address;
    state.address_selected = true;
    this.setState(state);
  }

  toggle() {
    this.setState({
      showDataDescriber: !this.state.showDataDescriber,
    });
  }

  resetAddress(){
    this.setState({address: {}, address_selected: false})
  }

  render() {return (
    <div>
      {!this.state.address_selected ?
        <AdressSelect setAddress={this.setAddress}/>
      :
        <ResultPage address={this.state.address} reset={this.resetAddress} dangers={this.state.address.dangers}/>
      }
      {!this.state.address_selected ?
        ""
      :
      <div>
      <Modal
        open={this.state.showDataDescriber}
        closeOnEsc onClose={this.toggle}>

        <DataBasis/>


      </Modal>
      <header onClick={this.toggle}>
        <h3>Se datagrundlaget her</h3>
      </header>
      </div>
      }

    </div>
  );}
}
