import React from 'react';
import john from '../../../images/john.png'
import aliza from '../../../images/aliza.png'
import ema from '../../../images/ema.png'
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
const Testimonial = () => {

    const testimonialData = [
        {
            name : 'Winson Herry',
            place : 'California',
            description : 'It is a long established face that by the reliable content of a lot layout. The use of lorem is more or less normal distribute to use Content here',
            image : john
        },
        {
            name : 'Aliza Mey',
            place : 'California',
            description : 'It is a long established face that by the reliable content of a lot layout. The use of lorem is more or less normal distribute to use Content here',
            image : aliza
        },
        {
            name : 'Ema John',
            place : 'California',
            description : 'It is a long established face that by the reliable content of a lot layout. The use of lorem is more or less normal distribute to use Content here',
            image : ema
        },
    ]

    return (
        <section className="testimonial mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h5 className="mt-5 theme-color">TESTIMONIAL</h5>
                        <h2>What Our Patient Says</h2>
                    </div>
                    <div className="col-md-3 offset-md-4 testimonial-quote">
                        <i className="fas fa-quote-left" style={{color :'rgb(28 ,199 ,193 ,0.43',fontSize : '7em'}}></i>
                    </div>
                </div>
                <div className="row mt-5">
                    {
                        testimonialData.map(testimonial => <TestimonialDetails testimonial={testimonial} key={testimonial.name}></TestimonialDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;