import React from 'react';
import { GoogleApiWrapper, InfoWindow, Marker, Map } from 'google-maps-react';
import "../styles/header.css"
import Geocode from "react-geocode";
import { Container, Row, Col, Button } from 'reactstrap'

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.

export class MapBox extends React.Component {
  constructor(props) {
    super(props);
    this.updateLatLon = this.updateLatLon.bind(this);
    this.state = {
      address: this.props.address,
      lat: 0,
      lon: 0
    };
  }

  updateLatLon(){
    Geocode.fromAddress(this.state.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({ lat: lat, lon:lng })
        console.log(this.state.lat)
      },
      error => {
        console.error(error);
      }
    )
  }

  componentWillMount() {
  //  Geocode.setApiKey(" ");
    Geocode.enableDebug();
    this.updateLatLon();

  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(this.props.google && this.state)
      .then(data => this.setState({ isLoading: false }));
  }

  render(){
    const { lat, lon, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return(
      <Container>
        <Row style={{backgroundColor: "#69B3DF", height:"50px", marginTop: "50px", marginBottom: "30px"}}>
          <Col style={{ padding: "10px" }}>
            <h5>{ this.state.address } </h5>
          </Col>

          <Col md={{ span: 3, offset: 3 }} style={{ padding: "5px" }}>
            <Button color="info" size="sm">Skift addresse</Button>
          </Col>

        </Row>
        <Row style={{ height:"500px", margin:"auto" }}>
          <Col sm={{ size: '6' }}>
            <Map
              google={this.props.google}
              zoom={18}
              style={{ width: '90%', height: "80%" }}
              initialCenter={{ lat: lat, lng: lon }}
            >
              <Marker name={ this.state.address }/>
              <InfoWindow visible={ true }>
                <div>
                  <h4>{ this.state.address }</h4>
                </div>
              </InfoWindow>
            </Map>
          </Col>
          <Col sm={{ size: '6' }}>
          Tekst
          </Col>
        </Row>
     </Container>
    )
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
    })
)(MapBox);
