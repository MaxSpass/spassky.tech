import React, { Component } from "react";
import Particles from 'react-particles-js';
import Header from '../header/index';
import Footer from '../footer/index';
import Main from '../main/index';

import Paper from '@material-ui/core/Paper';


const particleProps = {
    particles: {
        number: {
            value: 1500,
            density: {
               enable: true,
               value_area: 10000
            }
        }
    }
};

const Layout = ({children}) => (
    <Paper className="wrapper">
        <Particles
            className="particle"
            params={particleProps}
        />

        <Header/>

        <main className="container">
            {/*{children}*/}
        </main>

        {/*<Footer/>*/}

    </Paper>
);

export default Layout