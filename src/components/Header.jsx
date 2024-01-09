import React, { Component } from 'react';
import logo from "../images/logo.jpg";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoIosArrowBack , IoIosArrowForward  } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";



class Header extends Component{
    state = { }
    render(){
        return (
            <>    
            <header className='header'>
            <nav className='navbar container flex'>
                <div className='logo flex gap-5'>
                    <HiMiniBars3CenterLeft/>
                    <img src={logo} alt='logo'/> 
                </div> 
            
                <div className='offers flex'>
                    <IoIosArrowBack/>
                    <p className='mb-0'> Valentine's Day Offers! Buy Two Get One Free </p>
                    <a href="#">Shop Now</a>
                    <IoIosArrowForward/>
                </div>
            
                <div className='flex'>
                    <div className='service flex'>
                        <FiPhoneCall/>
                        <p className='mb-0'>Contact Us</p>
                    </div>
            
                    <div className='service flex'>
                        <AiOutlineShoppingCart/>
                        <p className='mb-0'>Track Order</p>
                    </div>
            
                    <div className='service flex'>
                        <IoLocationSharp/>
                        <p className='mb-0'>Find A Store</p>
                    </div>
                </div>
            </nav>
            </header>
            </>
              )

    }
}
    




  


export default Header





