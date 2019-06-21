import React from "react";
import RiskDescriber from "../components/risk-describer.js";
import ActionsTaken from "../components/actions-taken.js";
import Articles from "../articles.json";
import styled from "styled-components";

const ResRow = styled.div`
  margin: 2em 0em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: "12px";
  @media (min-width: 576px) {
    flex-wrap: wrap;
  }
  @media (min-width: 768px) {
    flex-wrap: wrap;
  }
  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }
  @media (min-width: 1200px) {
    flex-wrap: nowrap;
  }
`;

const ResCol = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 576px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export default class ActionHandler extends React.Component {
  constructor(props) {
    super(props);
    this.setTab = this.setTab.bind(this);
    this.state = {
      tab: "skybrud"
    };
  }

  setTab(tab) {
    let state = this.state;
    state.tab = tab;
    this.setState(state);
  }

  render() {
    const actions = Articles.actions;
    let riskAssement = "Mellem risiko";
    let riskNr = 3;
    const nrHighs = this.props.dangers.high.length;
    const nrLows = this.props.dangers.low.length;
    const nrMids = this.props.dangers.medium.length;
    if (nrHighs > nrLows && nrHighs > nrMids) {
      riskAssement = "Høj risiko";
      riskNr = 4;
    } else if (nrLows > nrHighs && nrLows > nrMids) {
      riskAssement = "Lav risiko";
      riskNr = 2;
    }
    return (
      <ResRow style={{ backgroundColor: "#DAEFF9" }}>
        <ResCol>
          <RiskDescriber
            risk={riskNr}
            riskText={riskAssement}
            type={this.state.tab}
            dangers={this.props.dangers}
          />
        </ResCol>
        <ResCol>
          <ActionsTaken actions={actions} setActions={this.props.setActions} />
        </ResCol>
      </ResRow>
    );
  }
}
