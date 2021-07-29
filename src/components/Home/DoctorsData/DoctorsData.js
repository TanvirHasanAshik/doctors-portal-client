import { faEnvelopeOpenText, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './DoctorsData.css'
const DoctorsData = ({doctor}) => {
    return (
        <div className="col-md-3 text-center  mt-5 ">
            <img className='doctors-img' src={`data:image/png;base64,${doctor.image.img}`}/>
            <h5 style={{fontWeight: 'bold'}}>{doctor.name}</h5>
            <p className='text-success'><FontAwesomeIcon icon={faEnvelopeOpenText} /> {doctor.email}</p>
        </div>
    );
};

export default DoctorsData;