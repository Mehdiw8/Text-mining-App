import React from 'react';
import {Link} from 'react-router-dom';
import Background from '../../Assets/particle.js/BackgroundParticle'
import Services from './Services';
import Footer from'./Footer'
const NavH = () => {
        return (
        <>
        <Background />
        <Services />
        <Footer />
        </>
        );
};

export default NavH;