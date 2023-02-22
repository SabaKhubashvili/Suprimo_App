import React from "react";
import { Container } from "react-bootstrap";


export default function AboutUs_page(){


    return(
        <React.Fragment>
            <Container className="AboutUs_container mt-5" >
                <div className="aboutUsFirst" data-aos='fade-left'>
                    <h1 className="AboutUs_title" >About Us</h1>
                    <p className="pricing_desc" style={{width:'100% !important'}} >Suprimo Gym is a fitness center like no other. 
                                                                                    Our goal is to provide a welcoming and supportive environment where 
                                                                                    everyone, regardless of their fitness level, feels comfortable and 
                                                                                    motivated to reach their fitness goals. We believe that fitness is 
                                                                                    not just about working out, but about creating a community of individuals
                                                                                    who support each other, challenge each other and have fun together.</p>
                </div>
                
                <div className="aboutUsSecond" data-aos='fade-right'>
                <h2 className="AboutUs_secondTitle" >About Gym</h2>
                <div className="pricing_desc">Our gym is equipped with state-of-the-art 
                                            equipment and staffed by knowledgeable and friendly trainers who are 
                                            passionate about helping our members achieve their best. Whether you're a 
                                            seasoned athlete or just starting your fitness journey, we've got you covered.
                                            We offer a wide range of classes, including yoga, kickboxing, strength training,
                                            and more, all designed to help you reach your goals in a fun and effective way.
                                            At Suprimo Gym, we believe that everyone should have access to the tools and support
                                            they need to lead a healthy and active life. That's why we offer flexible membership
                                            options, including affordable monthly plans, so that everyone can find the right fit
                                            for their budget and lifestyle.</div>
                </div>
                <div className="aboutUsThird" data-aos='fade-left'>
                <h2 className="AboutUs_secondTitle">Location and how to contact</h2>
                <p className="pricing_desc">Gym Suprimo located in Gldani Muxianis
                                            Gadasaxvevi is the perfect place for those looking for a 24/7 gym solution. With state-of-the-art
                                             equipment and a wide range of workout options, Gym Suprimo is ideal for anyone who wants to stay
                                              fit and healthy. Whether you're a seasoned athlete or
                                            just starting out, you'll find everything you need at this modern and well-equipped gym.</p>
                </div>
                <div className="map w-100">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7074.9406047691955!2d44.8103968469227!3d41.79284016651212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446c4913987dad%3A0x52dc5e4e087526b2!2sGldani%20Mall!5e0!3m2!1sen!2sge!4v1676226864822!5m2!1sen!2sge" 
                width="100%" height="450" style={{border:'none'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Container>
        </React.Fragment>
    )
}