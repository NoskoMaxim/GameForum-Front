import React from 'react';
import {Col, Container, ModalTitle} from "react-bootstrap";
import CategoryList from "../components/CategoryList";
import Row from "react-bootstrap/Row";

const CategoriesPage = () => {
    return (
        <Container className={'mt-3 rounded'}>
            <ModalTitle className={'d-flex justify-content-center mt-2 mb-2'}>
                <h2>Categories</h2>
            </ModalTitle>
            <Row>
                <Col md={1}>

                </Col>
                <Col md={10}>
                    <CategoryList/>
                </Col>
                <Col md={1}>

                </Col>
            </Row>
        </Container>
    );
};

export default CategoriesPage;