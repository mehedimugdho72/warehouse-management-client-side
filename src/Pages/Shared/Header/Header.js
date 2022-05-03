import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark " className='d-flex align-items-center'>
            <Container>
                <Navbar.Brand>
                    <Link to="/"><h1 className='text-white me-5'>Star Furniture</h1></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home">home</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="review">Manage inventories</Nav.Link>
                        <Nav.Link as={Link} to="review">My Items</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;