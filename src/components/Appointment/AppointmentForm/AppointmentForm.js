import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, bookingType, date }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.bookingType = bookingType;
        data.date = date;
        data.created = new Date();
        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointment successfully created');
            }
        })
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand">{bookingType}</h2>
                <p className="text-center">On {date.toDateString()}</p>
                <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' name='name'  {...register("Name", { required: true })} placeholder="Your name" /><br />
                    {errors.Name && <span className="text-danger">This field is required</span>}
                    <br />
                    <input type='text' name='phone' {...register("Phone", { required: true })} placeholder="Your Phone Number" /><br />
                    {errors.Phone && <span className="text-danger">This field is required</span>}
                    <br />
                    <input type='email' name='email' {...register("Email", { required: true })} placeholder="Your Email" /><br />
                    {errors.Email && <span className="text-danger">This field is required</span>}
                    <br />
                    <select name="gender" {...register("gender")}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select><br /><br />
                    <button type='submit' className="btn text-white">SEND</button>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;