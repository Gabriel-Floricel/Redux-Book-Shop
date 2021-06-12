import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ConfirmModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{props.titleText}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.bodyText}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
                {props.cancelText}
            </Button>
            <Button variant="primary" onClick={props.handleConfirm}>
                {props.confirmText}
            </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmModal;