import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../images/doctor.png';
const MakeAppointment = () => {
    return (
        <section className="container makeAppointment-container mt-5 pt-5">
            <div className="row row-container ">
                <div className="col-md-5 text-end justify-content-end">
                    <img className="doctor-img img-fluid" src={doctor} alt="" />
                </div>
                <div className="col-md-7 make-appointment justify-content-start">
                    <h4 className=" mt-5 ">Appointment</h4>
                    <h1 className=" mt-3">Make your appointment <br /> today</h1>
                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum repudiandae fuga harum dignissimos eaque cumque illum ducimus doloribus maxime dolore.</p>
                    <button className="btn text-white mt-5">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;