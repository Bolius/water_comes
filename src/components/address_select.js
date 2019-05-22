import React from 'react';
import { Button, Row, Col,  Container, Input } from 'reactstrap';
import '../styles/adress_select.css'

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
      <Container className="input-box">
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
              <Button color="info" block>Analyser</Button>
            </Col>
          </Row>
        </form>
      </Container>
    );
  }
}
