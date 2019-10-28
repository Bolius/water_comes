import React from 'react';
import RiskDescriber from '../components/risk-describer.js'
import ActionsTaken from '../components/actions-taken.js'
import Articles from '../articles.json'

export default class ActionHandler extends React.Component {
  constructor(props) {
    super(props);
    this.setTab = this.setTab.bind(this);
    this.state = {
      tab: "skybrud",
    };
  }

  setTab(tab) {
    let state = this.state;
    state.tab = tab;
    this.setState(state)
  }

  render() {
    const actions = Articles.actions
    let riskAssement = 'Mellem risiko'
    let riskNr = 3
    const nrHighs = this.props.dangers.high.length
    const nrLows = this.props.dangers.low.length
    const nrMids = this.props.dangers.medium.length
    if(nrHighs > nrLows && nrHighs > nrMids){
      riskAssement = 'Høj risiko'
      riskNr = 4
    }
    else if (nrLows > nrHighs && nrLows > nrMids) {
      riskAssement = 'Lav risiko'
      riskNr = 2
    }
    
    return (
    <div className="water-comes-app-actions">
      <RiskDescriber
        risk={riskNr}
        riskText={riskAssement}
        type={this.state.tab}
        dangers={this.props.dangers}
      />
      <ActionsTaken actions={actions} setActions={this.props.setActions}/>
    </div>
    );
  }
}
//  <TabHeader tab={this.state.tab} setTab={this.setTab}/>
