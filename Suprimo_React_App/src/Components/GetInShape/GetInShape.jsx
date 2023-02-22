import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import doneSVG from '../../assets/SVG/card_done.svg'
import Star from '../../assets/SVG/Featured_Star.svg'
import legPressImg from '../../assets/Images/Background/girl_legPress.avif'
import Arrow from '../../assets/SVG/Arrow.svg'
import CountUp from "react-countup";

export default function GetInShape(){

    return(
        <React.Fragment>
            <Container className="getInShape_Container" data-aos="zoom-in" >
                <Row>
                    <Col lg={5} md={12} sm={12}  >   
                        <div className="getInShape_information">
                            <div className="SVG"><img src={doneSVG} alt="" width='40px' /></div>

                            <div className="number">
                                <CountUp
                                 start={0}
                                 end={1400}
                                 duration={2}
                                />
                                +
                            </div>
                            <div className="review">
                                <img src={Star} width='20px' className="mx-1" alt=""/>
                                <img src={Star} width='20px' className="mx-1" alt=""/>
                                <img src={Star} width='20px' className="mx-1" alt=""/>
                                <img src={Star} width='20px' className="mx-1" alt=""/>
                                <img src={Star} width='20px' className="mx-1" alt=""/>
                            </div>

                            <div className="satisfied_customers">
                                <h2 className="my-4" >Satisfied customers</h2>

                                <p>So many people have already trusted us. This number is constantly growing thanks to the positive feedback from our customers.</p>
                            </div>
                            <div className="readMore">Read More <img src={Arrow} alt="" width='30px' /> </div>
                        </div> 
                    </Col>
                    <Col lg={7} md={12} sm={12} className='mt-5' >
                        <div className="getInShape_Image">
                            <div className="img" style={{width:'90%',marginLeft:'auto'}}>
                                <img src={legPressImg} width='100%' style={{borderTopRightRadius:'100px'}} alt=""/>
                            </div>

                            <div className="getInShape_Image_Description">
                                <h1>Get in shape and training at the gym or home.</h1>
                                <p>We have been creating and implementing projects for many years all over the world, we have hundreds of satisfied customers.</p>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}