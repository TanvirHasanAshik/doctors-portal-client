import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import PatientsList from '../PatientsList/PatientsList';
import './Patients.css';
const Patients = () => {
    const [patients, setPatients] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/allPatients')
        .then(res => res.json())
        .then(data => setPatients(data))
    },[])
    const style = {
        backgroundColor: '#f3fcfc',
        height: '100%'
    }
    
    return (
        <div className="row" style={style}>
            <div className="side-bar col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="patients-list col-md-8">
                <h4 className="mt-5">Total Patients: {patients.length}</h4>
                <PatientsList patients={patients}></PatientsList>
            </div>
        </div>
    );
};

export default Patients;