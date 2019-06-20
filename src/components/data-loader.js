import React from "react";
import { BeatLoader as Loader } from "react-spinners";

export default class DataLoader extends React.Component {
  componentDidMount() {
    async function url_to_json(url) {
      const response = await fetch(url, { mode: "cors" });
      let json = await response.json();
      var bbr_info;

      bbr_info = await fetch(
        "https://ml.bolius.dk/bbr/" + encodeURI(json.adressebetegnelse)
      );

      let bbr_json = await bbr_info.json();

      json["has_basement"] = bbr_json.basement_area > 0;
      json["appartment"] = bbr_json.type === "story";
      json["bbr"] = bbr_json;
      json["x"] = json.adgangsadresse.adgangspunkt.koordinater[0];
      json["y"] = json.adgangsadresse.adgangspunkt.koordinater[1];
      let resp = await fetch(
        `https://ml.bolius.dk/waterComes/${json.x}/${json.y}`
      );
      let dangers = await resp.json();
      console.log("recived");
      console.log(dangers);
      json["dangers"] = dangers;
      return json;
    }
    url_to_json(this.props.dawaData.data.href).then(data => {
      console.log(data);
      let res = {
        appartment: data["appartment"],
        text: data.adressebetegnelse,
        has_basement: data.has_basement,
        bolig: data.adgangsadresse.bebyggelser[0],
        bbr: data["bbr"],
        x: data.adgangsadresse.adgangspunkt.koordinater[0],
        y: data.adgangsadresse.adgangspunkt.koordinater[1],
        dangers: data["dangers"]
      };
      this.props.setData(res);
    });
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "40px"
        }}
      >
        <Loader
          sizeUnit={"px"}
          size={25}
          color={"rgb(94, 179, 219)"}
          loading={true}
        />
      </div>
    );
  }
}
