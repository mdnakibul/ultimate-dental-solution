import React from 'react';
import chair from '../../../images/chair.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({hanldeDateChange}) => {
    
    return (
        <main className="row d-flex align-items-center" style={{ height: '700px', maxWidth: '100%' }}>
            <div className="col-md-4 offset-md-1">
                <h2 className="text-center"> Appointment </h2>
                <Calendar
                    onChange={hanldeDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="Dental chair" className="img-fluid" />

            </div>
        </main>
    );
};

export default AppointmentHeader;