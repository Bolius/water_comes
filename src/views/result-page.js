import React from 'react';
import MapBox from '../components/map-box.js'
import ActionHandler from './action-handler.js'
import ApartmentBox from "../components/apartment-box.js";


export default class ResultPage extends React.Component {
  render() {
    let dangers = this.props.dangers;
    if(this.props.address.has_basement){
      if (!dangers.high.includes('basement')) {
        dangers.high.push('basement')
      }
    }

    return (
      <div>
        {this.props.address.apartment ? <ApartmentBox /> : ""}
        <MapBox address={ this.props.address.text } reset={this.props.reset} />
        <ActionHandler dangers={ dangers } />
      </div>
  );}
}
