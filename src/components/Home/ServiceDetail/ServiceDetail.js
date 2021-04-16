import React from 'react';

const ServiceDetail = (props) => {
    const {title,description,img} = props.service;
    return (
        <div className="col-md-4">
            <div className="service-card text-center">
                <div>
                    <img src={img} alt="Our Service"/>
                </div>
                <h3 className="py-3">{title}</h3>
                <p className="text-secondary">{description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;