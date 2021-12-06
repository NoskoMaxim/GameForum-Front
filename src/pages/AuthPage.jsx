import Button from 'react-bootstrap/Button';
import React from 'react';
import {Card, Container, Form} from 'react-bootstrap';
import {NavLink, useLocation} from 'react-router-dom';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/ConstPath';

export default function AuthPage() {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
            className={"d-flex justify-content-center align-items-center"}
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className={"m-auto"}>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter username or email"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter password"
                    />
                    <Button
                        className={"mt-3"}
                        variant="outline-success"
                    >
                        {isLogin ? 'Log In' : 'Registration'
                    }
                    </Button>
                    {isLogin ?
                        <NavLink className={"mt-3"} to={REGISTRATION_ROUTE}>Register now</NavLink>
                        :
                        <NavLink className={"mt-3"} to={LOGIN_ROUTE}>Log In</NavLink>
                    }
                </Form>
            </Card>
        </Container>
    );
}