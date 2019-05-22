import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap'
import '../styles/tab-header.css'

export default class TabHeader extends React.Component {
  render() {
    return (
      <Nav tabs className="tab">
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
    );
  }
}
