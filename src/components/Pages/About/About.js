import React from 'react';
import {Link} from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
import AboutImg from '../../../images/about.png'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
const About = () => {
    return (
        <div className="bgColor">
            <Container className="about ">
                <Row >
                    <Col md={2}>
                    </Col>
                    <Col md={4} className="align-items-center">
                        <img src={AboutImg} alt=""/>
                    </Col>
                    <Col md={6}>
                        <div className="marLeft">
                        <h1 className="section-tittle">ABOUT </h1>
                        <h2 className="about-title">Hi! I'm Rima</h2>
                        <p className="about-disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum eum non voluptatem et ut? Architecto iure magni facilis laudantium!</p>
                        <button className="btn custom-btn">
                            {/* <a href="https://drive.google.com/file/d/1jyNhoPF8Z8k76Q3-UnDTLGd1EgCLJzHb/view?usp=sharing" target="_blank"> */}
                            <FaIcons.FaDownload/> Resume
                            {/* </a> */}
                        </button>
                        <div className="social-link">
                        <a href='https://www.facebook.com/rima.wahid.121' target="_blank" className="social-icon">
                            <FaIcons.FaFacebook />
                         </a>
                         <a href='https://www.facebook.com/rima.wahid.121' target="_blank" className="social-icon">
                            <FaIcons.FaLinkedin />
                         </a>
                         <a href='https://www.facebook.com/rima.wahid.121' target="_blank" className="social-icon">
                            <AiIcons.AiFillGithub />
                         </a>
                        </div>
                        <p>Contact me here!</p>
                        <p> Email: <a href="#">hello.rimazing@gmail.com</a></p>
                        <p>Phone: +8801515627095</p>
                        </div>

                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;