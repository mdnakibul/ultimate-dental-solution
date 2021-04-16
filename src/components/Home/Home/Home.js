import React from 'react';
import Header from '../Header/Header';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Services from '../Services/Services';
import FeaturedService from '../FeaturedService/FeaturedService';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <section>
            <Header></Header>
            <BusinessInfo></BusinessInfo>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </section>
    );
};

export default Home;