import { Container, Row, Col } from 'react-bootstrap';
import { pizzaDatas } from '../data/pizzaData';
import Pizza from './Pizza';

function PizzaList() {
  return (
    <Container className="my-4">
      <Row className="g-4">
        {pizzaDatas.map(p => (
          <Col key={p.id} xs={12} sm={6} md={4} className="d-flex align-items-stretch">
            <Pizza pizza={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PizzaList;