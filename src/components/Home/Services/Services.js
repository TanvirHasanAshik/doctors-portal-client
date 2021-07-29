import React from 'react';
import Fluoride from '../../../images/Fluoride.png';
import Cavity from '../../../images/Cavity.png';
import Whitening from '../../../images/Whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: Fluoride
    },
    {
        name: 'Cavity Filling',
        img: Cavity
    },
    {
        name: 'Teeth Whitening',
        img: Whitening
    }
]

const Services = () => {
    return (
        <section className="services-container ">
            <div className="text-center  mt-5">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2 style={{color: '#41495C'}}>Services We Provide</h2>
            </div>
            <div className="container mt-5">
                <div className="row">
                    {
                        servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services; 