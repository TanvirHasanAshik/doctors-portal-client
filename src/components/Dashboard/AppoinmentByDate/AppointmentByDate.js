import React from 'react';

const AppointmentByDate = ({ appointment }) => {
    return (
        <div className="justify-content-start">
            {
                appointment.length > 0 ? <table class="table caption-top  mt-5 pt-5">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointment.map(app =>
                            <tr>
                                <td>{app.Name}</td>
                                <td>{app.Email}</td>
                                <td>{app.Phone}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            : <h4 className=" text-center text-secondary">Appointment is not available</h4>
            }
        </div>
    );
};

export default AppointmentByDate;