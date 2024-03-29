import { React, useState, useEffect } from "react";
import { Row, Col, Input, Form, Button } from "reactstrap";
// import { BeatLoader } from "react-spinners";
import * as dawaModule from "dawa-autocomplete2";
import Modal from "react-responsive-modal";
import getFloodData from "../data-handlers/get-flood-data.js";

export default function AdressSelect(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [dataFailed, setDataFailed] = useState(false);
  const [inputAddress, setInputAddress] = useState("");
  const [dawa, setDawa] = useState(dawaModule);
  let handle_dawa_resp = bbr_id => {
    setIsLoading(true);
    getFloodData(bbr_id, resp => {
      if (resp.failed) {
        setDataFailed(true);
        setIsLoading(false);
        setInputAddress("");
        setDawa(dawaModule);
      } else {
        props.setData(resp);
      }
    });
  };

  useEffect(() => {
    if (!isLoading) {
      dawa.dawaAutocomplete(
        document.getElementById("dawa-autocomplete-input"),
        {
          select: dawa_resp => handle_dawa_resp(dawa_resp.data.id)
        }
      );
    }
    // Check if id is set in query param
    const params = window.location.search.split("&");
    for (var param of params) {
      if (param.includes("unadr_bbrid=")) {
        const unit_bbr = param.split("=")[1];
        handle_dawa_resp(unit_bbr);
      }
    }
  });

  return isLoading ? (
    <div className="water-comes-app-address">
      <h2>Tjek risikoen for, at din bolig bliver oversvømmet</h2>
      <p>
        Tast din adresse og få indblik i, hvad der kan påvirke din boligs risiko
        for oversvømmelse ved skybrud eller stormflod. Du får også konkrete råd
        til, hvad du kan gøre for at sikre din bolig.
      </p>
      <p>
        Vær opmærksom på, at resultatet er baseret på offentligt tilgængelige
        data, som kan være behæftet med usikkerheder.{" "}
        <button className="btn btn-link" onClick={props.toggleDataModal}>
          Læs mere om datagrundlaget her.
        </button>
      </p>
      <Modal open={dataFailed} closeOnEsc onClose={() => setDataFailed(false)}>
        <Col className="water-comes-app-data">
          <p>
            Der opstod en fejl under beregningen. Prøv igen ved at genopfriske
            siden. Virker det ikke, kan fejlen skyldes et teknisk problem hos en
            af de leverandører, vi henter oplysninger fra.
          </p>
        </Col>
      </Modal>
      <div className="loader" style={{ textAlign: "center" }}>
        
      </div>
    </div>
  ) : (
    <div className="water-comes-app-address">
      <h2>Tjek risikoen for, at din bolig bliver oversvømmet</h2>
      <p>
        Tast din adresse og få indblik i, hvad der kan påvirke din boligs risiko
        for oversvømmelse ved skybrud eller stormflod. Du får også konkrete råd
        til, hvad du kan gøre for at sikre din bolig.
      </p>
      <p>
        Vær opmærksom på, at resultatet er baseret på offentligt tilgængelige
        data, som kan være behæftet med usikkerheder.{" "}
        <button className="btn btn-link" onClick={props.toggleDataModal}>
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
                value={inputAddress}
                onChange={event => {
                  setInputAddress(event.target.value);
                }}
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
      <Modal open={dataFailed} closeOnEsc onClose={() => setDataFailed(false)}>
        <Col className="water-comes-app-data">
          <p>
            Der opstod en fejl under beregningen. Prøv igen ved at genopfriske
            siden. Virker det ikke, kan fejlen skyldes et teknisk problem hos en
            af de leverandører, vi henter oplysninger fra.
          </p>
        </Col>
      </Modal>
    </div>
  );
}

