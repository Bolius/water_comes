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
      dawa: require("dawa-autocomplete2")
    };
  }

  handleChange(event) {
    var target = event.target.value;
    var inputElm = document.getElementById("dawa-autocomplete-input");
    this.setState((prevState, props) => ({
      address: target
    }));
    var updateRes = this.props.setAddress
    this.state.dawa.dawaAutocomplete(inputElm, { select: function(dawa_res) {
      async function url_to_json(url) {
        const response = await fetch(url);
        let json = await response.json();

        const bbr_info = await fetch(
          "https://ml.bolius.dk/bbr/"+ encodeURI(json.adressebetegnelse)
        )
        let bbr_json = await bbr_info.json()
        json['has_basement'] = bbr_json.basement_area > 0
        json['bbr'] = bbr_json
        return json
      }

      url_to_json(dawa_res.data.href).then(data => {
        console.log(data);
        let res = {
          'text' : data.adressebetegnelse,
          'has_basement' : data.has_basement,
          'bolig': data.adgangsadresse.bebyggelser[0],
          'bbr': data['bbr']
        }
        updateRes(res)
      })
      }
    });
  }

  render() {
    return (
      <InputBox>
        <form onSubmit={(e) => {e.preventDefault();}}>
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
