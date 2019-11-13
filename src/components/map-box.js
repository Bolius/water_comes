import React from "react";
import { Row, Col, Button } from "reactstrap";

export default class MapBox extends React.Component {
  render() {
    const mapParams = {
      center: this.props.address,
      zoom: 18,
      size: "600x225",
      maptype: "hybrid",
      markers: `color:0x58B1DD|location:${this.props.address}`,
      key: process.env.REACT_APP_GOOGLE_MAPS_KEY,
      scale: 1,
      language: "danish",
      region: "dk"
    };
    let mapUrl = "https://maps.googleapis.com/maps/api/staticmap?";
    for (let [key, value] of Object.entries(mapParams)) {
      mapUrl += `${key}=${encodeURI(value)}&`;
    }
    mapUrl = mapUrl.substring(0, mapUrl.length - 1);
    return (
      <div>
        <div className="water-comes-app-address">
          <h2>Risikovurdering af din bolig</h2>
        </div>
        <div className="water-comes-app-resume">
          <Row>
            <Col sm={{ size: "6" }}>
              <img src={mapUrl} alt="Bolig Kort" className="map-image" />
              <address>{this.props.address}</address>
              <Button color="link" onClick={this.props.reset}>
                Skift adresse
              </Button>
            </Col>
            <Col sm={{ size: "6" }}>
              <p>
                Nedenfor kan du få et indtryk af, hvor udsat din bolig er ved
                oversvømmelse efter skybrud. Når du har oplyst, hvad du selv har
                gjort for at undgå oversvømmelser, får du en række anbefalinger
                til nye tiltag.
              </p>

              <p>
                Vær opmærksom på, at din risiko er baseret på offentligt
                tilgængelige data, som kan være behæftet med usikkerheder. Læs
                mere her.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
