import React, {useContext} from 'react';
import {Dropdown, Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Context} from "../../index";

const CreatePost = ({show, handleClose}) => {
    const {posts} = useContext(Context)

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className={'mt-2'}
                        placeholder={"Enter a title"}
                    />
                    <Form.Control
                        className={'mt-2'}
                        placeholder={"Enter a content"}
                    />
                    <Form.Control
                        className={'mt-2'}
                        type={'file'}
                    />
                    <Dropdown className={'mt-2'}>
                        <Dropdown.Toggle>
                            Select a category
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {posts.categories.map(category =>
                                <Dropdown.Item key={category.id}>
                                    {category.category}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={handleClose}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatePost;