import React from 'react';
import './IconCard.css';

const InfoCard = (props) => {
    const {title,description,background,icon} = props.info;
    return (
        <div className="col-md-4">
            <div className="icon-box" style={{background : background}}>
                <div className="icon-box-left">
                    <i className={icon}></i>
                </div>
                <div className="icon-box-right">
                    <h3 className="text-white">{title}</h3>
                    <p className="text-white">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;