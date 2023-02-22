import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Star from '../../assets/SVG/Featured_Star.svg'
import Arrow from '../../assets/SVG/Arrow.svg'
import User from '../../assets/SVG/User.svg'
import Food from '../../assets/SVG/Food.svg'


export default function Featured(){



    return(

        <React.Fragment>
            <Container className="Featured"  >
                <Row className="featured_full_Container" >
                    
                    <Col lg={4} md={12} sm={12} className='featured_col'>
                        <div className="featured_container featured_first">
                    <div className="SVG">
                        <img src={Star} width='30px' alt=""  />
                        </div>

                        <h1 className="mt-5">Expreience</h1>

                        <p className="my-4  ">Our specialists take care of your form and they will check and talk to you if you have any questions during the execution of the exercise plans.</p>

                        <div className="readMore mt-2">Read More <img src={Arrow} alt="" width='30px' /> </div>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className='featured_col'>
                    <div className="featured_container featured_second">
                    <div className="SVG" >
                        <img src={User} width='30px' alt="" />
                    </div>

                        <h1 className="mt-5">Coach trainer</h1>

                        <p className="my-4">Our personal trainers are available for you, you can send an inquiry at any time or call your trainer. Use the price list and choose the right plan for yo</p>

                        <div className="readMore mt-2">Read More <img src={Arrow} alt="" width='30px' /> </div>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className='featured_col'>
                    <div className="featured_container">
                    <div className="SVG">
                        <img src={Food} width='30px' alt=""  />
                        </div>

                        <h1 className="mt-4">Nutritional diet</h1>

                        <p className="my-4">Our specialists take care of your form and they will check and talk to you if you have any questions during the execution of the exercise plans.</p>

                        <div className="readMore mt-2">Read More <img src={Arrow} alt="" width='30px' /> </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </React.Fragment>
    )
}