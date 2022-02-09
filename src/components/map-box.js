import React from "react";
import { Row, Col, Button } from "reactstrap";
import ApartmentBox from "./apartment-box.js";

export default class MapBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {mapUrl: ""}
  }

  componentDidMount() {
    // Params for image rendering
    const boxSizeX = 58
    const boxSizeY = 37
    const scalar = 1.5

    // Fetch coordinates of address
    fetch('https://api.dataforsyningen.dk/adresser?q=' + this.props.address + '&struktur=mini&srid=25832')
      .then(response => response.json())
      .then(data => {
        // Create bounding box for address
        let x = data[0]["x"]
        let y = data[0]["y"]
    
        let minX = x - boxSizeX / scalar
        let minY = y - boxSizeY / scalar
        let maxX = x + boxSizeX / scalar
        let maxY = y + boxSizeY / scalar
        let bbox = [minX,minY,maxX,maxY].toString();
        
        // Fetch actual satelite image
        const mapParams = {
          username: process.env.REACT_APP_DATAFORDELER_USER,
          password: process.env.REACT_APP_DATAFORDELER_PASS,
          SERVICE: "WMS",
          VERSION: "1.3.0",
          REQUEST: "GetMap",
          BBOX: bbox,
          CRS: "EPSG:25832",
          WIDTH:580,
          HEIGHT: 370,
          FORMAT: "image/jpeg",
          DPI: 96,
          MAP_RESOLUTION: 96,
          FORMAT_OPTIONS: "dpi:96",
          Layers: "orto_foraar",
          styles: ""
        }
        
        var mapUrl = "https://services.datafordeler.dk/GeoDanmarkOrto/orto_foraar/1.0.0/WMS?";
        for (let [key, value] of Object.entries(mapParams)) {
          mapUrl += `${key}=${encodeURI(value)}&`;
        }
        mapUrl = mapUrl.substring(0, mapUrl.length - 1);
        this.setState({mapUrl})
      });
  }

  render() { 
    return (
      <div className="water-comes-app-resume">
        <h2>Risikovurdering af din bolig</h2>
        <Row>
          <Col sm={{ size: "6" }}>
            <img src={this.state.mapUrl} alt="Bolig Kort" className="map-image" />
            <address>{this.props.address}</address>
            <Button color="link" onClick={this.props.reset}>
              Skift adresse
            </Button>
          </Col>
          <Col sm={{ size: "6" }}>
            {this.props.isApartment ? <ApartmentBox /> : ""}
            <p>
              Nedenfor kan du få et indtryk af, hvor udsat din bolig er ved
              oversvømmelse, når vandet kommer udefra. Du kan også få gode råd
              til, hvordan du bedst forebygger oversvømmelse i fremtiden.
            </p>
            <p>
              Vær opmærksom på, at resultatet er vejledende og kan være behæftet
              med usikkerheder.{" "}
              <button className="btn btn-link" onClick={this.props.showModal}>
                Læs mere om datagrundlaget her.
              </button>
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
