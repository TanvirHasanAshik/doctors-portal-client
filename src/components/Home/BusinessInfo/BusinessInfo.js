import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are opening in 8:00 am',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Chittagong South Khulshi, Bangladesh',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Contact Us Now',
        description: '+880170654100',
        icon: faPhoneVolume,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="container">
            <div className="row  ">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;