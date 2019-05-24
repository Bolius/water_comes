import React from 'react';
import {Row, Col} from 'reactstrap'
import TabHeader from '../components/tab-header.js'
import RiskDescriber from '../components/risk-describer.js'
import ActionsTaken from '../components/actions-taken.js'
import Articles from '../articles.json'
import Risks from '../risks.json'

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
    return (
    <div>
      <TabHeader tab={this.state.tab} setTab={this.setTab}/>
      <Row>
        <Col>
          <RiskDescriber
            risk={4}
            riskText={"Skønnet risiko middel til høj"}
            type={this.state.tab}
            risks={Risks}
          />
        </Col>
        <Col>
          <ActionsTaken actions={actions} setActions={this.props.setActions}/>
        </Col>
      </Row>
    </div>

    );
  }
}
