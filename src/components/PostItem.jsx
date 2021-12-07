import React from 'react';
import {Card} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {POST_ROUTE, PROFILE_ROUTE} from "../utils/ConstPath";

const PostItem = ({post}) => {
    const navigate = useNavigate()
    return (
        <Card
            style={{cursor: 'pointer'}}
            className={'mt-3 border-0'}
            onClick={() => navigate(POST_ROUTE + '/' + post.id)}
        >
            <span className={'border border-dark rounded'}>
            <Card.Footer className={'bg-dark'}/>
            <Card.Body className={''}>
                <Card.Title className={''}>{post.title}</Card.Title>
                <Card.Text className={'d-flex justify-content-between text-black'}>
                    <div className={'d-flex flex-row align-items-baseline align-content-lg-center'}>
                        <h6>Category: {post.category}</h6>
                    </div>
                    <div>Likes: {post.likes}</div>
                </Card.Text>
            </Card.Body>
            <Card.Footer className={'d-flex bg-dark text-white justify-content-between'}>
                <div>
                    Created {post.shipDate}
                </div>
                <div>
                    <NavLink to={PROFILE_ROUTE + '/' + post.userId}>Creator</NavLink>
                </div>
            </Card.Footer>
            </span>

        </Card>
    );
};

export default PostItem;