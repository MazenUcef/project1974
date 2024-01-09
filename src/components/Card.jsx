import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import imagx from "../images/images.jpg";

class Card extends Component {
    constructor(props){
        super(props);
    } 

    render() { 
        return (
            <div className='card flex'>
                <img className='productimg' src={this.props.prod.img} alt='Prod'/>
                <img className='imgx' src={imagx} alt='Prod'/>
                <p className='descrip'>{this.props.prod.description}</p>
                <div className='price-logo'>
                    <div className='price'>
                        <h3>{this.props.prod.salePrice}<span> LE</span></h3>
                        <div className='sale'>
                            <del>{this.props.prod.price}LE</del>
                            <p>{this.props.prod.salePercent}%</p>
                        </div>
                    </div>
                    <div>
                        <img className='logo' src={this.props.prod.logo} alt='logo'/>
                    </div>
                </div>
                <div className='Rating flex'>
                    <StarRatings
                        rating={this.props.prod.rate}
                        starRatedColor="orange"
                        numberOfStars={5}
                        name='rating'
                        starDimension={20}
                        starSpacing={1}
                    />
                    <p className='rate'>{this.props.prod.rate} of 5</p>
                </div>
                <p className='loc'>{this.props.prod.location}</p>
            </div>
            );
        }
    }
 
export default Card;