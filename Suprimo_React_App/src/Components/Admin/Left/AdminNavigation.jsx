import React from "react";

import DashboardSvg from '../../../assets/AdminSvg/DashboardSvg.svg'
import CustomerSvg from '../../../assets/AdminSvg/CustomerSvg.svg'
import OrdersSvg from '../../../assets/AdminSvg/OrdersSvg.svg'
import ChartSvg from '../../../assets/AdminSvg/ChartSvg.svg'
import LogoutSvg from '../../../assets/AdminSvg/LogoutSvg.svg'
import HamburgerSvg from '../../../assets/AdminSvg/HamburgerSvg.svg'
import MessagesSvg from '../../../assets/AdminSvg/MessagesSvg.svg'


import Cookies from "universal-cookie";
import { Link, useNavigate } from "react-router-dom";


export default function AdminNavigation({active}){
    React.useEffect(() => {
        document.body.style.backgroundColor = '#F6F6F9  ';
      }, []);
      
    const navigate= new useNavigate();
    
    const [showNavbar,setShowNavbar] = React.useState({
        isShown:false
    })

    function setNavbar(){
        setShowNavbar((prevData) => { 
            return{
                isShown: !prevData.isShown
            }
        } )
    }

    function logOut(){
        const cookies = new Cookies()
        cookies.remove('jwt_token',{path:'',domain:''});
        
        navigate('/')
    }

    return(
        <React.Fragment>
            <aside  className={showNavbar.isShown == false ? '  navbar_hidden' : 'navbar_shown'}  >
         
                <div className="logoContainer">
                    Suprimo
                </div>


            <div className="navbar  my-5"  >

                <Link to='/admin'>
                <div className={active == 'home' ? 'nav_component active' : 'nav_component'} >
                    <img src={DashboardSvg} width='25px' alt="" /> <span className="adminNavigation_names" > Dashboard </span>
                </div>
                </Link>

                <Link to='/admin/orders'>
                <div className={active == 'orders' ? 'nav_component active' : 'nav_component'} >
                  <img src={OrdersSvg} width='25px' className="mr-2" alt="" /> <span className="adminNavigation_names" > Orders</span> 
                </div>
                </Link>

                <Link to='/admin/analytics'>
                <div className={active == 'analytics' ? 'nav_component active' : 'nav_component'} >
                    <img src={ChartSvg} width='25px' className="mr-2" alt="" /><span className="adminNavigation_names" >  Analytics </span>
                </div>
                </Link>

                <Link to='/admin/messages'>
                <div className={active == 'messages' ? 'nav_component active' : 'nav_component'} >
                    <img src={MessagesSvg} width='25px' className="mr-2" alt="" /><span className="adminNavigation_names" >  Messages </span>
                </div>
                </Link>

                <div className="nav_component" onClick={logOut} >
                    <img src={LogoutSvg} width='25px' className="mr-2" alt="" /><span className="adminNavigation_names" >  Log Out </span>
                </div>
            </div>
            </aside>

            <div className="mobile_navigation py-4" style={{display:'none'}}>
                <img src={HamburgerSvg} onClick={setNavbar} width='35px' alt="" />
            </div>
        </React.Fragment>
    )
}