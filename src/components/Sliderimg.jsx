import React, { Component } from 'react';
import Slider from "react-slick";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

class Sliderimg extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }

    next() {
      this.slider.slickNext();
    }
    
    previous() {
      this.slider.slickPrev();
    }

    render() { 
        const settings = {
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        return (
          <div className='cont-slider'>
            <button onClick={this.previous}><MdArrowBackIos/></button>
            <Slider className='slider' ref={c => (this.slider = c)} {...settings}>
              {
                this.props.img.map(el => {
                  return <img src={el} alt='img' />
                })
              }
            </Slider>
            <button onClick={this.next}><MdArrowForwardIos/></button>
          </div>
  )}
}
 
export default Sliderimg;