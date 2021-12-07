import React from 'react';
import {Modal, ModalTitle} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const DeletePost = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose} centered={true}>
            <Modal.Header closeButton>
                <Modal.Title>Delete post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalTitle>Delete this post?</ModalTitle>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeletePost;