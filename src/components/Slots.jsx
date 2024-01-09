import React, { Component } from 'react';

class Slots extends Component {
    state = {  } 
    render() { 
        return (
            <header className='slot'>
                <nav className='slots'>
                    <ul className='container flex'>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Unisex</li>
                        <li>Kids</li>
                        <li>Best Sellers</li>
                        <li>New Arrivals</li>
                        <li className='active'>Offers</li>
                    </ul>
                </nav>

                <div className='links flex container'>
                    <a href='#'>Men</a>
                    <p className='mb-0'>/</p>
                    <a href='#'>Clothing</a>
                    <p className='mb-0'>/</p>
                    <a href='#'>Tops</a>
                    <p className='mb-0'>/</p>
                    <a href='#'>Adidas</a>
                    <p className='mb-0'>/</p>
                    <p className='mb-0'>Adidas Black T-Shirt</p>
                </div>
            </header>
        );
    }
}
 
export default Slots;