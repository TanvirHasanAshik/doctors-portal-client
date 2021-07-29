import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="text-brand">{booking.name}</h5>
                    <h6>{booking.visitingHours}</h6>
                    <small className="text-secondary">{booking.totalSpace} SPACES AVAILABLE</small>
                    <button onClick={openModal} className="btn text-white mt-3">BOOK APPOINTMENT</button>
                    <AppointmentForm date={date} bookingType={booking.name} modalIsOpen={modalIsOpen} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;