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

  scrollDown() {
    // Get first div tag to calculate from
    var h3Elements = document.getElementsByClassName("twocol");
    if (h3Elements !== undefined) {
      var h3Element =
          h3Elements !== undefined &&
          h3Elements.length !== undefined &&
          h3Elements.length > 0
            ? h3Elements[0]
            : null,
        offsetTop = -1,
        headerHeightAttr =
          document.getElementsByClassName("header") !== undefined &&
          document.getElementsByClassName("header")[0] !== undefined
            ? document
                .getElementsByClassName("header")[0]
                .getBoundingClientRect().height
            : 0,
        // eslint-disable-next-line
        headerHeight =
          headerHeightAttr !== undefined ? parseInt(headerHeightAttr) : 0;

      if (h3Element !== null) {
        // We have an element, now let's get offsetTop
        offsetTop = h3Element.getBoundingClientRect().top;

        // Check whether user has already scrolled down
        if (offsetTop >= window.pageYOffset) {
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      }
    }
  }

  componentDidMount() {
    // Scroll down by 100 pixels
    let y = window.innerWidth < 800 ? 100 : 200;    
    window.scrollBy(0, y);
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
          class="resultpage-mapbox"
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
