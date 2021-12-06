import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import PostItem from "./PostItem";

const PostList = observer( ()=> {
    const {posts} = useContext(Context)
    return (
        <Row className={'d-flex'}>
            {posts.posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </Row>
    );
});

export default PostList;