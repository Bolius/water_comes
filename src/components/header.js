import React from "react";
import styled from "styled-components";
import water_header from "../assets/water_header.png";

const StyledHeader = styled.div`
  background: url(${water_header});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: white;
  height: 300px;
  text-align: center;
  padding-top: 100px;
  margin-bottom: 10px;
`;

const HeaderTitle = styled.h1`
  text-transform: uppercase;
  font-size: 50px;
  font-weight: 300;
`;

export default class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <HeaderTitle>TJEK DIN RISIKO</HeaderTitle>
      </StyledHeader>
    );
  }
}
