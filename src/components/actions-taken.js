import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap'
import Action from './action.js'
import { Button } from './button.js'


const ActionHeader = styled(Row)`
  font-size: 1.4em;
  font-weight: 500;
  margin-bottom: 0.4em;
`;

export default class ActionsTaken extends React.Component {
  render() {
    return (<Container>
      <ActionHeader>
        Hvad har du gjort for at forbygge oversvømmelse?
      </ActionHeader>
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
          <Button block>
            Beregn Anbefalinger
          </Button>
        </Col>
      </Row>
    </Container>);
  }
}
