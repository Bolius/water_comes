import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

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
        return <span className="danger icon-error_outline-24 red">error_outline</span>;
      case 'medium':
        return <span className="danger icon-error_outline-24">error_outline</span>;
      default:
        return <span className="danger icon-check_circle_outline-24">check_circle_outline</span>;
    }
  }

  render() {
    var base64str = this.props.image
    return (
      <div className="water-comes-app-risk">
        <header onClick={this.toggle}>
          {this.renderGroup(this.props.type)}
          <h4>{this.props.title}</h4>
          {this.state.showDescription ? (
            <i className="icon-remove-24">remove</i>
            ) : (
            <i className="icon-add-24">add</i>
          )}
        </header>
        {this.state.showDescription ?
            <Row>
              <Col>
                {this.props.description} < br />

                <p><b>{this.props.text} {this.props.percentage}</b></p> < br />

                {
                  (typeof base64str) == "undefined" ?
                  "":
                  <img src={ base64str } alt="Lavning"/ >
                }

              </Col>
            </Row>
          : ''
          }
      </div>
    );
  }
}
