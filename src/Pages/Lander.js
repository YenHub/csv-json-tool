import React from 'react';
import CopyFooter from '../Components/CopyFooter';
import { Navbar } from 'react-bootstrap';
import '../App.css';

const Lander = () => {

    return (

        <div className="App-Container">

            <Navbar bg="light">
                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
            </Navbar>

            <CopyFooter/>
        </div>

    );

}

export default Lander;
