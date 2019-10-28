import React from 'react';
import { Row, Col } from 'reactstrap';
import Recommendation from '../components/recommendation.js';
import Articles from '../articles.json'

export default class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    this.state = { readMore: false };
  }

  hide(){
    this.setState({readMore: false})
  }

  show(){
    this.setState({readMore: true})
  }

  componentDidMount() {
    window.scrollBy({
      top: 500,
      behavior: 'smooth'
    });
   }

  render() {
    var articles = this.props.basement ? Articles.links : Articles.links.filter((x) => { return x.has_basement !== false})
    articles = articles.filter((x) => { return !this.props.filter.includes(x.remove);});
    articles = articles.slice(0, 6)
    var other = Articles.links.filter((x) => { return !articles.includes(x);});
    return (
        <div className="water-comes-app-recom">
          <header>
            <h2> Her er vores anbefalinger til hvad du kan gøre </h2>
            <p>Med udgangspunkt i, hvad vi ved om din bolig, og det, du selv har oplyst,
            er her vores anbefalinger.</p>
          </header>
          <Row className="water-comes-app-recom-list">
            {articles.map((a, i) => (
            <Col key={i} sm={'12'} md={'6'}>
              <Recommendation
                img={a.img}
                title={a.title}
                caption={a.caption}
                link={a.link} />
            </Col>
              ))}
          </Row>
          { !this.state.readMore ? (
              <div className="align-right"><button className="btn btn-sm btn-more" onClick={this.show}>Vis flere <i className="icon-add-24">add</i></button></div>
          ) : (
            <div className="more-list"><Row className="water-comes-app-recom-list">
            {other.map((a, i) => (
              <Col key={i} sm={'12'} md={'6'}>
                <Recommendation
                  img={a.img}
                  title={a.title}
                  caption={a.caption}
                  link={a.link} />
              </Col>
              ))}
            </Row>
            <div className="align-right"><button className="btn btn-sm btn-more" onClick={this.hide}>Vis færre <i className="icon-remove-24">remove</i></button></div></div>
          )}
        </div>
    );
  }
}