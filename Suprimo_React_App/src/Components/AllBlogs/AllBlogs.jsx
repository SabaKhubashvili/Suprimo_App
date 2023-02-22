import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {Link} from 'react-router-dom'
import blogImage1 from '../../assets/Images/Blog/blogPost_1_adds.jpg'
import blogImage2 from '../../assets/Images/Blog/blogPost_2.jpg'
import blogImage3 from '../../assets/Images/Blog/blogPost_3.jpg'


export default function AllBlogs(){


    return(
        <React.Fragment>
             <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} className='mt-5'>
                        <Row  className='d-flex'>
                            <Col lg={3} md={4} sm={12}>
                        <div className="image_container" style={{width:'100%'}}>
                            <img src={blogImage1} className='w-100' style={{borderRadius:'10px',display:'inline !important'}} alt='blogImage' />
                        </div>
                        </Col>
                        <Col lg={9} md={8} sm={12}>
                            <div className="blog_description" >
                                <div className="blog_description_title">
                                    <Link to='/blog/1' style={{textDecoration:'none',color:'#FFF'}}> How to stay fit in winter?</Link> 
                                </div>
                                <p className="blog_subTitle w-100" style={{textAlign:'start'}}>
                                Proper nutrition provides our body with the complex of vitamins it needs and makes us feel better. In this article, we'll show you what to look for.
                                </p>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={12} md={12} sm={12} className='mt-5'>
                        <Row  className='d-flex'>
                            <Col lg={3} md={4} sm={12}>
                        <div className="image_container" style={{width:'100%',height:'100%'}}>
                                <img src={blogImage2} className='w-100' style={{borderRadius:'10px',display:'inline !important'}} alt='blogImage' />
                        </div>
                        </Col>
                        <Col lg={9} md={8} sm={12}>
                            <div className="blog_description" >
                                <div className="blog_description_title">
                                    <Link to='/blog/1' style={{textDecoration:'none',color:'#FFF'}}> Healthy Food</Link> 
                                </div>
                                <p className="blog_subTitle w-100" style={{textAlign:'start'}}>
                                Proper nutrition provides our body with the complex of vitamins it needs and makes us feel better. In this article, we'll show you what to look for.
                                </p>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={12} md={12} sm={12} className='mt-5'>
                        <Row  className='d-flex'>
                            <Col lg={3} md={4} sm={12}>
                        <div className="image_container" style={{width:'100%'}}>
                                <img src={blogImage3} className='w-100' style={{borderRadius:'10px',display:'inline !important'}} alt='blogImage' />
                        </div>
                        </Col>
                        <Col lg={9} md={8} sm={12}>
                            <div className="blog_description" >
                                <div className="blog_description_title">
                                    <Link to='/blog/1' style={{textDecoration:'none',color:'#FFF'}}> Famous bodybuilders from our gym</Link> 
                                </div>
                                <p className="blog_subTitle w-100" style={{textAlign:'start'}}>
                                Proper nutrition provides our body with the complex of vitamins it needs and makes us feel better. In this article, we'll show you what to look for.
                                </p>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
             </Container>
        </React.Fragment>
    )
}