import React from "react";

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
      <div className="ww-address-input">
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="autocomplete-container">
            <input
              value={this.state.address}
              onChange={this.handleChange}
              id="dawa-autocomplete-input"
              placeholder="Indtast din adresse...."
            />
          </div>
          <div>
            <button>TJEK RISIKO</button>
          </div>
        </form>
      </div>
    );
  }
}
