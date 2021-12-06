import React from 'react';
import {Col, Container, Image, ModalBody, ModalFooter, ModalTitle} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {NavLink} from "react-router-dom";
import {CATEGORIES_ROUTE, PROFILE_ROUTE} from "../utils/ConstPath";
import Button from "react-bootstrap/Button";
import photo from "../photo.png"

export default function PostPage() {
    const post = {
        id: 0,
        userId: 0,
        title: 'HAhAHAHA',
        content: 'hahahahahahahaha',
        photoUrl: '',
        category: 'jopa',

        publicationStatus: 'new',
        shipDate: '0.0.0.0.0.0.0.',
        likes: '100'
    }
    return (
        <Container className={'mt-3'} style={{background: "lightgray"}}>
            <ModalTitle>
                <h2>{post.title}</h2>
            </ModalTitle>
            <Row>
                <Image className={'img-fluid'} style={{height: 300}} src={photo}/>
            </Row>
            <ModalBody>
                {post.content}
            </ModalBody>
            <ModalBody className={'d-flex flex-row align-items-center'}>
                <Col md={4} className={''}>
                    <div className={'d-flex flex-column align-items-baseline'}>
                        <div className={'d-flex align-content-lg-center'}>
                            <h5>Category:</h5>
                            <NavLink to={CATEGORIES_ROUTE}>{post.category}</NavLink>
                        </div>
                    </div>
                </Col>
                <Col md={4}/>
                <Col md={4} className={'d-flex justify-content-end align-items-center'}>
                    <Button className={'btn-danger me-1'}>Like</Button>
                    Likes: {post.likes}
                </Col>
            </ModalBody>
            <ModalFooter>
                <NavLink to={PROFILE_ROUTE+post.userId}>Creator</NavLink>
            </ModalFooter>
        </Container>
    );
}