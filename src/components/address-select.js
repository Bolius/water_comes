import React from 'react';
import styled from 'styled-components';
import { Row, Col,  Container, Input, Modal } from 'reactstrap';
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
    this.toggle = this.toggle.bind(this);
    this.setModal = this.setModal.bind(this);

    this.state = {
      address: "",
      err_modal: false,
      dawa: require("dawa-autocomplete2")
    };
  }

  setModal() {
    console.log(this.state.err_modal)
    this.setState({
      err_modal: true,
    });
  }

  toggle() {
    this.setState({
      err_modal: !this.state.err_modal,
      address: ""
    });
  }

  handleChange(event) {
    var target = event.target.value;
    var inputElm = document.getElementById("dawa-autocomplete-input");
    this.setState((prevState, props) => ({
      address: target
    }));

    var updateRes = this.props.setAddress
    var updateModal = this.setModal
    this.state.dawa.dawaAutocomplete(inputElm, { select: function(dawa_res) {
      async function url_to_json(url) {
        try{
          const response = await fetch(url, {mode: 'cors'});
          let json = await response.json();
          var bbr_info

          bbr_info = await fetch(
            "https://ml.bolius.dk/bbr/"+ encodeURI(json.adressebetegnelse)
          )

          let bbr_json = await bbr_info.json()

          json['has_basement'] = bbr_json.basement_area > 0
          json['bbr'] = bbr_json
          json['x'] =json.adgangsadresse.adgangspunkt.koordinater[0]
          json['y'] =json.adgangsadresse.adgangspunkt.koordinater[1]
          let resp = await fetch(`https://bolius.rotendahl.dk/skybrud/${json.x}/${json.y}`)
          let dangers = await resp.json()

          json['dangers'] = dangers
          return json
        }
        catch (e) {
          return 1
        }
      }

      url_to_json(dawa_res.data.href).then(data => {
        if (data !== 1 && ((data['bbr'].type === "one_fam") || (data['bbr'].type === "row") || (data['bbr'].type === "farm"))) {
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
        } else {
          updateModal()
        }
      })


      }
    });
  }

  render() {
    return ( <div>
        <Modal
        showCloseIcon={false}
        isOpen={this.state.err_modal}
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
        BBR registret indeholder ikke nok data om huset til at lave forudsigelser.
          <div style={{padding:"10px"}}>
            <div style={{verticalAlign: "middle", display:"inline-block"}}>
              <button  className="comfortscore-btn"
              style={{marginRight:"20px"}}
              onClick={() => {window.open("https://bbr.dk/ret")}}
            >
              Ret BBR data
            </button></div>
            <div style={{verticalAlign: "middle", display:"inline-block"}}>
              <button className="comfortscore-btn" onClick={this.toggle}>
                Prøv anden adresse
              </button>
            </div>
          </div>
          </div>
        </div>
      </Modal>
      <InputBox>
        <form onSubmit={(e) => {e.preventDefault();}}>
          <Row noGutters form>
            <Col md={{size: '9'}} sm={'12'}>
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
            <Col md={{size: '3'}} sm={'12'}>
              <Button >
                TJEK RISIKO
              </Button>
            </Col>
          </Row>
        </form>
      </InputBox>
      </div>
    );
  }
}
