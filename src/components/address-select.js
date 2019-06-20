import React from "react";
import { Button } from "./button";
import "../styles/water_widget_dawa.css";

export default class AdressSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      address: "",
      dawa: require("dawa-autocomplete2")
    };
  }

  handleChange(event) {
    var target = event.target.value;
    var inputElm = document.getElementById("dawa-autocomplete-input");
    this.setState((prevState, props) => ({
      address: target
    }));

    var updateRes = this.props.setAddress;
    this.state.dawa.dawaAutocomplete(inputElm, {
      select: function(dawa_res) {
        updateRes(dawa_res);
      }
    });
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#5ab3dd",
          padding: "10px",
          fontSize: "20px"
        }}
      >
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignContent: "stretch",
              alignItems: "center"
            }}
          >
            <div
              className="autocomplete-container"
              style={{
                width: "70%",
                flexGrow: "2",
                margin: "5px"
              }}
            >
              <input
                style={{
                  borderRadius: "5px",
                  height: "2em",
                  border: "0px",
                  paddingLeft: "10px"
                }}
                value={this.state.address}
                onChange={this.handleChange}
                id="dawa-autocomplete-input"
                placeholder="Indtast din adresse...."
              />
            </div>
            <div style={{ flexGrow: "1", margin: "5px" }}>
              <Button style={{ width: "100%" }}>TJEK RISIKO</Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
