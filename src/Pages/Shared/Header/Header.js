import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../Firebase.init';

const Header = () => {
    const [user, loading] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    if (loading) {
        return <Loading></Loading>
    }
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
                        {
                            user && <>
                                <Nav.Link as={Link} to="manageInventories">Manage inventories</Nav.Link>
                                <Nav.Link as={Link} to="myItems">My Items</Nav.Link>
                            </>
                        }
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        {user ?
                            <button onClick={() => handleSignOut()} className='btn btn-primary'>Sign Out</button>
                            :
                            <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;