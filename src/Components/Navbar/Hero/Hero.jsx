import React from 'react'
import './Hero.css'
import profile_img from '../../../assets/profpic1.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Kah Yong, </span>second year computer science student</h1>
            <p>I am an extroverted person who loves socializing and meeting new people. <br /> I am currently studying computer
science, specializing in game development. <br />I find it really exciting to work on creative projects, especially
when I can collaborate with others and share ideas. </p>
            <div className="hero-action">
                <div className="hero-connect">
                 <AnchorLink className="anchor-link" offset={50} href="#contact">
                Connect with me
                </AnchorLink>
            </div>

                <div className="hero-resume">My Resume</div>

            </div>
        </div>
    )


}
export default Hero