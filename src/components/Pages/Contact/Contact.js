import React from 'react';
import { Container, Row,Col} from 'react-bootstrap';
import './Contect.css'
const Contact = () => {
    return (
        <div  className="bgColor" >
            <Container>
                <div style={{marginLeft:'170px'}}>
                <h2 className="contact-tittle" >Contact Information</h2>
                <Row >
                    <Col md={3}>
                        <p>
                            <small>Address: Narayanganj, Dhaka</small>
                        </p>
                        
                    </Col>
                    <Col md={3}>
                        <p>
                        <small>Phone: +8801515627095</small>
                        </p>
                    </Col>
                    <Col md={3}>
                        <p>
                        <small>
                        Email: <a href="#">hello.rimazing@gmail.com</a></small>
                        
                        </p>
                    </Col>
                    <Col md={3}>
                        <p>
                        <small>Website: .....</small>
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={6}>
                    <form action="">
                   
                   <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Email"/>
                    </div>
                    
                    <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject"/>
                    </div>
                   
                   <div className="form-group">
                       <textarea name="" className="form-control" id="" cols="30" rows="5" placeholder="Message "></textarea>
                   </div>
                   <br/>
                   <div className="form-group text-center">
                       <button type="button" className="btn custom-btn"> SUBMIT </button>
                   </div>
               </form>
                    </Col>
                    <Col md={6}>
                        
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
};

export default Contact;