import React, { useState } from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import MyModal from './MyModal';

function Pizza({ pizza }) {
  const [showModal, setShowModal] = useState(false);

  const getBadgeBg = (tag) => {
    switch (tag?.toLowerCase()) {
      case 'sale':
        return 'danger';
      case 'new':
        return 'success';
      case 'best seller':
        return 'warning';
      case 'hot':
        return 'danger';
      default:
        return 'secondary';
    }
  };

  return (
    <>
      <Card className="h-100 custom-pizza-card mx-auto" style={{ maxWidth: '350px' }}>
        <div style={{ position: 'relative' }}>
          <Card.Img 
            variant="top" 
            src={pizza.imageUrl} 
            style={{ height: '220px', objectFit: 'cover' }}
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500';
            }}
          />
          {pizza.tag && (
            <Badge 
              bg={getBadgeBg(pizza.tag)} 
              className="position-absolute top-0 end-0 m-3 px-3 py-2"
              style={{ fontSize: '0.85rem', zIndex: 1 }}
            >
              {pizza.tag}
            </Badge>
          )}
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="card-title">
            {pizza.name}
          </Card.Title>
          <Card.Text className="card-text flex-grow-1">
            {pizza.description}
          </Card.Text>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="fw-bold fs-5 text-dark">
              {pizza.salePrice ? `$${pizza.salePrice.toFixed(2)}` : `$${pizza.price.toFixed(2)}`}
            </span>
            <Button 
              className="custom-pizza-btn border-0"
              onClick={() => setShowModal(true)}
            >
              View Details
            </Button>
          </div>
        </Card.Body>
      </Card>

      <MyModal 
        show={showModal} 
        handleClose={() => setShowModal(false)} 
        title={pizza.name}
        size="lg"
      >
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <img 
              src={pizza.imageUrl} 
              alt={pizza.name}
              className="img-fluid rounded shadow-sm w-100"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500';
              }}
            />
          </Col>
          <Col md={6}>
            <div className="pizza-details-info">
              {pizza.tag && (
                <Badge bg={getBadgeBg(pizza.tag)} className="mb-2 px-3 py-2 text-uppercase" style={{ letterSpacing: '0.5px' }}>
                  {pizza.tag}
                </Badge>
              )}
              <h3 className="fw-bold text-dark mb-3">{pizza.name}</h3>
              <p className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                {pizza.longDescription || pizza.description}
              </p>
              
              <div className="d-flex align-items-baseline mb-4">
                <span className="text-muted me-2 fs-5">Price:</span>
                {pizza.salePrice ? (
                  <>
                    <span className="fw-bold text-danger fs-3 me-2">
                      ${pizza.salePrice.toFixed(2)}
                    </span>
                    <span className="text-decoration-line-through text-muted fs-5">
                      ${pizza.originalPrice.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="fw-bold text-dark fs-3">
                    ${pizza.price.toFixed(2)}
                  </span>
                )}
              </div>

              <div className="pt-3 border-top">
                <span className="text-muted d-block mb-2">Available Sizes:</span>
                <div className="d-flex gap-2">
                  <Badge bg="light" text="dark" className="border px-3 py-2">Small (9")</Badge>
                  <Badge bg="light" text="dark" className="border px-3 py-2">Medium (12")</Badge>
                  <Badge bg="light" text="dark" className="border px-3 py-2">Large (15")</Badge>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </MyModal>
    </>
  );
}

export default Pizza;