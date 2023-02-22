import React from "react";

import AllOrders from "../../Components/Admin/Orders/AllOrders";
import AdminNavigation from '../../Components/Admin/Left/AdminNavigation'

import { Container } from "react-bootstrap";
import Cookies from 'universal-cookie'
import { Navigate } from "react-router-dom";

export default function AdminOrdersPage(){
    
    const Cookie = new Cookies();

    React.useEffect(()=>{
        scroll(0,0)
       },[])

       if(!Cookie.get('jwt_token')){
        return <Navigate to="/admin/login" />;
   }


    return(
        <React.Fragment>
            <div className="adminPage-container mt-4">
                
            <AdminNavigation
                active='orders'
            />
            <AllOrders/>

            </div>

        </React.Fragment>
    )
}