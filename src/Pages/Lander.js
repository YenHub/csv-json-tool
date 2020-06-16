import React from 'react';
import CopyFooter from '../Components/CopyFooter';
import NavHeader from './NavHeader';
import { Container } from 'react-bootstrap';
import '../App.css';

const Lander = () => {

    return (

        <Container fluid>

            <NavHeader/>
            <CopyFooter/>

        </Container>

    );

}

export default Lander;
