import React from "react";
import { Container } from "react-bootstrap";
import Contact from "../../Components/Contact/Contact";
import Footer from '../Footer/Footer';


export default function Bottom(){


    return(
        <React.Fragment>
            <Container fluid={true} className='bottom_container mt-5'>
                  <Contact/>
                  <Footer/>
            </Container>
        </React.Fragment>
    )
}