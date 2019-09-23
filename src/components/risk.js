import React, { Component } from 'react';


export default class Risk extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { showDescription: false };
  }

  toggle() {
    this.setState(state => ({ showDescription: !state.showDescription }));
  }

  renderGroup(group) {
    switch (group) {
      case 'high':
        return <span className="danger material-icons red">error_outline</span>;
      case 'medium':
        return <span className="danger material-icons yellow">error_outline</span>;
      default:
        return <span className="danger material-icons green">check_circle_outline</span>;
    }
  }

  render() {
    return (
      <div className="water-comes-app-risk">
        <header onClick={this.toggle}>
          {this.renderGroup(this.props.type)}
          <h4>{this.props.title}</h4>
          <span className="material-icons md-18">{this.state.showDescription ? 'remove': 'add'}</span>
        </header>
        {this.state.showDescription ?
            <p className="water-comes-app-risk-description">
                {this.props.description}  
            </p>
          : ''
          }
      </div>
    );
  }
}
