import React from 'react';
import TabHeader from '../components/tab-header.js'

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
    return (
      <TabHeader tab={this.state.tab} setTab={this.setTab}/>
    );
  }
}
