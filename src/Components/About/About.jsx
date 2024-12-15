import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import theme_pattern1 from '../../assets/theme8.png';
import pic1 from '../../assets/cky1.jpeg'
import pic2 from '../../assets/cky2.jpeg'
import pic3 from '../../assets/cky3.jpeg'
import pic4 from '../../assets/cky4.jpeg'
import pic5 from '../../assets/cky5.jpeg'

const About = () => {
    const lifeSnapshots = [
        { image: pic1, caption: 'Play games' },
        { image: pic2, caption: 'Tufting' },
        { image: pic3, caption: 'Touch grass' },
        { image: pic4, caption: 'Kayaking' },
        { image: pic5, caption: 'Flying Fox' },
    ];

    return (
        <div id='about'className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern1} alt="theme pattern" />
            </div>
            <div className="mylife-photos">
                <h1>My Life Snapshots</h1>
                <div className="mylife-photos-grid">
                    {lifeSnapshots.map((snapshot, index) => (
                        <div className="mylife-photos-item" key={index}>
                            <img src={snapshot.image} alt={snapshot.caption} />
                            <p>{snapshot.caption}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
