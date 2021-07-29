import React, { useEffect, useState } from 'react';
import drImg from '../../../images/ourDoctor.png';
import DoctorsData from '../DoctorsData/DoctorsData';

const OurDoctors = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(doctorData => {
            setDoctor(doctorData);
        })
    }, []);
    return (
        <section className='container  mt-5 pt-5'>
            <div className="row justify-content-center mt-5 ">
                <div className="col-md-12">
                    <h5 className="text-success text-center">OUR DOCTORS</h5>
                </div>
                {
                    doctor.map(doctor => <DoctorsData doctor={doctor}></DoctorsData>)
                }
            </div>
        </section>
    );
};

export default OurDoctors;