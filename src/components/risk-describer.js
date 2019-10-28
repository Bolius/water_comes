import React from 'react';
import Risk from './risk.js';
import Risks from '../risks.json';


export default class RiskDescriber extends React.Component {
  getRisks(type){
    return this.props.dangers[type].map((id, i) =>(
      <Risk key={i} title={Risks[id][type]} description={Risks[id].description}/>
    ))
  }

  render() {
    console.log(this.props.dangers)
    const riskImage = require(`../assets/gauges/risk-${this.props.risk}.png`)
    return (
      <div className="water-comes-app-hightlighted">
        <div className="water-comes-app-estimate">
          <h3>Skybrud</h3>
          <img src={riskImage} className="img-fluid" alt="Risiko måler"/>
          <p>{this.props.riskText}</p>
        </div>
        <div className="water-comes-app-explanation">
          <h3>Faktorer, der påvirker boligens risiko ved {this.props.type}</h3>
          {this.getRisks('high')}
          {this.getRisks('medium')}
          {this.getRisks('low')}
        </div>
    </div>);
  }
}
