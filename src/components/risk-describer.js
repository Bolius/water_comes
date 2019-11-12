import React from 'react';
import Risk from './risk.js';
import Risks from '../risks.json';
import { Row } from 'reactstrap';


export default class RiskDescriber extends React.Component {
  getRisks(type){
    return this.props.dangers[type].map((id, i) =>(
      <Risk key={i} title={Risks[id][type]} description={Risks[id].description} image={this.props.dangers[id]} percentage={this.props.dangers[String(id).concat("_percentage")]} text={Risks[id].text}/>
    ))
  }

  render() {
    const riskImageTab1 = require(`../assets/gauges/risk-${this.props.risk}.png`)
    const riskImageTab2 = require(`../assets/gauges/risk-${this.props.risk_stormflod}.png`)
    const base64str = this.props.dangers['stormflod']

    var tab1 = this.props.tab1
    var tab2 = this.props.tab2
    return (
      <div className="water-comes-app-hightlighted">
          < Row >
          <div onClick={ tab1 } className="water-comes-app-estimate">
            <h3>Skybrud</h3>
            <img src={riskImageTab1} className="img-fluid" alt="Risiko måler"/>
            <p>{this.props.riskText}</p>
          </div>

          <div onClick={ tab2 } className="water-comes-app-estimate">
            <h3>Stormflod</h3>
            <img src={riskImageTab2} className="img-fluid" alt="Risiko måler"/>
            <p>{this.props.riskText_stormflod}</p>
          </div>
          </ Row >
        <div className="water-comes-app-explanation">
          <h3>Faktorer, der påvirker boligens risiko ved {this.props.type}</h3>
        { this.props.type === "skybrud" ?
            <div>
              {this.getRisks('high')}
              {this.getRisks('medium')}
              {this.getRisks('low')}
              <Risk title={ Risks["other"].title } description={ Risks["other"].description } />
            </div> :
           <div>
            Her skal være tekst om risiko ved stormflod

            <p><b>Højde over vandoverfladen i meter: { this.props.dangers['height'] }</b> <br />
            Grænser < br/ >
            Lav: { this.props.dangers['limits']['low'] } < br/>
            Mellem: { this.props.dangers['limits']['medium'] } < br/>
            Høj: { this.props.dangers['limits']['high'] } < br/>
            </p>
            <img src={ base64str } alt="vandstigning"/ >


           </div>
        }
        </div>

      </div>);
  }
}
