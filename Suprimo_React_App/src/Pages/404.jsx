import React from "react";
import { Container } from "react-bootstrap";
import errorSvg from '../assets/Images/Background/error.png'

import NavbarComp from "../Common/NavbarComp"
import Bottom from "../Common/Footer/Bottom"

export default function Page404(){

    return(
        <React.Fragment>
            <NavbarComp/>

            <Container style={{marginTop:'150px',marginBottom:'150px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',flexWrap:'wrap'}}>
                <img src={errorSvg} alt="" width='100%' />
                <h1 className="title404 text-center">Page Not Found</h1>
            </Container>
            
            <Bottom/>

        </React.Fragment>
    )
}