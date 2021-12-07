import React, {useContext} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import avatar from "../photo.png"
import {Context} from "../index";

export default function ProfilePage() {
    const {user} = useContext(Context)
    return (
        <Container className={'mt-3'}>
            <Row>
                <Col md={4} className={'d-flex justify-content-center'}>
                    <Image src={avatar} className={'rounded-circle'}/>
                </Col>
                <Col md={4} className={''}>
                    <Row>
                        <h2>
                            {user.user.username}
                        </h2>
                    </Row>
                    <Row className={'d-flex flex-row text-black-50'}>
                        <h6>{user.user.firstName} {user.user.lastName}</h6>
                    </Row>
                    <Row className={'d-flex flex-row mt-3'}>
                        <h7>Email: {user.user.email}</h7>
                    </Row>
                </Col>
                <Col md={4} className={'d-flex justify-content-end text-info '}>
                    {user.isAuth ?
                        <h5>Online</h5>
                        :
                        <h5>Offline</h5>
                    }
                </Col>
            </Row>
        </Container>
    );
}