import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {

    const serviceData = [
        {
            title : 'Flouride Treatment',
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum aliquid itaque voluptate quam, ipsam alias.',
            img : flouride,
        },
        {
            title : 'Cavity Filling',
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum aliquid itaque voluptate quam, ipsam alias.',
            img : cavity
        },
        {
            title : 'Teeth Whitening',
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum aliquid itaque voluptate quam, ipsam alias.',
            img : whitening
        }
    ]
    return (
        <section className="services mt-5">
            <h5 className="text-center theme-color">OUR SERVICES </h5>
            <h2 className="text-center theme-color">Services We Provide</h2>
            <div className="container mt-5">
                <div className="row">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.title}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;