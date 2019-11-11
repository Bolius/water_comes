import React from 'react';
import Risk from './risk.js';
import Risks from '../risks.json';
import { Row, Col } from 'reactstrap';


export default class RiskDescriber extends React.Component {
  getRisks(type){
    return this.props.dangers[type].map((id, i) =>(
      <Risk key={i} title={Risks[id][type]} description={Risks[id].description} image={this.props.dangers[id]} percentage={this.props.dangers[String(id).concat("_percentage")]} text={Risks[id].text}/>
    ))
  }

  render() {
    const riskImage = require(`../assets/gauges/risk-${this.props.risk}.png`)
    var tab1 = this.props.tab1
    var tab2 = this.props.tab2
    return (
      <div className="water-comes-app-hightlighted">
          < Row >
          <Col onClick={ tab1 }>
            <div className="water-comes-app-estimate">
            <h3>Skybrud</h3>
            <img src={riskImage} className="img-fluid" alt="Risiko måler"/>
            <p>{this.props.riskText}</p>
            </div>
          </ Col >
          < Col onClick={ tab2 }>
            <div className="water-comes-app-estimate">
            <h3>Stormflod</h3>
            <img src={riskImage} className="img-fluid" alt="Risiko måler"/>
            <p>{this.props.riskText}</p>
            </div>
          </ Col >
          </ Row >
        { this.props.type === "skybrud" ?
            <div className="water-comes-app-explanation">
              <h3>Faktorer, der påvirker boligens risiko ved {this.props.type}</h3>
              {this.getRisks('high')}
              {this.getRisks('medium')}
              {this.getRisks('low')}
            </div> :
           <div className="water-comes-app-explanation">
            noget med stormflod
           </div>
        }

      </div>);
  }
}
