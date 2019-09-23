import React from 'react';

export default class Recommendation extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-img-top">
          <img className="img-fluid rounded" src={ this.props.img } alt={ this.props.link }/>
        </div>
        <div className="card-body">
          <h3 className="card-title">{ this.props.title }</h3>
          <p className="card-text">{ this.props.caption.slice(0,60) }...</p>
          <a rel="noopener noreferrer" target="_blank" href={ this.props.link }>Læs mere her</a>
        </div>
      </div>
    );
  }
}
