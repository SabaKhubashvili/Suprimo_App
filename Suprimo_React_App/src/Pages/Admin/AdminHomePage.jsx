import React from "react";
import { Navigate, useLocation } from 'react-router-dom';
import Cookies from "universal-cookie/cjs/Cookies";

import NavbarComp from "../../Common/NavbarComp";
import Bottom from "../../Common/Footer/Bottom";

import AdminStyle from '../../css/AdminStyle.css'

import AdminNavigation from "../../Components/Admin/Left/AdminNavigation";
import { Container } from "react-bootstrap";
import Dashboard from "../../Components/Admin/Main/Dashboard";
import RightSection from "../../Components/Admin/Right/RightSection";


export default function AdminHomePage(){

    
    const Cookie = new Cookies();

       if(!Cookie.get('jwt_token')){
            return <Navigate to="/admin/login" />;
       }

       React.useEffect(()=>{
        scroll(0,0)
       },[])


    return(
        <React.Fragment>
            <Container fluid={true} className='mt-4 full-container'>

            <AdminNavigation
                active='home'
            />

            <Dashboard/>
            
            <RightSection/>

            </Container>

            
            

            
        </React.Fragment>
    )
}

