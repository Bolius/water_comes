import React from "react";
import RisksDB from "../risks.json";

export default class Resume extends React.Component {
  floodResults() {
    return (
      <p>
        Vores offentligt tilgængelige oplysninger indikerer, at din bolig ligger{" "}
        {this.props.dangers.flood.groundHeight} meter over havets overflade.
        <p
          dangerouslySetInnerHTML={{
            __html: RisksDB.results.flood[this.props.dangers.flood.risk]
          }}
        />
      </p>
    );
  }

  rainResults() {
    let factors = [];
    factors.push({
      text: RisksDB.results[this.props.active][this.props.threatLevel],
      link: RisksDB.results[this.props.active].link
    });

    if (this.props.dangers.basement.risk === "high") {
      factors.push(RisksDB.results.basement);
    }

    if (this.props.dangers.hollowing.risk === "high") {
      factors.push(RisksDB.results.hollwing);
    }

    if (this.props.dangers.conductivity.risk != "low") {
      factors.push({
        text:
          RisksDB.results.conductivity[this.props.dangers.conductivity.risk],
        link: RisksDB.results.conductivity.link
      });
    }
    if (this.props.dangers.fastningDegree.risk != "low") {
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
          <p class="inline-links-in-article">
            <span class="category orange">Læs også: </span>
            <a href={factor.link.url} target="_blank">
              {factor.link.title}
            </a>
          </p>
        ) : (
          ""
        )}
      </div>
    ));

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
