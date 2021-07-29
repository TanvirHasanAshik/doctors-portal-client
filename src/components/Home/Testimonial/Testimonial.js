import React from 'react';
import './Testimonial.css';
import patient1 from '../../../images/patients1.png';
import patient2 from '../../../images/patients2.png';
import patient3 from '../../../images/patients3.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
const testimonialData = [
    {
        name: 'Jhon Harison',
        img: patient1,
        location: 'United State'
    },
    {
        name: 'Vicky Mollik',
        img: patient2,
        location: 'North America'
    },
    {
        name: 'Hilary Kilinton',
        img: patient3,
        location: 'South America'
    }
]

const Testimonial = () => {
    return (
        <section className=' testimonial-container mt-5 pt-5'>
            <div className="row offset-md-1">
                <div className="testimonial-text col-md-12">
                    <h4 className='text-success'>TESTIMONIAL</h4>
                    <h2 style={{color: '#40485C'}}>What's Our patients <br /> Says </h2>
                </div>
            </div>
            <div className="row  d-flex justify-content-center mt-5">
                {
                    testimonialData.map(testimonial => 
                    <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;