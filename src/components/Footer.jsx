import React, { Component } from 'react';
import {FiSend} from 'react-icons/fi';
import  Cash from '../images/cash.png';
import  Visa from '../images/visa.jpg';
import  master from '../images/mastercard.png';
import logoSVG from '../images/logo.svg'
import facebook from '../images/Group 1432.svg'
import instagram from '../images/Group 1433.svg'
import linkedin from '../images/Group 1435.svg'
import twiiter from '../images/Group 1434.svg'
import nasnavLOGO from '../images/Group 1439.svg'


class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className='footer'>
                <section className='container'>
                    <div className='subFooter'>
                        <div className='left'>
                            <img src={logoSVG} alt='logo' />
                            <div className='mt-4'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. tenetur consequatur facilis non laudantium ut, magnam adipisci similique perspiciatis distinctio.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. quos nemo praesentium ab cumque voluptatem. Culpa voluptate, delectus earum possimus laudantium aliquam fugit, error perspiciatis harum placeat et commodi eveniet quidem beatae vero praesentium adnatus quasi eius, eos alias itaque dolorem. </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum assumenda non dolore adipisci nemo. Quod quia debitis fugiat cupiditate.</p>
                            </div>
                        </div>
                        <div className='right'>
                            <p>Subscribe to our newsletter</p>
                            <div className='form'>
                                <input type="text" placeholder='Enter Your Mail'></input>
                                <button>Subscribe <FiSend className='icon'/></button>
                            </div>
                            <div className='nav'>
                                <div>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Conect Us</li>
                                        <li>Track Order</li>
                                        <li>Terms &amp; Conditions</li>
                                        <li>Privacy Policy</li>
                                        <li>Sell With Us</li>
                                        <li>Shipping And Returns</li>
                                    </ul>
                                </div>
                                <div className='icons'> 
                                    <div className='icon gap-5'>
                                        <img src={facebook} alt='' />
                                        <p className='mb-0 '>Facebook</p>
                                    </div>
                                    <div className='icon gap-5'>
                                        <img src={linkedin} alt='' />
                                        <p className='mb-0'>LinkedIn</p>
                                    </div>
                                    <div className='icon gap-5'>
                                        <img src={instagram} alt='' />
                                        <p className='mb-0'>Instagram</p>
                                    </div>
                                    <div className='icon gap-5'>
                                        <img src={twiiter} alt='' />
                                        <p className='mb-0'>Twiiter</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='copy-right'>
                        <div>&copy; 2021 yeshtery, all right reserved.</div>
                        <div>
                            <img src={Cash} alt='cash'/>
                            <img src={Visa} alt='visa'/>
                            <img src={master} alt='master'/>
                        </div>
                        <div>Powered By <span><img src={nasnavLOGO} alt='logo' /></span></div>
                    </div>
                </section>
            </footer>
        );
    }
}
 
export default Footer;