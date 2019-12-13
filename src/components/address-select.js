import React from "react";
import { Row, Col, Input, Form, Button } from "reactstrap";
import { BeatLoader as Loader } from "react-spinners";
import * as Sentry from "@sentry/browser";
import * as dawa from "dawa-autocomplete2";

import constructQuery from "../graphQL_query.js";
import trackEvent from "../action_logger.js";
import computeRainRisk from "../helpers/rain_risk.js";
import backendLog from "../helpers/backendLog.js";
import Modal from "react-responsive-modal";
import getFloodData from "../helpers/get-flood-data.js";

export default class AdressSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

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
          getFloodData(dawa_res);
        }
      }
    );
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
