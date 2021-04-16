import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const currentYear = (new Date()).getFullYear();
    return (
        <section className="footer mt-5">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div className="footer-block footer-block-1">
                        <h4 className="mb-4 theme-color">Footer Title</h4>
                            <ul>
                                <li><Link to="/appointment">Emergency Dental Care</Link></li>
                                <li><Link to="/appointment">Check Up</Link></li>
                                <li><Link to="/appointment">Treatment of personal Dieasease </Link></li>
                                <li><Link to="/appointment">Tooth Extraction</Link></li>
                                <li><Link to="/appointment">Check Up </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-block footer-block-2">
                            <h4 className="mb-4 theme-color">Oral Health</h4>
                            <ul>
                                <li><Link to="/appointment">Emergency Dental Care</Link></li>
                                <li><Link to="/appointment">Check Up</Link></li>
                                <li><Link to="/appointment">Treatment of personal Dieasease </Link></li>
                                <li><Link to="/appointment">Tooth Extraction</Link></li>
                                <li><Link to="/appointment">Check Up </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-block footer-block-3">
                            <h4 className="mb-4 theme-color">Services</h4>
                            <ul>
                            <li><Link to="/appointment">Emergency Dental Care</Link></li>
                                <li><Link to="/appointment">Check Up</Link></li>
                                <li><Link to="/appointment">Treatment of personal Dieasease </Link></li>
                                <li><Link to="/appointment">Tooth Extraction</Link></li>
                                <li><Link to="/appointment">Check Up </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-block footer-block-4">
                            <h4 className="mb-4 theme-color">Our Address</h4>
                            <address>
                                New York , 101010 Hudson Yard
                            </address>
                            <ul className="social-box">
                                <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="/"><i className="fab fa-google"></i></Link></li>
                                <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                            </ul>
                            <div className="call-to-action mt-3">
                                <h4>Call Us Now</h4>
                                <a href="tel:+12094378609" className="btn default-btn mt-3">+12094378609</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row mt5 py-5">
                    <div className="col-md-12">
                        <p className="text-center">Copyright {currentYear} &copy; All right preserved</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;