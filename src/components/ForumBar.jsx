import React, {useContext} from "react";
import {Context} from "../index";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {CATEGORIES_ROUTE, FORUM_ROUTE, LOGIN_ROUTE, RATING_ROUTE, SETTING_ROUTE} from "../utils/ConstPath";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";


const ForumBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand style={{color: 'white'}} href={FORUM_ROUTE}>GameForum</Navbar.Brand>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight: '100px'}}
                    navbarScroll
                >
                    <Nav.Link href={CATEGORIES_ROUTE} style={{color: 'white'}}>
                        Categories
                    </Nav.Link>
                    <Nav.Link href={RATING_ROUTE} style={{color: 'white'}}>
                        Rating
                    </Nav.Link>
                </Nav>

                <Nav className="me-2">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-secondary">Search</Button>
                    </Form>
                </Nav>

                {user.isAuth ?
                    <Nav className="ml-auto">
                        {user.isAdmin &&
                            <Button
                                variant={"outline-warning"}
                                className="me-2"
                                onClick={() => navigate(SETTING_ROUTE)}
                            >
                                Settings
                            </Button>}
                        <Button
                            variant={"outline-danger"}
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Log Out
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button href={LOGIN_ROUTE} variant={"outline-success"} className="me-2">Log In</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
})

export default ForumBar;