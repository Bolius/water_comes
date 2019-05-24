import React from 'react';
import styled from 'styled-components';
import { Row, Col,  Container, Input } from 'reactstrap';
import { Button } from './button'
import '../styles/water_widget_dawa.css'

const InputBox = styled(Container)`
    background-color: #5AB3DD;
    padding: 10px;
    font-size: 20px
`;

export default class AdressSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      address: "",
      finalAddress: "",
    };
  }

  handleChange(event) {
    var target = event.target.value;
    var dawaAutocomplete2 = require("dawa-autocomplete2");
    var inputElm = document.getElementById("dawa-autocomplete-input");
    dawaAutocomplete2.dawaAutocomplete(inputElm, {
      select: function(selected) {
        console.log(selected)
      }
    });

    this.setState((prevState, props) => ({
      address: target
    }));
  }

  render() {
    return (
      <InputBox>
        <form onSubmit={(e) => {e.preventDefault(); console.log(this.state)}}>
          <Row noGutters form>
            <Col sm={{size: '10'}}>
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
            <Col sm={{size: '2'}}>
              <Button>Analyser</Button>
            </Col>
          </Row>
        </form>
      </InputBox>
    );
  }
}
