import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-us mt-5">
            <div className="container p-5">
                <div className="row text-center">
                    <div className="col-md-12">
                        <h5 className="theme-color">CONTACT US</h5>
                        <h2 className="text-white">Always Contact With Us</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form className="mt-5">
                            <div className="form-group">
                                <input type="email" className="form-control py-4" id="email" aria-describedby="emailHelp" placeholder="Email*" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control py-4" id="password" placeholder="Subject*" required/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="message" rows="4" placeholder="Your Message*" required></textarea>
                            </div>
                            <button type="submit" className="btn default-btn d-block m-auto">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;