import React, {useState} from 'react';
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import PostList from "../components/PostList";
import Button from "react-bootstrap/Button";
import CreatePost from "../components/models/CreatePost";

const ForumPage = () => {
    const [createPostVisible, setCreatePostVisible] = useState(false);
    return (
        <Container className={'mt-3'}>
            <Row className={'mb-3 mt-3'}>
                <Col md={2}/>
                <Col md={8} className={'d-flex justify-content-end'}>
                    <Button
                        variant={'dark'}
                        size={'lg'}
                        className={'mt-3 d-flex'}
                        onClick={() => setCreatePostVisible(true)}
                    >
                        Create Post
                    </Button>
                </Col>
                <Col md={2}/>
            </Row>

            <Row>
                <Col md={2}>

                </Col>
                <Col md={8}>
                    <PostList/>
                </Col>
                <Col md={2}>

                </Col>
            </Row>
            <CreatePost show={createPostVisible} handleClose={() => setCreatePostVisible(false)}/>
        </Container>
    );
};

export default ForumPage;