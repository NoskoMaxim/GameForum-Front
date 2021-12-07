import React from 'react';
import {Card, CardImg} from "react-bootstrap";
import bgImage from "../bg.png"

const CategoryItem = ({category}) => {
    return (
        <Card className={'border-white mt-3'} bg={bgImage}>
            <CardImg src={bgImage} alt={'Card image'}/>
            <Card.ImgOverlay >
                <Card.Title className={'text-white m-lg-4 align-content-center'}>
                    <h2>{category.category}</h2>
                </Card.Title>
            </Card.ImgOverlay>
        </Card>
    );
};

export default CategoryItem;