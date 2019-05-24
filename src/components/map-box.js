import React from 'react';
import { Container, Row, Col} from 'reactstrap'
import { Button } from './button.js'
import styled from 'styled-components';

const AddressBox = styled(Row)`
  background-color: #59B2DD;
  color: white;
  font-weight: 800;
  padding: 0.5em 1em;
`

const MapRow = styled(Row)`
  margin-top: 2em;
  margin-bottom: 2em;
`

export default class MapBox extends React.Component {
  render(){
    const mapParams = {
      'center' : this.props.address,
      'zoom': 18,
      'size': "600x450",
      'maptype': "hybrid",
      'markers': `color:0x58B1DD|location:${this.props.address}`,
      'key': process.env.REACT_APP_GOOGLE_MAPS_KEY,
      'scale': 1,
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
        <AddressBox>
          <Col sm={{ size: 9}} >
            <h5>{ this.props.address } </h5>
          </Col>
          <Col sm={{ size: 3}} className="text-right">
            <Button onClick={this.props.reset}>Skift addresse</Button>
          </Col>
        </AddressBox>
        <MapRow>
          <Col sm={{ size: '6' }} className="text-right">
            <img className="rounded img-fluid" src={mapUrl} alt="Bolig Kort"/>
          </Col>
          <Col sm={{ size: '6' }}>
          <h5>Her er din risikovurdering</h5>
          <p> Nedenfor kan du få et indtryk af, hvor udsat din bolig er ved oversvømmelse efter
          skybrud eller stormflod. Når du har oplyst, hvad du selv har gjort for at undgå oversvømmelse,
          får du en række konkrete anbefalinger til, hvor du kan sætte mest effektivt ind.</p>
          </Col>
        </MapRow>
     </Container>
    )
  }
}
