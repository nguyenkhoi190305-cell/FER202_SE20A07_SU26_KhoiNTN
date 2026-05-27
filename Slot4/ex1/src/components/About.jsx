import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5 py-5 d-flex align-items-center" style={{ minHeight: '60vh' }}>
      <Row className="align-items-center w-100">
        <Col lg={6} className="mb-4 mb-lg-0 pe-lg-5">
          <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
            About <span style={{ color: '#d9534f' }}>Pizza Hut</span>
          </h1>
          <p className="lead text-muted mb-4">
            Born in the heart of traditional culinary arts, Pizza Hut has been serving authentic wood-fired pizzas since 2015.
          </p>
          <p className="text-secondary mb-4">
            Our mission is simple: to create the ultimate pizza experience using fresh, high-quality, local ingredients and traditional preparation methods. Every pizza starts with our signature slow-fermented sourdough, stretched by hand and baked at over 450°C in our custom stone oven.
          </p>
        </Col>
        <Col lg={6} className="text-center">
          <img
            src="./images/banners/banner2.png"
            alt="Fresh Ingredients"
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: '350px', objectFit: 'cover', width: '100%' }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
