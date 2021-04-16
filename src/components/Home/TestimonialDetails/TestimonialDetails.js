import React from 'react';

const TestimonialDetails = (props) => {
    const {name,description,place,image} = props.testimonial;
    return (
        <div className="col-md-4">
            <div className="testimonial-card">
                <p style={{lineHeight : '1.7em'}} className="mb-5">{description}</p>
                <div className="d-flex align-items-center">
                    <img src={image} alt="Client" className="rounded-circle img-fluid" style={{maxWidth : '30%'}}/>
                    <div className="pl-3">
                        <h5 className="theme-color">{name}</h5>
                        <p>{place}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;