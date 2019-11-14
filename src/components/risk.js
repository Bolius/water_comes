import React, { Component } from "react";
import { Row, Col } from "reactstrap";

export default class Risk extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { showDescription: false };
  }

  toggle() {
    this.setState(state => ({ showDescription: !state.showDescription }));
  }

  threatImage(group) {
    switch (group) {
      case "high":
        return (
          <span className="danger icon-error_outline-24 red">
            error_outline
          </span>
        );
      case "medium":
        return (
          <span className="danger icon-error_outline-24">error_outline</span>
        );
      default:
        return (
          <span className="danger icon-check_circle_outline-24">
            check_circle_outline
          </span>
        );
    }
  }

  renderText(text) {
    return text
      .split("\n")
      .map(t => <p dangerouslySetInnerHTML={{ __html: t }} />);
  }

  render() {
    return (
      <div className="water-comes-app-risk">
        <header onClick={this.toggle}>
          {this.threatImage(this.props.threat)}
          <h4>{this.props.title}</h4>
          {this.state.showDescription ? (
            <i className="icon-remove-24">remove</i>
          ) : (
            <i className="icon-add-24">add</i>
          )}
        </header>
        {this.state.showDescription ? (
          <Row>
            <Col>
              {this.renderText(this.props.description)}
              {this.props.image !== undefined ? (
                <img src={this.props.image} alt="map" />
              ) : (
                ""
              )}
            </Col>
          </Row>
        ) : (
          ""
        )}
      </div>
    );
  }
}
