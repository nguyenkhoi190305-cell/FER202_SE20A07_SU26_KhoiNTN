import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar({ activeTab, setActiveTab }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 shadow-sm sticky-top">
      <Container>
        <Navbar.Brand href="#home" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }} className="fw-bold fs-4 d-flex align-items-center">
          <span style={{ color: '#ffc107', marginRight: '5px' }}>🍕</span>
          <span style={{ color: '#ffc107' }}>Pizza</span>Hut
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5 fw-medium">
            <Nav.Link
              href="#home"
              active={activeTab === 'home'}
              onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}
              className={`px-3 ${activeTab === 'home' ? 'text-warning' : 'text-white-50'}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              active={activeTab === 'about'}
              onClick={(e) => { e.preventDefault(); setActiveTab('about'); }}
              className={`px-3 ${activeTab === 'about' ? 'text-warning' : 'text-white-50'}`}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#contact"
              active={activeTab === 'contact'}
              onClick={(e) => { e.preventDefault(); setActiveTab('contact'); }}
              className={`px-3 ${activeTab === 'contact' ? 'text-warning' : 'text-white-50'}`}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
