import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import foodImage from '../../assets/Images/Background/food.jpg'
import blogImage1 from '../../assets/Images/Blog/blogPost_1.jpg'
import { Link } from "react-router-dom";

export default function SmallBlog(){

    return(
        <React.Fragment>
            <Container style={{marginTop:'150px'}} className='blog_container' id='Blog' >
                <div className="blog_title">
                    <div className="blog_MainTitle">
                        Discover our nutrition posts and blog tips
                    </div>
                    <div className="blog_subTitle">
                        We have been creating and implementing projects for many years all over the world, we have hundreds of satisfied customers.
                    </div>
                </div>

                <Row className="mt-5">
                    <Col lg={6} md={12} sm={12} data-aos='zoom-in-up'>
                        <div className="image_container">
                            <img src={foodImage} alt="" />
                        </div>
                        <div className="blog_description">
                            <div className="blog_description_title">
                                Healthy food
                            </div>
                            <div className="blog_subTitle" style={{textAlign:'start'}}>
                            Proper nutrition provides our body with the complex of vitamins it needs and makes us feel better. In this article, we'll show you what to look for.
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} data-aos='zoom-in-down' >
                        <Row>
                            <Col lg={12} md={12} sm={12} className='singleBlog' >
                                <div className="single_blog_image">
                                    
                                </div>
                                <div className="single_blog_description">
                                    <div className="single_blog_type">Training</div>
                                    <div className="single_blog_title">
                                      <Link to='blog/1' style={{textDecoration:'none',color:'#FFF'}}> How to stay fit in winter?</Link> 
                                    </div>
                                    <div className="single_blog_desc">
                                        In this article, we will show you tips on how to stay in shape during the winter. Check and share!
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={12} className='singleBlog'>
                                <div className="single_blog_image">
                                    
                                </div>
                                <div className="single_blog_description">
                                    <div className="single_blog_type">Training</div>
                                    <div className="single_blog_title">
                                    <Link to='blog/1' style={{textDecoration:'none',color:'#FFF'}}> How to stay fit in winter?</Link>
                                    </div>
                                    <div className="single_blog_desc">
                                        In this article, we will show you tips on how to stay in shape during the winter. Check and share!
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