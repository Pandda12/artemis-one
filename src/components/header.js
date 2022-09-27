import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import logo from './logo192.png';
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";

import About from '../pages/About';
import Blog from '../pages/Blog';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <NavbarBrand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> React Site
                        </NavbarBrand>
                        <NavbarToggle aria-controls="responsive-navbar-nav"/>
                        <NavbarCollapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About us</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="d-inline mx-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </NavbarCollapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                    </Routes>
                </Router>
            </>
        );
    }
}

export default Header;
