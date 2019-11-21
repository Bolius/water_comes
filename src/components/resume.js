import React from "react";
import RisksDB from "../risks.json";
import trackEvent from "../action_logger.js";

export default class Resume extends React.Component {
  logCLick(factor) {
    trackEvent({
      description: `Faneblad: ${this.props.active}`,
      eventLabel: `Resume: ${factor.link.title}`,
      cloudbirstDimension: this.props.dangers.rain_threat,
      floodDimension: this.props.dangers.flood.risk
    });
  }
  floodResults() {
    let factors = [];
    factors.push({
      text: RisksDB.results[this.props.active][this.props.threatLevel],
      link:
        this.props.threatLevel !== "low"
          ? RisksDB.results[this.props.active].links[0]
          : undefined
    });
    if (this.props.threatLevel !== "low") {
      factors.push({
        text: "",
        link: RisksDB.results[this.props.active].links[1]
      });
    }

    return factors.map((factor, i) => (
      <div>
        <p key={i} dangerouslySetInnerHTML={{ __html: factor.text }} />
        {factor.link !== undefined ? (
<<<<<<< Updated upstream
          <p className="inline-links-in-article">
            <span className="category orange">Læs også: </span>
            <a href={factor.link.url} target="_blank" rel="noopener noreferrer">
=======
          <p class="inline-links-in-article">
            <span class="category orange">Læs også: </span>
            <a
              onClick={factor => this.logCLick(factor)}
              href={factor.link.url}
              target="_blank"
            >
>>>>>>> Stashed changes
              {factor.link.title}
            </a>
          </p>
        ) : (
          ""
        )}
      </div>
    ));
  }

  rainResults() {
    let factors = [];
    factors.push({
      text: RisksDB.results[this.props.active][this.props.threatLevel],
      link:
        this.props.threatLevel === "low"
          ? RisksDB.results[this.props.active].link
          : undefined
    });

    if (this.props.dangers.basement.risk === "high") {
      factors.push(RisksDB.results.basement);
    }

    if (this.props.dangers.hollowing.risk === "high") {
      factors.push(RisksDB.results.hollwing);
    }

    if (this.props.dangers.conductivity.risk !== "low") {
      factors.push({
        text:
          RisksDB.results.conductivity[this.props.dangers.conductivity.risk],
        link: RisksDB.results.conductivity.link
      });
    }
    if (this.props.dangers.fastningDegree.risk !== "low") {
      factors.push({
        text:
          RisksDB.results.fastningDegree[
            this.props.dangers.fastningDegree.risk
          ],
        link: RisksDB.results.fastningDegree.link
      });
    }

    return factors.map((factor, i) => (
      <div>
        <p key={i} dangerouslySetInnerHTML={{ __html: factor.text }} />
        {factor.link !== undefined ? (
          <p className="inline-links-in-article">
            <span className="category orange">Læs også: </span>
            <a href={factor.link.url} target="_blank" rel="noopener noreferrer">
              {factor.link.title}
            </a>
          </p>
        ) : (
          ""
        )}
      </div>
    ));
  }

  render() {
    return (
      <div className="water-comes-app-taken">
        <h3>Det kan du gøre</h3>
        {this.props.active === "skybrud"
          ? this.rainResults()
          : this.floodResults()}

        <div className="frame-layout-1">
          <p>
            Når først DMI har varslet skybrud eller stormflod, er det begrænset,
            hvad du kan gøre. Men du kan hente vores overskuelige tjekliste med
            gode råd for at se, hvad du kan gøre her og nu.</p>
          <p className="inline-links-in-article">
            <span className="category orange">Læs også: </span>
            <a href="https://www.bolius.dk/tjekliste-saadan-goer-du-naar-vandet-kommer-udefra-77128/"
                target="_blank" rel="noopener noreferrer"
              >
                Hent tjeklisten her
            </a>
          </p>
          <p>
            Beregnerens vurdering er vejledende og kan aldrig erstatte en faglig
            gennemgang, der omfatter alle din boligs konkrete forhold.
          </p>
        </div>
      </div>
    );
  }
}
