import React, {useContext} from 'react';
import {Dropdown, Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Context} from "../../index";

const CreatePost = ({show, handleClose}) => {
    const {posts} = useContext(Context)

    return (
        <Modal show={show} onHide={handleClose} size={'lg'} centered={true}>
            <Modal.Header closeButton className={'bg-dark text-white'}>
                <Modal.Title >Create post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className={'mt-2 border-dark'}
                        placeholder={"Enter a title"}
                    />
                    <Form.Control
                        className={'mt-2 border-dark col-form-label'}
                        placeholder={"Enter a content"}

                    />
                    <Form.Control
                        className={'mt-2 border-dark'}
                        type={'file'}
                    />
                    <Dropdown className={'mt-2'}>
                        <Dropdown.Toggle className={'bg-dark border-dark'}>
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
                </Form>
            </Modal.Body>
            <Modal.Footer className={'bg-dark'}>
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