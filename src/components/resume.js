import React from 'react';
import Risk from '../risks.json'


export default class Resume extends React.Component {

  getLinks(type){
    return Risk[type].recommendations.map((r, i) => (
      <div key={i}>
        <p> { r.description }. Læs mere om { r.title } <a href={ r.link }>her</a></p>
      </div>
    ))
  }

  getRisks(level){
    return this.props.dangers[level].map((id, i) =>(
      <div key={i}>
        { Risk[id].recommendation_text}
        { this.getLinks(id) }
      </div>
    ))
  }
  render() {
    console.log(this.props.dangers)
    return (
      <div className="water-comes-app-taken">
        <h3>Opsummering</h3>
        { this.getRisks("high") }
        { this.getRisks("medium") }

    </div>);
  }
}
