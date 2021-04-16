import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());
    const hanldeDateChange = (date)=>{
        setSelectedDate(date)
        console.log('Calender Changed!',date);
    }
    return (
        <section>
            <Navbar></Navbar>
            <AppointmentHeader hanldeDateChange={hanldeDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </section>
    );
};

export default Appointment;