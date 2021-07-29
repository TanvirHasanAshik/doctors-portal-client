import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (

        <div className="col-md-3 border border-1 p-5 m-2">
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil saepe, error doloribus quisquam maxime dolor quod culpa officiis perspiciatis atque obcaecati et magnam deleniti? Esse nam vitae dolor neque autem!</p>
            <div className="d-flex mt-5">
                <div>
                    <img src={testimonial.img} alt="" />
                </div>
                <div className='m-2 text-success'>
                    <h5>{testimonial.name}</h5>
                    <h6>{testimonial.location}</h6>
                </div>
            </div>
        </div>

    );
};

export default TestimonialCard;