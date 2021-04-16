import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const Dashboard = () => {
    const containerStyle = {
        height: '100%',
        background: '#1cc7c1'
    }

    const [loggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])

    const hanldeDateChange = (date) => {
        date = date.toDateString();
        setSelectedDate(date)
        console.log('Calender Changed!', selectedDate);
    }

    useEffect(()=>{
        fetch('https://sleepy-mountain-85887.herokuapp.com/appointmentsByDate',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({date : selectedDate, email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
        .catch(error => alert(error.message))
    },[selectedDate])

    return (
        <section className="dashboard">
            <div className="container-fluid" style={containerStyle}>
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-5">
                        <Calendar
                            onChange={hanldeDateChange}
                            value={new Date()}
                        />
                    </div>
                    <div className="col-md-5">
                        <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;