import React, {useState} from 'react';
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import AddCategory from "../components/models/AddCategory";
import DeleteCategory from "../components/models/DeleteCategory";
import CreatePost from "../components/models/CreatePost";

const SettingPage = () => {
    const [addCategoryVisible, setAddCategoryVisible] = useState(false);
    const [deleteCategoryVisible, setDeleteCategoryVisible] = useState(false);

    return (
        <Container className={''}>
            <Row className={'d-flex'}>
                <Col className={'d-flex justify-content-center'}>
                    <Button
                        variant={'success'}
                        className={'mt-3'}
                        onClick={()=> setAddCategoryVisible(true)}
                    >
                        Add category
                    </Button>
                </Col>
                <Col className={'d-flex justify-content-center'}>
                    <Button
                        variant={'danger'}
                        className={'mt-3'}
                        onClick={()=>setDeleteCategoryVisible(true)}
                    >
                        Delete category
                    </Button>
                </Col>
            </Row>
            {/*<AddCategory show={addCategoryVisible} handleClose={() => setAddCategoryVisible(false)}/>*/}
            <DeleteCategory show={deleteCategoryVisible} handleClose={() => setDeleteCategoryVisible(false)}/>
            <CreatePost show={addCategoryVisible} handleClose={() => setAddCategoryVisible(false)}/>
        </Container>
    );
};

export default SettingPage;