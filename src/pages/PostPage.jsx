import React, {useContext, useState} from 'react';
import {Col, Container, Image, ModalBody, ModalTitle} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {NavLink} from "react-router-dom";
import {CATEGORIES_ROUTE, PROFILE_ROUTE} from "../utils/ConstPath";
import Button from "react-bootstrap/Button";
import photo from "../photo.png"
import {Context} from "../index";
import DeletePost from "../components/models/DeletePost";

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
    const {user} = useContext(Context)
    const isOwner = user.user.id === post.id;
    const [deletePostVisible, setDeletePostVisible] = useState(false);
    return (
        <Container className={'mt-3 border-dark'}>
            <ModalTitle>
                <h2>{post.title}</h2>
            </ModalTitle>
            <Row>
                <Image className={'img-fluid'} style={{height: 300}} src={photo}/>
            </Row>
            <ModalBody>
                <Row>
                    <Col md={12}>
                        {post.content}
                    </Col>
                </Row>
                <Row className={'d-flex flex-row align-items-center'}>
                    <Col md={4} className={''}>
                        <div className={'d-flex flex-row align-items-baseline align-content-lg-center'}>
                            <h5>Category:</h5>
                            <NavLink to={CATEGORIES_ROUTE}>{post.category}</NavLink>
                        </div>
                    </Col>
                    <Col md={4}/>
                    <Col md={4} className={'d-flex justify-content-end align-items-center'}>
                        {user.isAuth &&
                            <Button className={'btn-danger me-1'}>Like</Button>
                        }
                        Likes: {post.likes}
                    </Col>
                    <hr className={'mt-2 mb-2'}/>
                </Row>
                <Row className={'d-flex flex-row align-items-center'}>
                    <Col md={4} className={'d-flex justify-content-baseline align-items-center'}>
                        <NavLink to={PROFILE_ROUTE + '/' + post.userId}>Creator</NavLink>
                    </Col>
                    <Col md={4}/>
                    <Col md={4} className={'d-flex justify-content-end align-items-center'}>
                        {isOwner &&
                            <Button
                                className={'btn-danger'}
                                onClick={() => setDeletePostVisible(true)}
                            >
                                Delete post
                            </Button>
                        }
                    </Col>
                </Row>
            </ModalBody>
            <DeletePost show={deletePostVisible} handleClose={() => setDeletePostVisible(false)}/>
        </Container>
    );
}