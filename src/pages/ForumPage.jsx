import React from 'react';
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import PostList from "../components/PostList";

const ForumPage = () => {
    return (
        <Container>
            <Row>
                <Col md={1}>

                </Col>
                <Col md={10}>
                    <PostList/>
                </Col>
                <Col md={1}>

                </Col>
            </Row>
        </Container>
    );
};

export default ForumPage;