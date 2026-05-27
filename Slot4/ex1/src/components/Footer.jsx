//1.Footer component hiển thị thông tin bản quyền và liên kết 
//đến trang chủ của tác giả :ID, Tên, Email, Link Github
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
function Footer({ id, name, email, githubLink }) {
  return (
    <Container fluid className="bg-light text-dark text-center py-3">
      <Row>
        <Col>
          <p>&copy; ID: {id}.</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;