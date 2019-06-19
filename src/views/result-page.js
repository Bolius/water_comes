import React from 'react';
import MapBox from '../components/map-box.js'
import Recommendations from './recom.js'
import ActionHandler from './action-handler.js'


export default class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.setActions = this.setActions.bind(this);
    this.state = {actions: [], showRes: false};
    this.moreRef = React.createRef();
  }

  setActions(actions) {
    this.setState((state, props) => ({ actions: actions, showRes: true } ));
  }

  componentDidUpdate() {
    this.moreRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render() {
    let dangers = this.props.dangers

    if(!(dangers.high.includes('basement') || dangers.low.includes('basement'))){
      if(this.props.address.has_basement){
        dangers.high.includes('lavning') ? dangers.high.push('basement') : dangers.medium.push('basement');
      }
      else {
        dangers.low.push('basement')
      }
    }
    return (
      <div>
      <MapBox address={ this.props.address.text } reset={this.props.reset} />
      <ActionHandler dangers={dangers} shown={false} setActions={ this.setActions }/>
      {!this.state.showRes?
        <div/> :
        <div ref={this.moreRef} >
        <Recommendations basement={this.props.address.has_basement} filter={this.state.actions} />
        </div>
      }

    </div>
  );}
}
