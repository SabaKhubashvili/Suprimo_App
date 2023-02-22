import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileImage from '../../assets/Images/Background/Profile.jpg'
import locationSvg from '../../assets/SVG/location.svg'
import clockSvg from '../../assets/SVG/clock.svg'

export default function JobListing(){


    return(
        <React.Fragment>
            <Container style={{marginTop:'150px'}} className='JobListing_Container' id='JobListing'>
                <Row >
                    <Col lg={6} md={12} sm={12} className='jobListing_information'  data-aos="fade-down">
                        <div className="AboutUs_SmallTitle">
                                Job List <div className="topTitle_Line"></div>
                        </div>    
                        <div className="AboutUs_MainTitle" style={{width:'400px'}}>
                        Search Our Joblist
                        </div>
                        <div className="pricing_desc" style={{width:'400px'}}>
                        If you are looking for a job and want to join our group, we are constantly recruiting new employees for the indicated positions.
                        </div>
                        <div className="profile">
                            <img src={ProfileImage} alt="" />
                            <div className="name">Veronica Bardas</div>
                        </div>
                     </Col>
                    <Col lg={6} md={12} sm={12}  className='joblisting_col'> 
                        <Row>
                            <Col lg={6} md={6} sm={12} >
                                <div className="joblisting_single">
                                    <div className="type">
                                    <div className="dot" />   Managment
                                    </div>
                                    <div className="jobListing_title">
                                     Professional Gym Manager
                                    </div>

                                    <div className="informations">
                                        <div className="information"> <img src={clockSvg} alt="" className='ml-1'  width='20px' /> Full Time Job</div>
                                        <div className="information"> <img src={locationSvg} alt="" className='ml-1'  width='20px' /> New York Station</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} >
                                <div className="joblisting_single">
                                    <div className="type">
                                    <div className="dot" />   Managment
                                    </div>
                                    <div className="jobListing_title">
                                     Professional Gym Manager
                                    </div>

                                    <div className="informations">
                                        <div className="information"> <img src={clockSvg} alt="" className='ml-1'  width='20px' /> Full Time Job</div>
                                        <div className="information"> <img src={locationSvg} alt='icon' className="ml-1" width='20px' /> New York Station</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} >
                                <div className="joblisting_single">
                                    <div className="type">
                                    <div className="dot" />  Managment
                                    </div>
                                    <div className="jobListing_title">
                                     Professional Gym Manager
                                    </div>

                                    <div className="informations">
                                        <div className="information"> <img src={clockSvg} alt="" className='ml-1'  width='20px' /> Full Time Job</div>
                                        <div className="information"> <img src={locationSvg} alt='icon' className='ml-1' width='20px' /> New York Station</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} >
                                <div className="joblisting_single senior">
                                    <div className="type">
                                       <div className="dot" />  Managment
                                    </div>
                                    <div className="jobListing_title">
                                     Senior Trainer
                                    </div>

                                    <div className="informations">
                                        <div className="information"> <img src={clockSvg} alt="" className='ml-1'  width='20px' /> Full Time Job</div>
                                        <div className="information"> <img src={locationSvg} alt='icon' className='ml-1'     width='20px' /> New York Station</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}