import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className='col-md-4 text-center'>
            <img className='mt-5' style={{ height: '50px'}} src={service.img} alt="" />
            <h4 style={{color: '#40485C'}} className='mt-3 mb-3'>{service.name}</h4>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum sint quasi, accusamus eaque magni.</p>
        </div>
    );
};

export default ServiceDetail;