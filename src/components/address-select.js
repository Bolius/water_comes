import React from "react";
import styled from "styled-components";
import { Row, Col, Container, Input } from "reactstrap";
import { Button } from "./button";
import "../styles/water_widget_dawa.css";

const InputBox = styled(Container)`
  background-color: #5ab3dd;
  padding: 10px;
  font-size: 20px;
`;

export default class AdressSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      address: "",
      dawa: require("dawa-autocomplete2")
    };
  }

  handleChange(event) {
    var target = event.target.value;
    var inputElm = document.getElementById("dawa-autocomplete-input");
    this.setState((prevState, props) => ({
      address: target
    }));

    var updateRes = this.props.setAddress;
    this.state.dawa.dawaAutocomplete(inputElm, {
      select: function(dawa_res) {
        updateRes(dawa_res);
      }
    });
  }

  render() {
    return (
      <div>
        <InputBox>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <Row noGutters form>
              <Col md={{ size: "9" }} sm={"12"}>
                <div className="autocomplete-container">
                  <Input
                    type="search"
                    value={this.state.address}
                    onChange={this.handleChange}
                    id="dawa-autocomplete-input"
                    placeholder="Indtast din adresse...."
                  />
                </div>
              </Col>
              <Col md={{ size: "3" }} sm={"12"}>
                <Button>TJEK RISIKO</Button>
              </Col>
            </Row>
          </form>
        </InputBox>
      </div>
    );
  }
}
