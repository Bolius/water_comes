import React from "react";
import Action from "./action.js";
import { Button } from "./button.js";

const headerStyle = {
  fontSize: "1.3em",
  fontWeight: "500",
  marginBottom: "0.5em",
  marginTop: "20px",
  textAlign: "center"
};

export default class ActionsTaken extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setKey = this.setKey.bind(this);
    this.state = {
      actionsTaken: [],
      recomShown: false
    };
  }

  setKey(key) {
    let newKeyList = this.state.actionsTaken.includes(key)
      ? this.state.actionsTaken.filter(i => {
          return i !== key;
        })
      : this.state.actionsTaken.concat(key);
    this.setState({ actionsTaken: newKeyList, recomShown: false });
  }

  handleChange() {
    if (this.state.recomShown) {
      this.props.setActions(this.state.actionsTaken);
    } else {
      this.props.setActions(this.state.actionsTaken);
      this.setState(state => ({ recomShown: true }));
    }
  }

  render() {
    return (
      <div>
        <div style={headerStyle}>
          Hvad har du gjort for at forbygge oversvømmelse?
        </div>
        <div style={{ width: "90%", margin: "auto", textAlign: "center" }}>
          Fortæl os, hvad du selv har gjort for at forebygge oversvømmelse. Sæt
          hak ud for de ting, du har fået lavet. Har du intet gjort, kan du blot
          trykke ’Vis anbefalinger’
        </div>
        <div style={{ width: "70%", margin: "auto" }}>
          {this.props.actions.map(item => (
            <Action
              task={item.action}
              key={item.id}
              keyId={item.id}
              setKey={this.setKey}
              handleChange={this.handleChange}
              recomShown={this.state.recomShown}
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={this.handleChange}
            style={{ marginBottom: "20px", marginRight: "20px" }}
          >
            Vis Anbefalinger
          </Button>
        </div>
      </div>
    );
  }
}
