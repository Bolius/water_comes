import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap'
import Action from './action.js'
import '../styles/action-handler.css'

export default class ActionsTaken extends React.Component {
  render() {
    return (<Container>
      <Row className="action-header">
        Hvad har du gjort for at forbygge oversvømmelse?
      </Row>
      <Row>
        Fortæl os nedenfor, hvilke tiltag du selv har gjort for at forebygge
        oversvømmelse af din bolig. Samt få forslag til forebyggelse.
      </Row>
      <div>
        {this.props.actions.map((action, key) => (
          <Action task={action} key={key}/>
        ))}
      </div>
      <Row>
        <Col sm={{size:"6", offset:6}}>
          <Button color="info" className="act-btn" block>
            Beregn Anbefalinger
          </Button>
        </Col>
      </Row>
    </Container>);
  }
}
