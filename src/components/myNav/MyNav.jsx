import React, { useState } from 'react'
import './MyNav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { NavLink } from 'react-router-dom';
import logo1 from '../../assets/logos/logo1.png'
export default function MyNav({ scrollToggle }) {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    function handleOffcanvasToggle() {
        setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
    }

    const closeOffcanvas = () => {
        setShowOffcanvas(false);
    };
    return (
        <div>
            <Navbar expand="lg" className={`nav__Bg ${scrollToggle ? "nav__fixed py-3 navTransformationDown" : "nav__absolute pb-3"} align-items-center`}>
                <Container>
                    <Navbar.Brand className='d-flex align-items-center'>
                        <NavLink to='/'>
                            <img className='logo__Width' src={logo1} alt="main__logo" />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={handleOffcanvasToggle} aria-controls="basic-navbar-nav" />
                    {/* start navbar min-width 992px */}
                    <Navbar.Collapse id="navbar-nav" className='Navbar__Collapse__none__on__med'>
                        <Nav className="mx-auto">
                            <NavLink to={'/'} 
                            aria-label="Close" 
                            className={`nav-link link__item nav__link__style`}>
                                Home
                            </NavLink>
                            <NavLink to={'/about-us'} 
                            aria-label="Close" 
                            className={`nav-link link__item nav__link__style`}>
                                About Us
                            </NavLink>
                            <NavLink to={'/services'} 
                            aria-label="Close" 
                            className={`nav-link link__item nav__link__style`}>
                                Services
                            </NavLink>
                            <NavLink to={'/projects'} 
                            aria-label="Close" 
                            className={`nav-link link__item nav__link__style`}>
                                Projects
                            </NavLink>
                            
                        </Nav>
                        <Nav>
                            <NavLink to={'/contact'} className='nav-link'>
                                <div className="get__touch__btn hover__effect">
                                    get  in touch
                                </div>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    {/* end navbar min-width 992px */}
                    {/* start navbar min-width 320px */}
                    <Navbar.Offcanvas
                        id="offcanvasNavbar" className='Navbar__offCanvas__none__on__lg' aria-labelledby="offcanvasNavbarLabel"
                        show={showOffcanvas}
                        onHide={handleOffcanvasToggle}
                        placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className='offCanvas__head' id="offcanvasNavbarLabel">
                                <NavLink to={`/`} className="">
                                    <img className='logo__Width' src={logo1} alt="logo__canvas" />
                                </NavLink>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="mx-auto" >
                                <NavLink
                                    onClick={() => {
                                        closeOffcanvas();
                                    }}
                                    aria-label="Close"
                                    className={`nav-link link__item nav__link__style`}
                                    to={`/home`}>
                                    home
                                </NavLink>
                                <NavLink
                                    onClick={() => {
                                        closeOffcanvas();
                                    }
                                    }
                                    className={`nav-link link__item nav__link__style`}
                                    to={`/about-us`}
                                >
                                    About Us
                                </NavLink>
                                <NavLink
                                    onClick={() => {
                                        closeOffcanvas();
                                    }
                                    }
                                    className={`nav-link link__item nav__link__style`}
                                    to={`/services`}
                                >
                                    Services
                                </NavLink>
                                <NavLink
                                    onClick={() => {
                                        closeOffcanvas();
                                    }
                                    }
                                    className={`nav-link link__item nav__link__style`}
                                    to={`/projects`}
                                >
                                    Projects
                                </NavLink>
                            </Nav>
                            <Nav>
                            <NavLink to={'/contact'} className='nav-link'>
                                <div className="get__touch__btn hover__effect">
                                    <>
                                    get  in touch
                                    </>
                                </div>
                            </NavLink>
                        </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    {/* end navbar min-width 320px */}
                </Container>
            </Navbar>
        </div>
    )
}