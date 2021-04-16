import React from 'react';

const DoctorDetails = (props) => {
    const {name, image , email} = props.doctor;
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'100px'}} src={`data:image/png;base64,${image.img}`} alt={name} className="img-fluid mb-3"/>
            <h4>{name}</h4>
            <p>
                <i className="fas fa-envelop theme-color"></i>
                {email}
            </p>
        </div>
    );
};

export default DoctorDetails;