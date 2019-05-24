import React from 'react';
import { Container } from 'reactstrap'
import AboutSite from '../components/about.js'
import AdressSelect from '../components/address-select.js'
import MapBox from '../components/map-box.js'
import Recommendations from './recom.js'
import ActionHandler from './action-handler.js'


export default class ResultPage extends React.Component {
  render() {return (<div>
      <MapBox address={this.props.address.text} reset={this.props.reset}/>
      <ActionHandler/>
      <Recommendations basement={this.props.address.has_basement} filter={["A", "B"]} />
    </div>
  );}
}
