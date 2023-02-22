import React from "react";
import { Col, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Arrow from '../../assets/SVG/topBannerArrow.svg'
import ArrowDown from '../../assets/SVG/ArrowDown.svg'

export default function TopBanner (props){

    function scrollOnClick(){

       window.scroll(0,1000)
    }

    return(
        <React.Fragment>
            <Container fluid={true} className='topBanner' style={{height:'700px',position:'relative',top:'0',zIndex:'10',backgroundImage:`url(${props.topBannerBackground})`}} id='topBanner'>
                <Col className="topBanner_content">
                    <div className="topBanner_topTitle">{props.topTitle}<div className="topTitle_Line"></div></div>
                    <h1 className="topBanner_title">{props.title}</h1>
                    <p>{props.description}</p>
                   {props.readMore  ? <Link to='sign_in' className="topBanner_ReadMore ">Read More  <img src={Arrow} alt="" width='30px'  />  </Link> : '' } 

                    <div className="mx-auto d-flex mt-5" style={{justifyContent:'center',cursor:'pointer'}} onClick={scrollOnClick} ><img src={ArrowDown} alt="" width='40px' /></div>
                </Col>

                <div className="overlay"></div>
            </Container>

        </React.Fragment>
    )
}