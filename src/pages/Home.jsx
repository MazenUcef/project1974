import React, { Component } from 'react';
import Footer from '../components/Footer';
import MainProd from '../components/MainProd';
import SimilarProd from '../components/SimilarProd';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <MainProd/>
            <SimilarProd/>
            <Footer/>
            </>
        );
    }
}
 
export default Home;