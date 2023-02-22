import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import blogImage from '../../assets/Images/Blog/blogPost_1_adds.jpg';
import SingleBlog_side from "../SingleBlog_side/SingleBlog_side";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Blog(){

    React.useEffect(()=>{
        window.scroll(0,0)
    },[])

    const {blogID} = useParams();

    console.log(blogID)


    return(
        <React.Fragment>
            <Container style={{marginTop:'50px'}} className='single_blog_container' >
                <Row>
                    <Col lg={6} md={6} sm={12} >
                        <div className="blog_description" >
                             <h1 className="single_blog_title" style={{width:'100%',maxWidth:'100%'}} >Take care of your health with our exercise plans</h1>
                             <p className="pricing_desc" style={{width:'100%',maxWidth:'100%'}}>We have been creating and implementing projects for many years all over the world, we have hundreds of satisfied customers. Our specialists take care of your form and they will check and talk to you if you have any questions during the execution of the exercise plans.</p>
                             <ul className="single_blog_ul">
                                <li>Experience</li>
                                <li>Coach trainer</li>
                                <li>Nutritional diet</li>
                             </ul>
                             <p className="pricing_desc" >If you are looking for a job and want to join our group, we are constantly recruiting new employees for the indicated positions.</p>
                             <div className="single_blog_imageContainer mt-5 pb-5" style={{width:'100%',borderBottom:'1px solid #412E59'}}>
                                <img src={blogImage} alt="" style={{width:'100%'}}/>
                             </div>
                             <h1 className="single_blog_title py-5" >Coach Trainer</h1>
                             <p className="pricing_desc" style={{width:'100%',maxWidth:'100%'}} >Our personal trainers are available for you, you can send an inquiry at any time or call your trainer. Use the price list and choose the right plan for you.</p>
                            
                            <div className="single_blog_bottomtext">
                            So many people have already trusted us. This number is constantly growing thanks to the positive feedback from our customers. - CEO Suprimo
                            </div>

                            <div className="social_links d-flex" style={{width:'100%'}}>
                                <div className="social_link">
                                    <FontAwesomeIcon icon={faFacebook}   />
                                </div>
                                <div className="social_link">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <div className="social_link">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} >
                        <h1 className="single_blog_title pb-5">Other Blogs</h1>
                        <SingleBlog_side/>
                        <SingleBlog_side/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}