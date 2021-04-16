import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({date}) => {
    const bookingData = [
        {
            _id: '5e8df50be6e8231764dc23de',
            id: 1,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: 10
        },
        {
            _id: '5e8df578e6e8231764dc23df',
            id: 2,
            subject: 'Cosmetic Dentistry',
            visitingHour: '10:50 AM - 11:30 AM',
            totalSpace: 10
        },
        {
            _id: '5e8df5aee6e8231764dc23e0',
            id: 3,
            subject: 'Teeth Cleaning',
            visitingHour: '5:00 PM - 6:00 PM',
            totalSpace: 10
        },
        {
            _id: '5e8df63be6e8231764dc23e1',
            id: 4,
            subject: 'Cavity Protection',
            visitingHour: '7:00 AM - 8:30 AM',
            totalSpace: 10
        },
        {
            _id: '5e8df68de6e8231764dc23e2',
            id: 5,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: 10
        },
        {
            _id: '5e8df6a0e6e8231764dc23e3',
            id: 6,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: 10
        }
    ]

    return (
        <section className="book-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center theme-color">Available Appointment for {date.toDateString()}</h2>
                    </div>
                </div>
                <div className="row mt-5">
                    {
                        bookingData.map(booking => <BookingCard booking={booking} key={booking.id} date={date}></BookingCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;