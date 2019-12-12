import React, { useState } from "react";

export default function Risk(props) {
  const [showDescription, setShowDescription] = useState(false);
  const toggleDescription = () => {
    props.logClick();
    setShowDescription(!showDescription);
  };
  const header = (
    <header onClick={toggleDescription}>
      {threatImage(props.threatLevel)}
      <h4>{props.title}</h4>
      {showDescription ? (
        <i className="icon-remove-24">remove</i>
      ) : (
        <i className="icon-add-24">add</i>
      )}
    </header>
  );

  const description = (
    <div>
      {renderText(props.description)}
      {renderMap(props.map)}
    </div>
  );
  return (
    <div className="water-comes-app-risk">
      {header}
      <div className="description">{showDescription ? description : ""}</div>
    </div>
  );
}

function renderMap(map) {
  if (map !== undefined) {
    return (
      <div className="map-wrapper">
        <img src={map} alt="map" />
      </div>
    );
  }
}

function threatImage(threatLevel) {
  switch (threatLevel) {
    case "high":
      return <span className="danger icon-high-risc">high risc</span>;
    case "medium":
      return <span className="danger icon-change_history-24">medium risc</span>;
    case "low":
      return <span className="danger icon-low-risc">low risc</span>;
    default:
      throw new `Invalid threatLevel: ${threatLevel}`();
  }
}

function renderText(text) {
  return text
    .split("\n")
    .map((t, i) => <p key={i} dangerouslySetInnerHTML={{ __html: t }} />);
}
