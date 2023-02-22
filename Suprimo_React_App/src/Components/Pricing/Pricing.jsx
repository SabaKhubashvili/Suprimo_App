import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import DoneSVG from '../../assets/SVG/Done.svg'


export default function Pricing(){


    return(

        <React.Fragment>
            
            <Container className="pricing_container mt-5" id="Pricing" data-aos="fade-down">
                <Row className="pricing_row">
                    <Col lg={4} md={12} sm={12}>
                        <div className="pricing_single">
                            <div className="type">Standart</div>

                            <div className="price mt-4"><span>$29</span> / Month</div>

                            <p className="pricing_desc" >Package for beginners and less demanding customers. You can upgrade to a higher package at any time.</p>

                            <div className="features">
                                <div className="feature"> <img src={DoneSVG} alt="" width='20px' /> Personal Trainer</div>
                                <div className="feature"> <img src={DoneSVG} alt="" width='20px'  /> Dedicated Training Plan</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} >
                        <div className="pricing_single premium" style={{marginTop:'-12px'}}>
                            <div className="type">Premium</div>

                            <div className="price mt-4"><span>$49</span> / Month</div>

                            <p className="pricing_desc" >Package for beginners and less demanding customers. You can upgrade to a higher package at any time.</p>

                            <div className="features">
                                <div className="feature"> <img src={DoneSVG} alt="" width='20px' /> Personal Trainer</div>
                                <div className="feature"> <img src={DoneSVG} alt="" width='20px'  /> Dedicated Training Plan</div>
                                <div className="feature"> <img src={DoneSVG} alt="" width='20px'  /> Premium support for Diets</div>
                                <div className="feature"> <img src={DoneSVG} alt="" width='20px'  /> Access to nutrients</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} >
                        <div className="pricing_single">
                            <div className="type">Medium</div>

                            <div className="price mt-4"><span>$39</span> / Month</div>

                            <p className="pricing_desc" >Package for beginners and less demanding customers. You can upgrade to a higher package at any time.</p>

                            <div className="features">
                                <div className="feature"> <img src={DoneSVG} alt="" width='20px' /> Personal Trainer</div>
                                <div className="feature"> <img src={DoneSVG} alt="" width='20px'  /> Dedicated Training Plan</div>
                                <div className="feature"> <img src={DoneSVG} alt="" width='20px'  /> Premium support for Diets</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}