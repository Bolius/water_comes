import React from 'react';
import { Container } from 'reactstrap'
import AboutSite from '../components/about.js'
import AdressSelect from '../components/address-select.js'
import MapBox from '../components/map-box.js'
import Recommendations from './recom.js'
import ActionHandler from './action-handler.js'


export default class ResultPage extends React.Component {
  render() {return (<div>
      <MapBox address={this.props.address} />
      <ActionHandler/>
      <Recommendations basement={false} filter={["A", "B"]} />
    </div>
  );}
}
