import React from "react";
import Cookies from 'universal-cookie'
import { Navigate, useLocation } from "react-router-dom";
import AdminNavigation from "../../Components/Admin/Left/AdminNavigation";
import Messages from "../../Components/Admin/Main/Messages";

export default function AdminMessagesPage(){

    const Cookie = new Cookies();
    
    if(!Cookie.get('jwt_token')){
        return <Navigate to="/admin/login" />;
   }
   

    return(
        <React.Fragment>
            <div className=" adminPage-container mt-4">
                <AdminNavigation
                    active='messages'
                />
                <Messages/>
            </div>
        </React.Fragment>
    )
}