import React from 'react';
import { Container, Row, Button, Col } from 'reactstrap'
import styled from 'styled-components';

import '../styles/recom.css'
import Recommendation from '../components/recommendation.js'
import Articles from '../articles.json'

const ArticleColumn = styled(Col)`
  margin: 5px 0px;
`;


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

  render() {

    var articles = this.props.basement ? Articles.links : Articles.links.filter((x) => { return x.has_basement !== false})
    articles = articles.filter((x) => { return !this.props.filter.includes(x.remove);});
    articles = articles.slice(0, 6)
    var other = Articles.links.filter((x) => { return !articles.includes(x);});
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
            {articles.map((a, i) => (
            <ArticleColumn key={i} sm={'12'} md={'6'}>
              <Recommendation
                img={a.img}
                title={a.title}
                caption={a.caption}
                link={a.link}/>
            </ArticleColumn>
              ))}
          </Row>
          { !this.state.readMore
            ?
              <div> <Button variant="primary" size="lg" block onClick={this.show}>Vis flere</Button> </div>
            :
            <div>
            <Row style={{ marginBottom: "10px" }}>
              <Recommendation
                img={other[0].img}
                title={other[0].title}
                caption={other[0].caption}
                link={other[0].link}
              />
              <Recommendation
                img={other[1].img}
                title={other[1].title}
                caption={other[1].caption}
                link={other[1].link}
              />
            </Row>
            <Row style={{ marginBottom: "10px" }}>
              <Recommendation
                img={other[2].img}
                title={other[2].title}
                caption={other[2].caption}
                link={other[2].link}
              />
              <Recommendation
                img={other[3].img}
                title={other[3].title}
                caption={other[3].caption}
                link={other[3].link}
              />
            </Row>
            <Row style={{ marginBottom: "10px" }}>
              <Recommendation
                img={other[4].img}
                title={other[4].title}
                caption={other[4].caption}
                link={other[4].link}
              />
              <Recommendation
                img={other[5].img}
                title={other[5].title}
                caption={other[5].caption}
                link={other[5].link}
              />
            </Row>
            <Button variant="primary" size="lg" block onClick={this.hide}>Vis færre</Button>
            </div>
          }
        </Container>
      </div>
    );
  }
}
