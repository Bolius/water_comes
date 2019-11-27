import React from "react";
import { Row, Col, Input, Form, Button } from "reactstrap";
import { BeatLoader as Loader } from "react-spinners";
import constructQuery from "../graphQL_query.js";
import trackEvent from "../action_logger.js";
import computeRainRisk from "../helpers/rain_risk.js";
import backendLog from "../helpers/backendLog.js";
import Modal from "react-responsive-modal";
import * as Sentry from "@sentry/browser";

export default class AdressSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
    let dawa = require("dawa-autocomplete2");
    this.state = {
      failed: false,
      isLoading: false,
      address: "",
      finalAddress: "",
      dawa: dawa
    };
  }
  componentDidMount() {
    this.state.dawa.dawaAutocomplete(
      document.getElementById("dawa-autocomplete-input"),
      {
        select: dawa_res => {
          this.setState({ isLoading: true });
          this.getData(dawa_res);
        }
      }
    );
  }

  async getData(dawa_res) {
    console.log("Fetching data");
    this.setState({ isLoading: true });

    // Remember "this" for async operations 
    var that = this;

    // Set up our HTTP request
    var houseData = {
          failed: false
        }, 
        xhr = new XMLHttpRequest(), 
        xhrQl = new XMLHttpRequest();

    // Setup our listener to process compeleted requests
    xhr.onreadystatechange = function () {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;

      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // Succes, get data
        let data = JSON.parse(xhr.responseText), 
            kvhx = data.kvhx;
        
        // Create and send a POST request
        xhrQl.open('POST', process.env.REACT_APP_GRAPHQL_URL);
        xhrQl.setRequestHeader("Content-Type", "application/json");
        xhrQl.send(constructQuery(kvhx));
      } 
      else {
        // What to do when the request has failed        
        that.setState({
          failed: true,
          isLoading: false,
          address: "",
          finalAddress: "",
          dawa: require("dawa-autocomplete2")
        });
        
        console.log('error', xhr);
        console.log(Sentry.captureException(xhr));
        return { failed: true };
      }

    };

    // Setup our listener to process QL
    xhrQl.onreadystatechange = function () {
      // Only run if the request is complete
      if (xhrQl.readyState !== 4) return;

      // Process our return data
      if (xhrQl.status >= 200 && xhrQl.status < 300) {
        // Succes, get data
        let data = JSON.parse(xhrQl.responseText);
        houseData = data.data.house;

        backendLog(dawa_res.tekst, "Vandet kommer indtastet");
        if (houseData.failed) {
          return;
        }
        
        let result = {
          isApartment: houseData.bbrInfo.propType === "Etageboliger",
          text: houseData.bbrInfo.address,
          dangers: {
            basement: { risk: houseData.bbrInfo.hasBasement ? "high" : "low" },
            flood: houseData.waterRisk.flood,
            hollowing: houseData.waterRisk.hollowing,
            fastningDegree: houseData.waterRisk.fastningDegree,
            conductivity: houseData.waterRisk.conductivity
          }
        };
        result.dangers.rain_threat = computeRainRisk(result.dangers);
    
        trackEvent({
          description: "Adresse indtastet",
          // Gets 2300 københavn part of adrress
          eventLabel: result.text
            .split(",")
            .slice(-1)
            .pop(),
          cloudbirstDimension: result.dangers.rain_threat,
          floodDimension: result.dangers.flood.risk
        });
        
        that.props.setData(result);
      } 
      else {                
        console.log('error', xhrQl); 
        return { failed: true };
      }
    };

    // Create and send a GET request
    xhr.open('GET', dawa_res.data.href);
    xhr.send();

    /*
    let houseData = await fetch(dawa_res.data.href)
      .then(resp => resp.json())
      .then(data => data.kvhx)
      .then(kvhx =>
        fetch(process.env.REACT_APP_GRAPHQL_URL, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: constructQuery(kvhx)
        })
      )
      .then(response => response.json())
      .then(data => data.data.house)
      .catch(err => {
        this.setState({
          failed: true,
          isLoading: false,
          address: "",
          finalAddress: "",
          dawa: require("dawa-autocomplete2")
        });
        console.log("fejl");
        console.log(err);
        console.log(Sentry.captureException(err));
        return { failed: true };
      });
    */      
  }

  handleChange(event) {
    var target = event.target.value;
    this.setState((prevState, props) => ({
      address: target
    }));
  }
  render() {
    if (this.state.isLoading) {
      return (
        <Loader
          sizeUnit={"px"}
          size={25}
          color={"rgb(207, 227, 227)"}
          loading={true}
        />
      );
    } else {
      return (
        <div className="water-comes-app-address">
          <Modal
            open={this.state.failed}
            closeOnEsc
            onClose={() => this.setState({ failed: false })}
          >
            <Col className="water-comes-app-data">
              <p>
                Der opstod en fejl under beregningen. Prøv igen ved at
                genopfriske siden. Virker det ikke, kan fejlen skyldes et
                teknisk problem hos en af de leverandører, vi henter oplysninger
                fra.
              </p>
            </Col>
          </Modal>

          <h2>Tjek risikoen for, at din bolig bliver oversvømmet</h2>

          <p>
            Tast din adresse og få indblik i, hvad der kan påvirke din boligs
            risiko for oversvømmelse ved skybrud eller stormflod. Du får også
            konkrete råd til, hvad du kan gøre for at sikre din bolig.
          </p>

          <p>
            Vær opmærksom på, at resultatet er baseret på offentligt
            tilgængelige data, som kan være behæftet med usikkerheder.{" "}
            <button
              className="btn btn-link"
              onClick={this.props.toggleDataModal}
            >
              Læs mere om datagrundlaget her.
            </button>
          </p>

          <Form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <Row>
              <Col md={{ size: "9" }} sm={"8"}>
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
              <Col md={{ size: "3" }} sm={"4"} className="align-right">
                <Button color="primary">Tjek risiko</Button>
              </Col>
            </Row>
          </Form>
          <p className="small">
            Risikoberegneren egner sig ikke til lejligheder. Vi gemmer ikke din
            adresse. Læs vores{" "}
            <a
              href="https://www.bolius.dk/cookiepolitik-og-retningslinjer-paa-bolius-platforme"
              target="_blank"
              rel="noopener noreferrer"
            >
              cookiepolitik og øvrige retningslinjer
            </a>
            .
          </p>
        </div>
      );
    }
  }
}
