import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import arrow from '../../assets/SVG/arrow.svg'

export default function Footer(){


    return(
        <React.Fragment>
            <Container className="footer_container py-5">
                <Row className="footer_row py-5">
                    <Col lg={3} md={6} sm={12} >
                        <div className="footerTitle">
                            Suprimo
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} >
                        <div className="footer_component">
                            <h1 className="footer_component_title" >Healthy food</h1>
                            <p className="blog_subTitle mt-4" style={{textAlign:'start'}} >Proper nutrition provides our body with the complex of vitamins it needs and makes us feel better. In this article, we'll show you what to look for.</p>
                            <div className="footer_readMore" style={{color:'#FFF',fontWeight:'700'}}>
                                Read more 
                                <img src={arrow} className='ml-2' alt="" width='20px' />
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} >
                        <div className="footer_component">
                            <h1 className="footer_component_title" >Navigation</h1>
                            <ul className="footer_links">
                                <li>Home</li>
                                <li>About</li>
                                <li>Pricing</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} >
                        <div className="footer_component">
                            <h1 className="footer_component_title" >Categories</h1>
                            <ul className="footer_links">
                                <li>Privacy policy</li>
                                <li>Terms and conditions</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </Col>
                   
                </Row>
                <div className="copyRight">
                    <div className="left text-center">
                    Suprimo Station Gym — New York Gym
                    </div>
                    <div className="right text-center">
                        Copyright © 2022 Suprimo. All right reserved. (Made By Saba Khubashvili)
                    </div>
                </div>
            </Container>
        </React.Fragment>
    )
}