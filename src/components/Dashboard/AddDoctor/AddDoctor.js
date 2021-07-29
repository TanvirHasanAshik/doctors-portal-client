import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState('');

    const handleBlur = (event) => {
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }

    const handleChange = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        fetch('https://salty-garden-92822.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
    }
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className=" appointment-by-date col-md-5 mt-5 pt-5">
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Doctor Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name" /><br />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Doctor Email</label>
                        <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Email" /><br />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload Image</label>
                        <input onChange={handleChange} type="file" class="form-control" id="exampleCheck1" /><br />
                    </div>
                    <button type="submit" class="btn ">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;