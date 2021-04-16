import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const BusinessInfo = () => {
    const infoData = [
        {
            title: 'Open Hours',
            description: 'We are open 24/7',
            background: '#1CC7C1',
            icon: 'fas fa-clock'
        },
        {
            title: 'Visit Our Location',
            description: 'Broklyn, NY, 10003',
            background: '#3A4256',
            icon: 'fas fa-map-marker-alt'
        },
        {
            title: 'Call Us Now',
            description: '+12094378609',
            background: '#1CC7C1',
            icon: 'fas fa-phone-volume'
        },
    ]
    return (
        <section style={{position: 'relative', marginTop : '-5%'}}>
            <div className="container">
                <div className="row">
                    {
                        infoData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BusinessInfo;