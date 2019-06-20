import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "./button.js";

export default class MapBox extends React.Component {
  getMapUrl(address) {
    const mapParams = {
      center: address,
      zoom: 18,
      size: "600x225",
      maptype: "hybrid",
      markers: `color:0x58B1DD|location:${address}`,
      key: process.env.REACT_APP_GOOGLE_MAPS_KEY,
      scale: 1,
      language: "danish",
      region: "dk"
    };
    let mapUrl = "https://maps.googleapis.com/maps/api/staticmap?";
    for (let [key, value] of Object.entries(mapParams)) {
      mapUrl += `${key}=${encodeURI(value)}&`;
    }
    return mapUrl.substring(0, mapUrl.length - 1);
  }

  render() {
    return (
      <div>
        <div
          ref={this.mapRef}
          style={{
            backgroundColor: "#59b2dd",
            color: "white",
            fontWeight: "800",
            marginBottom: "10px",
            display: "flex",
            alignContent: "stretch",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <div
            style={{
              width: "70%",
              fontSize: "1.5em",
              flexGrow: "2",
              margin: "5px"
            }}
          >
            {this.props.address}{" "}
          </div>
          <div style={{ flexGrow: "1", margin: "5px", textAlign: "center" }}>
            <Button onClick={this.props.reset}>Skift adresse</Button>
          </div>
        </div>

        <div
          style={{
            marginBottom: "2em",
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap"
          }}
        >
          <img
            className="img-fluid"
            src={this.getMapUrl(this.props.address)}
            alt="Bolig Kort"
            style={{ flex: 1, flexBasis: "20%" }}
          />
          <div
            style={{
              flex: 1,
              paddingLeft: "20px"
            }}
          >
            <p style={{ fontSize: "1.5em" }}>Her er din risikovurdering</p>
            <p>
              Nedenfor kan du få et indtryk af, hvor udsat din bolig er ved
              oversvømmelse efter skybrud. Når du har oplyst, hvad du selv har
              gjort for at undgå oversvømmelse, får du en række konkrete
              anbefalinger til, hvor du kan sætte mest effektivt ind.
            </p>
            Du kan klikke på de enkelte punkter for at blive klogere på, hvordan
            de påvirker risikoen for oversvømmelse.
          </div>
        </div>
      </div>
    );
  }
}
