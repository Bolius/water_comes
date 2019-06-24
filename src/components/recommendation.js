import React from "react";

export default class Recommendation extends React.Component {
  render() {
    return (
      <div className="recommendation-container">
        <a rel="noopener noreferrer" target="_blank" href={this.props.link}>
          <img src={this.props.img} alt={this.props.link} />
        </a>
        <div>
          <h5>{this.props.title}</h5>
          <p>
            {this.props.caption.slice(0, 80)}...
            <a rel="noopener noreferrer" target="_blank" href={this.props.link}>
              Læs mere her
            </a>
          </p>
        </div>
      </div>
    );
  }
}
