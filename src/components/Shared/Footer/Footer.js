import { faFacebook, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
const Footer = () => {
    
    return (
        <section className="container footer-container">
            <div className="row ">
                <div className="col-md-3 pt-5">
                    <p>Emergency Dental care</p>
                    <p>Check Up</p>
                    <p>Treatment of personal diseases</p>
                    <p>Tooth extraction</p>
                    <p>Check Up</p>
                </div>
                <div className="col-md-3">
                    <h4>Services</h4>
                    <p>Emergency Dental care</p>
                    <p>Check Up</p>
                    <p>Treatment of personal diseases</p>
                    <p>Tooth extraction</p>
                    <p>Check Up</p>
                </div>
                <div className="col-md-3">
                    <h4>Oral Health</h4>
                    <p>Emergency Dental care</p>
                    <p>Check Up</p>
                    <p>Treatment of personal diseases</p>
                    <p>Tooth extraction</p>
                    <p>Check Up</p>
                </div>
                <div className="col-md-3">
                    <h4>Our Address</h4>
                    <p>Epic health care, <br />Chawkbazar, Chittagong,1200 </p>
                    <div className="social-icon">
                        <FontAwesomeIcon className="p-2" icon={faFacebook} />
                        <FontAwesomeIcon className="p-2" icon={faTwitter} />
                        <FontAwesomeIcon className="p-2" icon={faGooglePlusG} />
                    </div>
                </div>
            </div>
            <p className="m-3 text-center">Copyright  {(new Date().getFullYear())} all rights reserved.</p>
        </section>
    );
};

export default Footer;