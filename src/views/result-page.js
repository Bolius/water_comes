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
    window.scrollTo({ top: this.topRef.current.offsetTop, behavior: "smooth" });
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
        <MapBox address={this.props.address.text} reset={this.props.reset} />
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
