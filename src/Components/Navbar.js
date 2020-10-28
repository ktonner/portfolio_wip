import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

class Navigation extends React.Component {

    render() {
        return (
            <Navbar>
                {/* <Navbar.Brand href="#home">Kathleen Tonner</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <NavLink href="/Portfolio2">Home</NavLink>
                        <NavLink href="/Portfolio2/work">Work</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation