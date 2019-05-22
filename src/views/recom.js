import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import '../styles/recom.css'
import Recommendation from '../components/recommendation.js'


export default class Recommendations extends React.Component {
  render() {
    return (
      <div className="recom">
        <Container>
          <Row>
            <div className="recom_header">
              <p className="header_title" >Her er vores anbefalinger til hvad du kan gøre </p>
              <p>Marianne or husbands if at stronger ye. Considered is as middletons uncommonly. Promotion perfectly ye consisted so. His chatty dining for effect ladies active. Equally journey wishing not several behaved chapter she two sir. Deficient procuring favourite extensive you two. Yet diminution she impossible understood age.  </p>
            </div>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Recommendation
              img={"https://de7ps54rd7sof.cloudfront.net/fileadmin/_processed_/b/d/csm_jesper_carl_planteglaede_13ea7e7eed.jpg"}
              title={"Få en gratis frøpose og hjælp bierne"}
              caption={"Antallet af insekter i den danske natur er drastisk faldende. "}
              link={"https://www.bolius.dk/faa-en-gratis-froepose-og-hjaelp-bierne-88592/"}/>
            <Recommendation
              img={"https://de7ps54rd7sof.cloudfront.net/fileadmin/_processed_/8/8/csm_naturhave123_ver2_af8775992b.jpg"}
              title={"20 tips til mere natur i haven"}
              caption={"En mere naturlig og dyrevenlig have behøver ikke at være et rodet eller uoverskueligt projekt."}
              link={"https://www.bolius.dk/20-tips-til-mere-natur-i-haven-43937/"}
            />
          </Row>

          <Row style={{ marginBottom: "10px" }}>
            <Recommendation
              img={"https://de7ps54rd7sof.cloudfront.net/fileadmin/_processed_/b/d/csm_jesper_carl_planteglaede_13ea7e7eed.jpg"}
              title={"Få en gratis frøpose og hjælp bierne"}
              caption={"Antallet af insekter i den danske natur er drastisk faldende. "}
              link={"https://www.bolius.dk/faa-en-gratis-froepose-og-hjaelp-bierne-88592/"}
            />
            <Recommendation
              img={"https://de7ps54rd7sof.cloudfront.net/fileadmin/_processed_/8/8/csm_naturhave123_ver2_af8775992b.jpg"}
              title={"20 tips til mere natur i haven"}
              caption={"En mere naturlig og dyrevenlig have behøver ikke at være et rodet eller uoverskueligt projekt."}
              link={"https://www.bolius.dk/20-tips-til-mere-natur-i-haven-43937/"}
            />
          </Row>
        </Container>
      </div>
    );
  }
}
