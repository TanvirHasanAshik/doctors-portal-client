import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Exceptional from '../Exceptional/Exceptional';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <OurDoctors></OurDoctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;