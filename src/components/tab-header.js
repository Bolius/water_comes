import React from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap'
import '../styles/tab-header.css'

export default class TabHeader extends React.Component {
  render() {
    return (<div>
      <Nav tabs className="tab" >
        <NavItem className="tab-header">
          <NavLink
            id={this.props.tab === 'skybrud' ? 'active-tab' : 'inactive-tab'}
            onClick={() => { this.props.setTab('skybrud');}}
          >
            Skybrud
          </NavLink>
        </NavItem>
        <NavItem className="tab-header">
          <NavLink
            id={this.props.tab === 'stormflod' ? 'active-tab' : 'inactive-tab'}
            onClick={() => { this.props.setTab('stormflod');}}
          >
            Stormflod
          </NavLink>
        </NavItem>
      </Nav>
      <div className="action-describer">
        Nedenfor kan du få et indtrak af hvor sårbar din bolig er over for
        skybrud eller stormflod. Du kan klikke på de enkelte forhold for at
        blive klogere på hvordan de påvirker din risiko for oversvømmelse.
      </div>
    </div>);
  }
}
