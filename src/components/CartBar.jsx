import React, { Component } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import images from "../images/adidas.jpg";
import cart from '../images/Path 772.svg'


class CartBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false
        };
    }

    handleShow = () => {
        this.setState({
          show: true
        })
    }

    handleClose = () => {
        this.setState({
          show: false
        })
    }

    render() { 
        return (
            <header className='header search py-2'>
                <nav className='navbar container flex'>
                    <div className='search-icon flex'>
                        <AiOutlineSearch/>
                        <input type="text" placeholder="Search"/>
                    </div>

                    <img src={images} alt='logo'/>

                    <div className='flex'>
                        <div className='icons flex' onClick={() => { this.handleShow() }}>
                            <img className='cart-img' src={cart} alt=''/>
                            <p className='mb-0'>Cart</p>
                            <span className='count'>{this.props.itemCount}</span>
                        </div>

                        <div className='icons flex'>
                            <GrFavorite/>
                            <p className='mb-0'>Wishlist</p>
                        </div>

                        <div className='icons flex'>
                            <BsPerson/>
                            <p className='mb-0'>Login</p>
                        </div>
                    </div>
                </nav>

                {
                    this.state.show && 
                    <div className="cartModal">
                        {this.props.itemCount > 0 ?
                            <div className='side'>
                                <div className="close" onClick={() => { this.handleClose() }}>X</div>
                                <h2>My Cart</h2>
                                <h3>Cart Summary</h3>
                                <div className='card-cart'>
                                    <img className='cart-img' src={this.props.selectedProduct.img[0]} alt='img' />
                                    <div>
                                        <p>{this.props.selectedProduct.description}</p>
                                        <div>Quantity: {this.props.itemCount}</div>
                                        <div className='remove-btn'>
                                            <h3>{this.props.selectedProduct.salePrice * this.props.itemCount} <small>LE</small></h3>
                                            <button className='remove'>Remove</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='total'>
                                    <h2>Total: {this.props.selectedProduct.salePrice * this.props.itemCount} LE </h2>
                                </div>
                                <div className='btn'>
                                    <button className='review'>Review Cart</button>
                                    <button className='check'>Complete Checkout</button>
                                </div>
                            </div>
                        :
                            <div className='side'>
                                <div className="close" onClick={() => { this.handleClose() }}>X</div>
                                <h2>My Cart</h2>
                                <h3>Sorry your cart is empty</h3>
                                <img src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=6&m=861576608&s=612x612&w=0&h=lhzmWud1lD4GNFwM4UczmiHFYR4CZJHHFxkx689GOkQ=" alt='img' />
                            </div>
                        }
                    </div>
                }
            </header>
        );
    }
}
 
export default CartBar;