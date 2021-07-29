import React from 'react';
import chair from '../../../images/chair.png';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row mt-5 d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br /> Starts here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rem itaque ratione culpa. Quas enim optio, omnis accusamus dolorem adipisci odit eius consequatur eum eaque maiores minima repellat tempora id.</p>
                <a style={{backgroundColor: 'purple'}} className="btn text-white" href="/appointment">
                    GET APPOINTMENT
                </a>
                
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;