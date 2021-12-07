import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import CategoryItem from "./CategoryItem";

const CategoryList = observer(() => {
    const {posts} = useContext(Context)
    return (
        <Row className={'d-flex'}>
            {posts.categories.map(category =>
                <CategoryItem key={category.id} category={category}/>
            )}
        </Row>
    );
});

export default CategoryList;