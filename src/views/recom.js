import React from 'react';
import { Row, Button, Col } from 'reactstrap'
import styled from 'styled-components';
import Recommendation from '../components/recommendation.js'
import Articles from '../articles.json'

const ArticleColumn = styled(Col)`
  margin: 5px 0px;
`;

const StyledHeader = styled.div`
  font-family: "roboto", sans-serif;
  padding: 7px 20px 5px;
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
        <div>
          <Row>
            <StyledHeader>
              <p style={{fontSize: '25px'}}> Her er vores anbefalinger til hvad du kan gøre </p>
              <p>Med udgangspunkt i, hvad vi ved om din bolig, og det, du selv har oplyst,
              er her vores anbefalinger. </p>
            </StyledHeader>
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
            {other.map((a, i) => (
              <ArticleColumn key={i} sm={'12'} md={'6'}>
                <Recommendation
                  img={a.img}
                  title={a.title}
                  caption={a.caption}
                  link={a.link}/>
              </ArticleColumn>
              ))}
            </Row>
            <Button variant="primary" size="lg" block onClick={this.hide}>Vis færre</Button>
            </div>}
        </div>
    );
  }
}
