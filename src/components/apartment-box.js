import React from "react";
import { Container as BContainer } from "reactstrap";
import styled from "styled-components";

const Container = styled(BContainer)`
  background-color: #59b2dd;
  color: white;
  font-weight: 800;
  text-align: center;
  margin: 10px;
  vertical-align: middle;
  padding: 10px;
`;

export default class ApartmentBox extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: "20px" }}>
        <Container>
          <h5>Din adresse viser, at du bor i lejlighed.</h5>
          <p>
            Derfor er risikoberegningen kun gældende for kælderen. Husk stadig
            at lukke dine vinduer og evt. altandør.
          </p>
        </Container>
      </div>
    );
  }
}
