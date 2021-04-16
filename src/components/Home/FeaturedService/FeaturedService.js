import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className="mt-5">\
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={featured} alt="Featured Service" className="img-fluid"/>
                    </div>
                    <div className="col-md-6 pl-5">
                        <h2 className="py-3" style={{color : '#3A4256'}}>Exceptional Detal <br/> Care, On your Terms</h2>
                        <p className="text-secondary" style={{lineHeight : '1.8em'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, consectetur nihil eius at consequatur quis quidem aliquid doloribus pariatur. Consequatur ipsum quibusdam dolore quas possimus dolores mollitia repudiandae quasi explicabo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi facilis doloremque dolorum assumenda culpa eveniet autem excepturi perferendis? A libero maiores natus quibusdam ipsa! Pariatur quas temporibus soluta nobis. </p>
                        {
                            //default-btn styles defined in HeaderMain.css file in HeaderMain component folder
                        }
                        <button className="btn default-btn">Learn More </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;