import React, { Component } from 'react';

export default class Action extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    if(this.props.recomShown){
      this.setState(state => ({ collapse: !state.collapse}));
      this.props.setKey(this.props.keyId)
      this.props.handleChange()
    }
    else{
      this.setState(state => ({ collapse: !state.collapse, recomShown: true}));
      this.props.setKey(this.props.keyId)
    }

  }

  render() {
    return (
      <div className="water-comes-app-task custom-control custom-checkbox">        
          <input type="checkbox" onClick={this.toggle} className="custom-control-input"/>       
          <label className="custom-control-label" onClick={this.toggle}>{this.props.task}</label>       
      </div>
    );
  }
}
