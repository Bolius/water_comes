import React from "react";
import { Col } from "reactstrap";
import LinkList from "./link-list.js";
import Modal from "react-responsive-modal";

export default class DataModal extends React.Component {
  render() {
    return (
      <Modal
        open={this.props.showModal}
        closeOnEsc
        onClose={this.props.toggleDataModal}
      >
        <Col className="water-comes-app-data">
          <p>
            Vi ved, at der i fremtiden kommer flere og voldsommere vejrhændelser
            som fx skybrud. Vi ved også, at det kan være svært at forholde sig
            til et varsel om skybrud, hvis man ikke ved, hvor udsat ens bolig
            er.
          </p>

          <p>
            Bolius er uvildige, og vores anbefalinger hviler på offentligt
            tilgængelige data, som vi blandt andet indhenter gennem Bygnings- og
            Boligregistret (BBR). Du skal være opmærksom på, at de offentlige
            data kan være behæftet med usikkerheder.
          </p>

          <p>
            Data kan alene anvendes til at give en overordnet vurdering. Vi
            anbefaler, at du indhenter yderligere informationer, før du fx
            iværksætter tiltag på baggrund af forventninger om oversvømmelser.
            En god ide kan være at bestille et klimatjek, der tager udgangspunkt
            i din boligs konkrete forhold og beliggenhed.
          </p>

          <h4>Vores data er baseret på data fra følgende kilder:</h4>
          <LinkList />
        </Col>
      </Modal>
    );
  }
}
