import React from "react";

export default class ApartmentBox extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: "20px",
          backgroundColor: "#59b2dd",
          color: "white",
          fontWeight: "800",
          textAlign: "center",
          margin: "10px",
          verticalAlign: "middle",
          padding: "10px"
        }}
      >
        <h5>Din adresse viser, at du bor i lejlighed.</h5>
        <p>
          Derfor er risikoberegningen kun gældende for kælderen. Husk stadig at
          lukke dine vinduer og evt. altandør.
        </p>
      </div>
    );
  }
}
