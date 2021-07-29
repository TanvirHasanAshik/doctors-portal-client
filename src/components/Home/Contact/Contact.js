import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className='container contact-container mt-5 pt-5'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-7 text-center">
                    <div>
                        <h4 style={{ color: 'turquoise' }} className=" mt-5">Contact Us</h4>
                        <h2 style={{ color: 'white' }}>Always Contact with Us</h2>
                    </div>
                    <form className="mt-5 pt-5">
                        <div class="mb-3">
                            <input type="email" placeholder="Email Address*" class="form-control"/>
                        </div>
                        <div class="mb-3">
                            <input type="text" placeholder="Subject*"class="form-control"/>
                        </div>
                        <div class="mb-3">
                        <textarea class="form-control" placeholder="Message*" rows="3"></textarea>
                        </div>
                        <button className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;