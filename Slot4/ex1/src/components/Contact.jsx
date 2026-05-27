import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Container className="my-5 py-4">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
          Contact Us
        </h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
          Have any questions? We would love to hear from you. Drop us a line and we'll get back to you shortly!
        </p>
      </div>

      <Row className="g-5">
        <Col lg={6}>
          <div className="bg-light p-5 rounded shadow-sm h-100">
            <h3 className="fw-bold mb-4">Send Us a Message</h3>
            {submitted && (
              <Alert variant="success" className="mb-4">
                Thank you! Your message has been sent successfully. We will contact you soon.
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="fw-medium">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="fw-medium">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label className="fw-medium">Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message here..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </Form.Group>

              <Button type="submit" variant="dark" className="w-100 py-2 fs-5">
                Send Message
              </Button>
            </Form>
          </div>
        </Col>

        <Col lg={6}>
          <div className="p-5 h-100 d-flex flex-column justify-content-between">
            <div>
              <h3 className="fw-bold mb-4">Store Information</h3>
              <div className="mb-4">
                <h5 className="fw-bold text-muted mb-1">📍 Address</h5>
                <p className="fs-5">123 Le Duan, Hai Chau District, Da Nang, Viet Nam</p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold text-muted mb-1">📞 Phone Number</h5>
                <p className="fs-5">+84 236 123 456</p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold text-muted mb-1">✉️ Email Address</h5>
                <p className="fs-5">pizzahut@gmail.com</p>
              </div>
            </div>

            <div className="border-top pt-4 mt-4">
              <h4 className="fw-bold mb-3">🕒 Opening Hours</h4>
              <Row>
                <Col xs={6} className="text-muted">Monday - Sunday</Col>
                <Col xs={6} className="text-end fw-medium">10:00 AM - 10:00 PM</Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
