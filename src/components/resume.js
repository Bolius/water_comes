import React from "react";
import Risk from "../risks.json";

export default class Resume extends React.Component {
  floodResults() {
    return (
      <p>
        Vores offentligt tilgængelige oplysninger indikerer, at din bolig ligger{" "}
        {this.props.dangers.flood.groundHeight} meter over havets overflade.
        <p
          dangerouslySetInnerHTML={{
            __html: Risk.results.flood[this.props.dangers.flood.risk]
          }}
        />
      </p>
    );
  }

  rainResults() {
    let factors = [];
    switch (this.props.risk.factor) {
      case 4:
        factors.push(Risk.results[this.props.active].high);
        break;
      case 3:
        factors.push(Risk.results[this.props.active].medium);
        break;
      default:
        factors.push(Risk.results[this.props.active].low);
        break;
    }

    if (this.props.dangers.risks.high.includes("basement")) {
      factors.push(Risk.results.basement);
    }
    if (this.props.dangers.hollowing.risk === "high") {
      factors.push(Risk.results.hollwing);
    }

    if (this.props.dangers.conductivity.risk === "medium") {
      factors.push(Risk.results.conductivity.medium);
    }
    if (this.props.dangers.conductivity.risk === "high") {
      factors.push(Risk.results.conductivity.high);
    }

    if (this.props.dangers.fastningDegree.risk === "medium") {
      factors.push(Risk.results.fastningDegree.medium);
    }
    if (this.props.dangers.fastningDegree.risk === "high") {
      factors.push(Risk.results.fastningDegree.high);
    }

    return factors.map((factor, i) => (
      <div>
        <p key={i} dangerouslySetInnerHTML={{ __html: factor }} />
        {factor.link !== undefined ? (
          <p class="inline-links-in-article">
            <span class="category orange">Læs også: </span>
            <a href={factor.link.url} target="_blank">
              Link titel
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
        <h3>Resultater</h3>
        {this.props.active === "skybrud"
          ? this.rainResults()
          : this.floodResults()}

        <p>
          Når først DMI har varslet skybrud eller stormflod, er det begrænset,
          hvad du kan gøre. Men du kan hente{" "}
          <a
            taget="_blank"
            href="https://www.bolius.dk/tjekliste-saadan-goer-du-naar-vandet-kommer-udefra-77128/"
          >
            vores overskuelige tjekliste
          </a>{" "}
          med gode råd for at se, hvad du kan gøre her og nu. Beregnerens
          vurdering er vejledende. Ønsker du en vurdering, der tager
          udgangspunkt i alle boligens konkrete forhold, bør du kontakte en
          fagperson og arrangere en fysisk inspektion.
        </p>
      </div>
    );
  }
}
