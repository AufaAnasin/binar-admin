import { Button, Modal } from 'react-bootstrap';
import './index.css'
import DelIlustration from '../../assets/Cars/img-BeepBeep.png'

function ModalDelete({show, modalId, handleClose, deleteButton}) {
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          {/* <Modal.Body>Delete This Car {modalId} ?</Modal.Body> */}
          <Modal.Body>
            <div className="ilustration-wrapper">
              <img src={DelIlustration} alt="cloud" />
              <h5>Menghapus Data Mobil</h5>
              <p>Setelah dihapus, data mobil 
                tidak dapat dikembalikan. Yakin ingin menghapus?</p>
            </div>
          </Modal.Body>
          <Modal.Body className='button-wrapper-modal' >
            <Button className='modal-button-delete' variant="primary" onClick={() => deleteButton(modalId)}>
              Ya
            </Button>
            <Button className='modal-button-delete' variant="outline-primary" onClick={handleClose}>
              Tidak
            </Button>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default ModalDelete