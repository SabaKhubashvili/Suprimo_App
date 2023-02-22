import React from "react";
import { Link } from "react-router-dom";
import blogPostImage_side from '../../assets/Images/Blog/blogPost_1.jpg'


export default function SingleBlog_side(){


    return(
        <React.Fragment>
            <div className="blog_side_single my-5 d-flex py-5 " style={{justifyContent:'center',alignItems:'center',borderTop:'1px solid #412E59',borderBottom:'1px solid #412E59'}}  >
             <div className="single_blog_image_side" style={{width:'30%',maxWidth:'30%'}} > 
                <img src={blogPostImage_side} alt="" style={{width:'100%',borderRadius:'50px'}} /> 
            </div>
            <div className="single_blog_description">
                <div className="single_blog_type">Training</div>
                <div className="single_blog_title">
                    <Link to='/blog/2' style={{textDecoration:'none',color:'#FFF'}}> How to stay fit in winter?</Link> 
                </div>
                <div className="single_blog_desc">
                    In this article, we will show you tips on how to stay in shape during the winter. Check and share!
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}