import React from 'react';
import {Col, Container, ModalTitle} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import PostList from "../components/PostList";

const RatingPage = () => {
    return (
        <Container className={'mt-3'}>
            <ModalTitle className={'d-flex justify-content-center mt-2 mb-2'}>
                <h2>Rating</h2>
            </ModalTitle>
            <Row>
                <Col md={2}>

                </Col>
                <Col md={8}>
                    <PostList/>
                </Col>
                <Col md={2}>

                </Col>
            </Row>
        </Container>
    );
};

export default RatingPage;