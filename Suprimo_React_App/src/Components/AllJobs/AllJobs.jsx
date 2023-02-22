import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Arrow from '../../assets/SVG/Arrow.svg'
import locationSvg from '../../assets/SVG/location.svg'
import clockSvg from '../../assets/SVG/clock.svg'

export default function AllJobs(){


    React.useEffect(()=>{
        window.scroll(0,0)
    },[])

    return(
        <React.Fragment>
            <Container>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
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

                                    <div className="topBanner_ReadMore mt-3" style={{cursor:'pointer',width:'80%'}}>ReadMore <img src={Arrow} alt="" width='20px' /> </div>
                                </div>
                        </Col>

                </Row>
            </Container>
        </React.Fragment>
    )
}    