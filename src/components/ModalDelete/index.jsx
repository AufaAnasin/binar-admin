import { Button, Modal } from 'react-bootstrap';
import './index.css'

function ModalDelete({show, modalId, handleClose, deleteButton}) {
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Delete This Car {modalId} ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => deleteButton(modalId)}>
              Ya
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Tidak
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalDelete