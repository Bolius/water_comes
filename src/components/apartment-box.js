import React from "react";

export default class ApartmentBox extends React.Component {
  render() {
    return (
      <div className="appartmentbox">
        <h5>Din adresse viser, at du bor i lejlighed.</h5>
        <p>
          Derfor er risikoberegningen kun gældende for kælderen. Husk stadig at
          lukke dine vinduer og evt. altandør.
        </p>
      </div>
    );
  }
}
