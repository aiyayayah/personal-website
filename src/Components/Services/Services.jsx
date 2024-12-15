import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import theme_pattern2 from '../../assets/theme9.png';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    const handleBoxClick = (link) => {
        window.open(link, '_blank'); // Open the link in a new tab
    };

    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>Study with Me</h1>
                <img src={theme_pattern2} alt="" />
            </div>
            <div className="services-container">
                {Services_Data.map((service, index) => (
                    <div
                        key={index}
                        className='services-format'
                        onClick={() => handleBoxClick(service.link)} // Open link on click
                    >
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className='services-readmore'>
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;