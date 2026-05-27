import React from 'react';
import MyCarousel from './MyCarousel';
import PizzaList from './pizzaList';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <MyCarousel />
      <Container className="my-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Our Signature Pizzas
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Handcrafted with freshly prepared dough, secret family recipe sauce, and the finest local ingredients. Baked to perfection!
          </p>
          <div className="mx-auto mt-3" style={{ width: '80px', height: '4px', backgroundColor: '#ffc107', borderRadius: '2px' }} />
        </div>
        <PizzaList />
      </Container>
    </div>
  );
}

export default Home;
