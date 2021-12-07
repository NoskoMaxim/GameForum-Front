import React from 'react';
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AddCategory = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose} size={'lg'} centered={true}>
            <Modal.Header closeButton className={'bg-dark text-white'}>
                <Modal.Title>Add category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Enter a category"}
                        className={'border-dark'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer className={'bg-dark text-white'}>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddCategory;