import React from 'react';

const PatientsList = ({ patients }) => {
    let index = 0;
    return (
        <section className='patients-container'>
            <table class="table caption-top  mt-5 pt-5">
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Booking Type</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        patients.map((patient, index) =>
                            <tr>
                                <td>{index+1}</td>
                                <td>{patient.Name}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.Email}</td>
                                <td>{patient.Phone}</td>
                                <td>{patient.bookingType}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </section>
    );
};

export default PatientsList;