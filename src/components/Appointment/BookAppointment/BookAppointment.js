import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        id: 1,
        name: 'Orthodontics',
        visitingHours: '08:30 am - 09:30 am',
        totalSpace: 10
    },
    {
        id: 2,
        name: 'Cosmetics Dentistry',
        visitingHours: '09:30 am - 10:30 am',
        totalSpace: 10
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        visitingHours: '10:30 am - 11:30 am',
        totalSpace: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        visitingHours: '08:30 am - 09:30 am',
        totalSpace: 10
    },
    {
        id: 5,
        name: 'Orthodontics',
        visitingHours: '08:30 am - 09:30 am',
        totalSpace: 10
    },
    {
        id: 6,
        name: 'Orthodontics',
        visitingHours: '08:30 am - 09:30 am',
        totalSpace: 10
    },

];
const BookAppointment = ({ date }) => {
    return (
        <section className="container mt-5 pt-5">
            <h2 className="text-center text-brand">Available appointment on {date.toDateString()}</h2>
            <div className="row mt-5 d-flex justify-content-center">
                {
                    bookingData.map(booking =>
                        <BookingCard
                            key={booking.id}
                            date={date}
                            booking={booking}
                        >
                        </BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;