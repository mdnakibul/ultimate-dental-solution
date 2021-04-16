import React from 'react';
import { useHistory } from 'react-router';
import chair from '../../../images/chair.png'
import './HeaderMain.css'
const HeaderMain = () => {
    const history = useHistory();
    const goToAppointment = ()=>{
        history.push('/appointment')
    }
    return (
        <main className="row d-flex align-items-center" style={{height:'700px',maxWidth : '100%'}}>
            <div className="col-md-4 offset-md-1">
                <h2>Your New Smile <br/> Start Here </h2>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis explicabo inventore quisquam delectus vero maxime.</p>
                <button className="btn default-btn text-uppercase" onClick={goToAppointment}>Get Appointment </button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="Dental chair" className="img-fluid"/>

            </div>
        </main>
    );
};

export default HeaderMain;