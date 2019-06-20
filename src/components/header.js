import React from "react";
import styled from "styled-components";
import water_header from "../assets/water_header.png";

export default class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          background: `url(${water_header})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          color: "white",
          height: "300px",
          textAlign: "center",
          paddingTop: "100px",
          marginBottom: "10px"
        }}
      >
        <h1
          style={{
            textTransform: "uppercase",
            fontSize: "50px",
            fontWeight: "300"
          }}
        >
          TJEK DIN RISIKO
        </h1>
      </div>
    );
  }
}
