import {Col, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col md='2'>Logo</Col>
        <Col md='8'>Menu</Col>
      </Row>
    </Container>
  );
}

export default App;
