import React from 'react';
import {Card, Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import CardHeader from "react-bootstrap/CardHeader";
import {useNavigate} from "react-router-dom";
import {POST_ROUTE} from "../utils/ConstPath";

const PostItem = ({post}) => {
    const navigate = useNavigate()
    return (
        <Card style={{cursor: 'pointer'}} className={'border-white mt-3'} onClick={()=>navigate(POST_ROUTE+'/'+post.id)}>
            <CardHeader className={'bg-info text-white '}>
                {post.title}
            </CardHeader>
            <Card.Body className={'bg-secondary d-flex'}>
                {post.userId}
            </Card.Body>
            <Card.Footer className={'bg-info text-white'}>
                <Row className={'d-flex'}>
                    <Col md={10} className={'align-content-center'}>

                    </Col>
                    <Col md={2} className={'align-content-center'}>Likes: {post.likes}</Col>
                </Row>

            </Card.Footer>
        </Card>
    );
};

export default PostItem;