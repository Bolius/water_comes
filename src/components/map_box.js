import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import "../styles/map-box.css"

export default class MapBox extends React.Component {
  render(){
    const mapParams = {
      'center' : this.props.address,
      'zoom': 18,
      'size': "600x450",
      'maptype': "hybrid",
      'markers': `color:0x58B1DD|location:${this.props.address}`,
      'key': process.env.REACT_APP_GOOGLE_MAPS_KEY,
      'scale': 2,
      'language': 'danish',
      'region': 'dk'
    }
    let mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?'
    for (let [key, value] of Object.entries(mapParams)) {
      mapUrl += `${key}=${encodeURI(value)}&`
    }
    mapUrl = mapUrl.substring(0, mapUrl.length - 1)
    return(
      <Container>
        <Row className="address-box">
          <Col sm={{ size: 9}} >
            <h5>{ this.props.address } </h5>
          </Col>
          <Col sm={{ size: 3}} className="btn-col">
            <Button color="info" size="sm">Skift addresse</Button>
          </Col>
        </Row>
        <Row className="map-row">
          <Col sm={{ size: '6' }} className="map-col">
            <img className="rounded img-fluid" src={mapUrl} alt="Kort over din bolig"/>
          </Col>
          <Col sm={{ size: '6' }}>
          <h5>Her er din risikovurdering</h5>
          <p> Nedenfor kan du få et indtryk af, hvor udsat din bolig er ved oversvømmelse efter
          skybrud eller stormflod. Når du har oplyst, hvad du selv har gjort for at undgå oversvømmelse,
          får du en række konkrete anbefalinger til, hvor du kan sætte mest effektivt ind.</p>
          </Col>
        </Row>
     </Container>
    )
  }
}
