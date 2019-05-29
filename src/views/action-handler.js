import React from 'react';
import {Row, Col, Container} from 'reactstrap'
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
      <Container>

      <Row style={{ marginBottom: '12px' , backgroundColor: "#DAEFF9"}}>
        <Col sm={6} style={{ marginTop: '10px'}}>
          <Container><p style={{ fontSize : '35px' }}>Stormflod</p></Container>
          <RiskDescriber
            risk={4}
            riskText={"Skønnet risiko middel til høj"}
            type={this.state.tab}
            risks={Risks}
          />
        </Col>
        <Col sm={6} style={{ marginTop: '20px'}}>
          <ActionsTaken actions={actions} setActions={this.props.setActions}/>
        </Col>
      </Row>
      </Container>
    </div>

    );
  }
}
//  <TabHeader tab={this.state.tab} setTab={this.setTab}/>
