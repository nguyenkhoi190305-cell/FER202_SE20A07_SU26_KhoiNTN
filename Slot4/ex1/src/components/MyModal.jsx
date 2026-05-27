import React from 'react';
import { Modal, Button } from 'react-bootstrap';

/**
 * MyModal - A reusable modal component
 * 
 * Props:
 * - show: boolean to display the modal
 * - handleClose: function to close the modal
 * - title: string/element for the header title
 * - children: main body content
 * - footer: custom footer content (optional)
 * - size: string ('sm', 'lg', 'xl') (optional, default: 'md')
 */
function MyModal({ show, handleClose, title, children, footer, size = 'md' }) {
  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      centered 
      size={size}
      backdrop="static"
      keyboard={true}
      className="custom-modal"
    >
      <Modal.Header closeButton className="border-0 pb-0">
        {title && (
          <Modal.Title className="fw-bold fs-4 text-dark">
            {title}
          </Modal.Title>
        )}
      </Modal.Header>
      <Modal.Body className="py-3">
        {children}
      </Modal.Body>
      <Modal.Footer className="border-0 pt-0">
        {footer ? (
          footer
        ) : (
          <Button 
            variant="secondary" 
            onClick={handleClose}
            className="px-4 py-2"
            style={{ borderRadius: '6px', fontWeight: '500' }}
          >
            Close
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
