import React from 'react';
import {Row, Col} from 'reactstrap'
import TabHeader from '../components/tab-header.js'
import RiskDescriber from '../components/risk-describer.js'
import ActionsTaken from '../components/actions-taken.js'

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
    const risks = [
      {
        'title': "Din bolig ligger i en lavning",
        'level': "Høj",
        'description': "En lavning er et hul, så egentligt lægger dit hus i et"+
          " hul og det er ret skidt hvis det regner og du ikke vil have vand"
      },
      {
        'title': "Kælderen trækker risikoen op",
        'level': "Middel",
        'description': "Kældren er noget der er farligt fordi det lidt er som "+
          " at have et hul i bunden af sit hus. "
      }
    ];
    const actions = [
      'Faskine',
      'Højvandslukke',
      'Lavninger i græsplænen',
      'Flyt til nyt hus'
    ];
    return (
    <div>
      <TabHeader tab={this.state.tab} setTab={this.setTab}/>
      <Row>
        <Col>
          <RiskDescriber
            risk={4}
            riskText={"Medium til høj estimeret risiko, siger dataen"}
            type={this.state.tab}
            risks={risks}
          />
        </Col>
        <Col>
          <ActionsTaken actions={actions}/>
        </Col>
      </Row>
    </div>

    );
  }
}
