import React from 'react';
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const DeleteCategory = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose} centered={true}>
            <Modal.Header closeButton className={'bg-dark text-white'}>
                <Modal.Title>Delete category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Enter a category"}
                        className={'border-dark'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer className={'bg-dark'}>
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

export default DeleteCategory;