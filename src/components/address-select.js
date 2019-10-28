import React from 'react';
import { Row, Col, Input, Form, Button } from 'reactstrap';
import Modal from 'react-responsive-modal';

export default class AdressSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      address: "",
      finalAddress: "",
      dawa: require("dawa-autocomplete2"),
      err_modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      err_modal: !this.state.err_modal,
      address: "",
      finalAddress: ""
    });
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
        json["apartment"] = bbr_json.type === "story" || bbr_json.type === "oth";
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
        console.log("data res")
        console.log(data);
        let res = {
          'apartment': data.apartment,
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
    return ( <div>
      <Modal
        showCloseIcon={false}
        open={this.state.err_modal}
        closeOnEsc onClose={this.toggle}
        closeOnOverlayClick={true}
        styles={{modal: {
          borderRadius: "30px",
          padding: "0",
          backgroundColor: "#404040",
          textAlign: "center",
          position: "relative",
        }}}
      >
        <div><div style={{
          border: "2px solid white",
          height: "3em",
          backgroundColor: "#93CBBD",
          borderRadius: "30px",
          textAlign: "center",
          position: "relative",
          zIndex: "1"
        }}>
        <br/>
          <span className="text-danger text-center">Fejl: </span>
          Mangelfuld data fra BBR
        </div>
        <div style={{
            backgroundColor:"#EBF5F5",
            width: "100%",
            margin:"auto",
            marginTop:"-10px",
            borderRadius: "20px",
            paddingTop: "20px",
            zIndex: "0"
        }}>
          BBR registret indeholder ikke nok data om huset til at lave
          forudsigelser.
          <div style={{padding:"10px"}}>
            <div style={{verticalAlign: "middle", display:"inline-block"}}>
              <button
              style={{marginRight:"20px"}}
              onClick={() => {window.open("https://bbr.dk/ret")}}
            >
              Ret BBR data
            </button></div>
            <div style={{verticalAlign: "middle", display:"inline-block"}}>
              <button onClick={this.toggle}>
                Prøv anden adresse
              </button>
            </div>
          </div>
          </div>
        </div>
      </Modal>

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
      </div>
    );
  }
}
