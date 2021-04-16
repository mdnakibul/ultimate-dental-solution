import React from 'react';
import doctor from '../../../images/doctor.png'
import './MakeAppointment.css'
const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={doctor} alt="Doctor" className="img-fluid" style={{transform: 'translateY(-150px)'}}/>
                    </div>
                    <div className="col-md-7 mt-4">
                        <h4 className="theme-color">APPOINTMENT</h4>
                        <h2 className="text-white">Make Your Appointment Today</h2>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aliquid at ea. Molestias enim quasi tenetur inventore! Quisquam, odio aperiam, nam dignissimos atque ipsam sequi ullam laudantium maxime quo in?</p>
                        <button className="btn default-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;