import React from 'react';
import { Row, Col, Input, Form, Button } from 'reactstrap';


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
        const response = await fetch(url, {mode: 'cors'});
        let json = await response.json();
        const bbr_info = await fetch(
          "https://ml.bolius.dk/bbr/"+ encodeURI(json.adressebetegnelse)
        )
        let bbr_json = await bbr_info.json()
        json['has_basement'] = bbr_json.basement_area > 0
        json['bbr'] = bbr_json
        json['x'] =json.adgangsadresse.adgangspunkt.koordinater[0]
        json['y'] =json.adgangsadresse.adgangspunkt.koordinater[1]
        let resp = await fetch(`https://ml.bolius.dk/waterComes/${json.x}/${json.y}`)
        let dangers = await resp.json()
        console.log("recived")
        console.log(dangers)
        json['dangers'] = dangers
        return json
      }

      url_to_json(dawa_res.data.href).then(data => {
        console.log(data);
        let res = {
          'text' : data.adressebetegnelse,
          'has_basement' : data.has_basement,
          'bolig': data.adgangsadresse.bebyggelser[0],
          'bbr': data['bbr'],
          'x' : data.adgangsadresse.adgangspunkt.koordinater[0],
          'y' : data.adgangsadresse.adgangspunkt.koordinater[1],
          'dangers' : data['dangers']
        }
      updateRes(res)
      })
      }
    });
  }

  render() {
    return (
      <div className="water-comes-app-address">
        <Form onSubmit={(e) => {e.preventDefault();}}>
          <Row>
            <Col md={{size: '9'}} sm={'8'}>
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
            <Col md={{size: '3'}} sm={'4'} className="align-right">
              <Button color="primary">Tjek risiko</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
