import React from "react";
import MapBox from "../components/map-box.js";
import Recommendations from "./recom.js";
import ActionHandler from "./action-handler.js";
import ApartmentBox from "../components/apartment-box.js";

export default class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.setActions = this.setActions.bind(this);
    this.state = { actions: [], showRes: false };
    this.topRef = React.createRef();
  }

  setActions(actions) {
    this.setState({ actions: actions, showRes: true });
  }

  componentDidMount() {
    // Scroll down by xxx pixels depending on window width
    // (to get approx. device perspective)
    // and only if address will not be out of sight on scroll
    let y = window.innerWidth < 800 ? 100 : 200,
      scrollFromY = 300;

    // Get current y position off address on page
    var elements = document.getElementsByClassName("map-address-reset"),
      elem =
        elements !== undefined && elements[0] !== undefined
          ? elements[0]
          : null,
      rect = elem !== null ? elem.getBoundingClientRect() : null;

    // Don't scroll unless shown address is at least <scrollFromY> pixels down
    if (rect !== null && rect !== undefined && rect.y !== undefined) {
      if (parseInt(rect.y) > scrollFromY) {
        window.scrollBy(0, y);
      }
    }
  }

  render() {
    let dangers = this.props.dangers;
    const basementSet =
      dangers.high.includes("basement") ||
      dangers.low.includes("basement") ||
      dangers.medium.includes("basement");
    if (!basementSet) {
      if (this.props.address.has_basement) {
        dangers.high.includes("lavning")
          ? dangers.high.push("basement")
          : dangers.medium.push("basement");
      } else {
        dangers.low.push("basement");
      }
    }
    return (
      <div ref={this.topRef}>
        {this.props.address.appartment ? <ApartmentBox /> : ""}
        <MapBox
          className="resultpage-mapbox"
          address={this.props.address.text}
          reset={this.props.reset}
        />
        <ActionHandler
          dangers={dangers}
          shown={false}
          setActions={this.setActions}
        />
        {!this.state.showRes ? (
          <div />
        ) : (
          <Recommendations
            basement={this.props.address.has_basement}
            filter={this.state.actions}
          />
        )}
      </div>
    );
  }
}
