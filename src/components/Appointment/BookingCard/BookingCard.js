import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking,date }) => {
    const { subject, visitingHour, totalSpace } = booking;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4">
            <div className="booking-card shadow p-5 mb-5 text-center">
                <h3 className="theme-color">{subject}</h3>
                <h4>{visitingHour}</h4>
                <p>Available Space {totalSpace}</p>
                <button onClick={openModal} className="btn default-btn">BOOK APPOINTMENT</button>
                <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject} date={date}></AppointmentForm>
            </div>
        </div>
    );
};

export default BookingCard;