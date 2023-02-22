import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
import AboutUsImg from '../../assets/Images/Background/AboutUs.avif'
export default function AboutUs(){

    return(
        <React.Fragment>
            <Container className='AboutUs_container mt-5' id="AboutUS" >
                <Row>
                    <Col lg={6} md={12} sm={12} >
                        
                        <div className="AboutUs_Img">
                            <img src={AboutUsImg} alt="" />
                            <div className="image_bottom"></div>
                        </div>

                    </Col>
                    <Col lg={6} md={12} sm={12} >
                        <div className="AboutUs_information" data-aos="fade-up">
                            <div className="AboutUs_SmallTitle">
                            About Us <div className="topTitle_Line"></div>
                            </div>

                            <div className="AboutUs_MainTitle">
                                Dedicated training plan prepared for you.
                            </div>

                            <p className="pricing_desc">
                             We create dietary and training plans so that you can achieve the best results in the shortest possible time.
                            </p>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}