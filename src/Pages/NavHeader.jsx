import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../Assets/Images/Spicy-CSV.png'
// import '../App.css';

const NavHeader = () => {

    return (

        <Navbar>
            <Navbar.Brand className="brandTag">
                <img
                    src={logo}
                    height="45"
                    className="d-inline-block align-top"
                    alt="Spicy CSV Logo"/>
            </Navbar.Brand>
        </Navbar>

    );

}

export default NavHeader;
