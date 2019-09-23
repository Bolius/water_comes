import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


export default class TabHeader extends React.Component {
  render() {
    return (
      <Nav tabs className="tab" >
        <NavItem>
          <NavLink
            active={this.props.tab === 'skybrud'}
            onClick={() => { this.props.setTab('skybrud');}}
          >
            Skybrud
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={this.props.tab === 'stormflod'}
            onClick={() => { this.props.setTab('stormflod');}}
          >
            Stormflod
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}
