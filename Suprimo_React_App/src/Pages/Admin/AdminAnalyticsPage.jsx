import React from "react";
import AdminNavigation from '../../Components/Admin/Left/AdminNavigation'
import Analytics from "../../Components/Admin/Main/Analytics";
import Cookies from 'universal-cookie' 
import { Navigate } from "react-router-dom";


export default function AdminAnalyticsPage(){
    const Cookie = new Cookies();

    if(!Cookie.get('jwt_token')){
        return <Navigate to="/admin/login" />;
   }

   React.useEffect(()=>{
    scroll(0,0)
   },[])

    return(
        <React.Fragment>
            <div  className='mt-4 adminPage-container'>
                <AdminNavigation
                    active='analytics'    
                />
                <Analytics/>
            </div>
        </React.Fragment>
    )
}