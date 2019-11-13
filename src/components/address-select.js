import React from "react";
import { Row, Col, Input, Form, Button } from "reactstrap";
import { BeatLoader as Loader } from "react-spinners";
import constructQuery from "../graphQL_query.js";

export default class AdressSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
    this.state = {
      isLoading: false,
      address: "",
      finalAddress: "",
      dawa: require("dawa-autocomplete2")
    };
  }

  async getData(dawa_res) {
    this.setState({ isLoading: !this.state.isLoading });
    let kvhx = await fetch(dawa_res.data.href)
      .then(resp => resp.json())
      .then(data => data.kvhx);

    const houseData = await fetch(process.env.REACT_APP_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: constructQuery(kvhx)
    })
      .then(response => response.json())
      .then(data => data.data.house);

    console.log(houseData);
    // Make this loadable:
    let dangers = {
      risks: {
        medium: [],
        high: ["ledeevne", "bebyggelse"],
        low: ["lavning"]
      },
      flood: {
        groundHeight: 7.6,
        risk: "low",
        floodLowerLimit: 200.0,
        floodMediumLimit: 300.0,
        floodHighLimit: 400.0
      },
      hollowing: {
        areaPercentage: 11,
        image: "image",
        housePercentage: 0
      },
      fastningDegree: {
        housePercentage: 47,
        image: "image",
        areaPercentage: 49
      },
      coundictivity: 98.8
    };
    let result = await {
      isApartment: houseData.bbrInfo.propType === "Etageboliger",
      hasBasement: houseData.bbrInfo.hasBasement,
      text: houseData.bbrInfo.address,
      x: houseData.bbrInfo.x,
      y: houseData.bbrInfo.y,
      dangers: dangers
    };
    this.props.setData(result);
  }

  handleChange(event) {
    var target = event.target.value;
    this.setState((prevState, props) => ({
      address: target
    }));
    var selectHandler = this.getData; // Hack: this. changes meaning in call
    this.state.dawa.dawaAutocomplete(
      document.getElementById("dawa-autocomplete-input"),
      {
        select: selectHandler
      }
    );
  }
  render() {
    if (this.state.isLoading) {
      return (
        <Loader
          sizeUnit={"px"}
          size={25}
          color={"rgb(94, 179, 219)"}
          loading={true}
        />
      );
    } else {
      return (
        <div className="water-comes-app-address">
          <Form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <Row>
              <Col md={{ size: "9" }} sm={"8"}>
                <div className="autocomplete-container">
                  <Input
                    type="search"
                    value={this.state.address}
                    onChange={this.handleChange}
                    id="dawa-autocomplete-input"
                    placeholder="Indtast din adresse...."
                  />
                </div>
              </Col>
              <Col md={{ size: "3" }} sm={"4"} className="align-right">
                <Button color="primary">Tjek risiko</Button>
              </Col>
            </Row>
          </Form>
        </div>
      );
    }
  }
}
