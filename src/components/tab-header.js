import React from 'react';
import { Nav, NavItem as BootNavItem, NavLink as BootNavLink } from 'reactstrap'
import styled from 'styled-components';


const NavItem = styled(BootNavItem)`
  text-transform: uppercase;
  font-weight: 600;
  width: 50%;
  text-align: center;
`;

const NavLink = styled(BootNavLink)`
  width: 100%;
  background-color: ${props =>
    props.active ?
      "#DAEFF9 !important; color:#4B8BB9 !important" :
      "#F5F6F6 !important; padding-bottom: 5px; margin-left: 2px; margin-right: 2px;"
  };
`
const ActionDescriber = styled.div`
  padding-bottom: 20px;
  background-image: linear-gradient(#DCF0F9, #FFFFFF);
`;

export default class TabHeader extends React.Component {
  render() {
    return (<div>
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
      <ActionDescriber>
        Du kan klikke på de enkelte punkter for at blive klogere på, hvordan de påvirker risikoen for oversvømmelse.
      </ActionDescriber>
    </div>);
  }
}
