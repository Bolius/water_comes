import React from 'react';
import MapBox from '../components/map-box.js'
import Recommendations from './recom.js'
import ActionHandler from './action-handler.js'


export default class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.setActions = this.setActions.bind(this);
    this.state = {actions: [], showRes: false};
  }

  setActions(actions) {
    this.setState({ actions: actions, showRes: true } );
  }

  render() {
    let dangers = this.props.dangers
    if(this.props.address.has_basement){
      dangers.high.push('basement')
    }
    else {
      dangers.low.push('basement')
    }
    return (
      <div>
      <MapBox address={ this.props.address.text } reset={this.props.reset} />
      <ActionHandler dangers={dangers} setActions={ this.setActions }/>
      {!this.state.showRes?
        <div/>:
        <Recommendations basement={this.props.address.has_basement} filter={this.state.actions} />
      }

    </div>
  );}
}
