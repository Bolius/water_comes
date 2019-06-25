import React from "react";
import Recommendation from "../components/recommendation.js";
import Articles from "../articles.json";

export default class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    this.state = { readMore: false };
    this.recomRef = React.createRef();
  }

  hide() {
    this.setState({ readMore: false });
  }

  show() {
    this.setState({ readMore: true });
  }

  componentDidMount() {
    window.scrollTo({
      top: this.recomRef.current.offsetTop,
      behavior: "smooth"
    });
  }

  render() {
    var articles = this.props.basement
      ? Articles.links
      : Articles.links.filter(x => {
          return x.has_basement !== false;
        });
    articles = articles.filter(x => {
      return !this.props.filter.includes(x.remove);
    });
    articles = articles.slice(0, 6);
    var other = Articles.links.filter(x => {
      return !articles.includes(x);
    });
    return (
      <div ref={this.recomRef}>
        <div>
          <h2>Her er vores anbefalinger til hvad du kan gøre</h2>
          <p>
            Med udgangspunkt i, hvad vi ved om din bolig, og det, du selv har
            oplyst, er her vores anbefalinger.
          </p>
        </div>
        <div className="result-container">
          {articles.map((a, i) => (
            <Recommendation
              key={i}
              img={a.img}
              title={a.title}
              caption={a.caption}
              link={a.link}
            />
          ))}
          {!this.state.readMore ? (
            <button onClick={this.show}>Vis flere</button>
          ) : (
            <div class="more-recommendation-container">
              {other.map((a, i) => (
                <Recommendation
                  key={i}
                  img={a.img}
                  title={a.title}
                  caption={a.caption}
                  link={a.link}
                />
              ))}
              <button onClick={this.hide}>Vis færre</button>
            </div>
          )}
        </div>      
      </div>      
    );
  }
}
