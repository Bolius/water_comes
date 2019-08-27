import React from "react";

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
        <div className="map-address-reset" ref={this.mapRef}>
          <h2>{this.props.address}</h2>
          <button onClick={this.props.reset}>Skift adresse</button>
        </div>
        <div className="row twocol">
          <div className="col">
            <img src={this.getMapUrl(this.props.address)} alt="Bolig Kort" />
          </div>

          <div className="col last">
            <h3 className="title-risc-assessment">
              Her er din risikovurdering
            </h3>
            <p>
              Nedenfor kan du få et indtryk af, hvor udsat din bolig er ved
              oversvømmelse efter skybrud. Når du har oplyst, hvad du selv har
              gjort for at undgå oversvømmelse, får du en række konkrete
              anbefalinger til, hvor du kan sætte mest effektivt ind.
            </p>
            <p>
              Du kan klikke på de enkelte punkter for at blive klogere på,
              hvordan de påvirker risikoen for oversvømmelse.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
