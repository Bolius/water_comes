import React from 'react';
import { Container, Row } from 'reactstrap'
import '../styles/recom.css'
import Recommendation from '../components/recommendation.js'
import Articles from '../articles.json'

export default class Recommendations extends React.Component {
  render() {

    var articles = this.props.basement ? Articles.links : Articles.links.filter((x) => { return x.has_basement !== false})
    articles = articles.filter((x) => { return !this.props.filter.includes(x.remove);});
    articles = articles.slice(0, 4)

    return (
      <div className="recom">
        <Container>
          <Row>
            <div className="recom_header">
              <p className="header_title" >Her er vores anbefalinger til hvad du kan gøre </p>
              <p>Med udgangspunkt i, hvad vi ved om din bolig, og det, du selv har oplyst,
              er her vores anbefalinger til din bolig. </p>
            </div>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Recommendation
              img={articles[0].img}
              title={articles[0].title}
              caption={articles[0].caption}
              link={articles[0].link}/>
            <Recommendation
              img={articles[1].img}
              title={articles[1].title}
              caption={articles[1].caption}
              link={articles[1].link}
            />
          </Row>

          <Row style={{ marginBottom: "10px" }}>
            <Recommendation
              img={articles[2].img}
              title={articles[2].title}
              caption={articles[2].caption}
              link={articles[2].link}
            />
            <Recommendation
              img={articles[3].img}
              title={articles[3].title}
              caption={articles[3].caption}
              link={articles[3].link}
            />
          </Row>
        </Container>
      </div>
    );
  }
}
