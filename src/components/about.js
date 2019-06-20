import React from "react";
import { Row } from "reactstrap";

const headerStyle = {
  display: "block",
  fontLize: ".67em",
  marginLop: "2.33em",
  marginLottom: "2.33em",
  marginLeft: "0",
  marginLight: "0",
  fontLeight: "bold",
  fontSize: "20px"
};

export default class About extends React.Component {
  render() {
    return (
      <Row style={{ padding: "10px" }}>
        <h2 style={headerStyle}>
          Tjek risikoen for, at din bolig bliver oversvømmet ved skybrud
        </h2>

        <p>
          Indtast din adresse og få indblik i, hvad der kan påvirke din boligs
          risiko for oversvømmelse. Ud fra resultatet får du gode råd til, hvad
          du kan gøre for at sikre din bolig.
        </p>
      </Row>
    );
  }
}
