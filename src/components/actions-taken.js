import React from "react";
import Action from "./action.js";

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
      <div className="ww-action-container">
        <h5>Hvad har du gjort for at forbygge oversvømmelse?</h5>
        <p>
          Fortæl os, hvad du selv har gjort for at forebygge oversvømmelse. Sæt
          hak ud for de ting, du har fået lavet. Har du intet gjort, kan du blot
          trykke ’Vis anbefalinger’
        </p>
        <div className="ww-action-container">
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
        <button onClick={this.handleChange}>Vis Anbefalinger</button>
      </div>
    );
  }
}
