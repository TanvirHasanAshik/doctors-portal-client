import React, { useEffect, useState } from 'react';
import AppointmentByDate from '../AppoinmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';
const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointment, setAppointment] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }
    useEffect(() => {
        fetch('http://localhost:5000/appointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({date : selectedDate})
        })
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [selectedDate]);
    const style = {
        backgroundColor: '#f3fcfc',
        height: '100%'
    }
    return (
        <div style={style} className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className=" calendar col-md-4 mt-5 pt-5">
                <h4 className=' text-secondary'>Appointments</h4>
                <Calendar className="mt-5 pt-5"
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className=" appointment-by-date col-md-5 mt-5 pt-5">
                <AppointmentByDate appointment={appointment}></AppointmentByDate>
            </div>
        </div>
    );
};

export default Dashboard;