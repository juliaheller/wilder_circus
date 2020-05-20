import React from 'react';
import { Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar
            collapseOnSelect
            expand='lg'
            className='bg-light justify-content-between'
            variant='light'
            style={{
                boxShadow: '0px 9px 79px -21px rgba(0,0,0,0.78)',
            }}>
            <div>
                <Navbar.Brand href='/'>Wild Circus</Navbar.Brand>
                <img
                    src='https://res.cloudinary.com/dcmfiobqe/image/upload/v1576597454/CCBB_Landingpage/WildCodeSchool/tent-48817_ghcdrf.svg'
                    alt='Circus Logo'
                    width={150}
                    height={150}
                />
            </div>
            <div>
                <NavDropdown title='Menu' id='basic-nav-dropdown'>
                    <NavDropdown.Item>
                        <Link to='/'>Home</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to='/performances'>Performances</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to='/about'>About Us</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to='/prices'>Prices</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to='/contact'>Contact</Link>
                    </NavDropdown.Item>
                </NavDropdown>
                <Button variant='warning'>
                    <Link to='/newsletter'>Newsletter</Link>
                </Button>
                <Button variant='danger'>
                    <Link to='/admin'>admin</Link>
                </Button>
            </div>
        </Navbar>
    );
}
