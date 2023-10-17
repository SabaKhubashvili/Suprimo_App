import React from "react";
import {Link} from 'react-router-dom'
import {Container,Navbar,NavDropdown,Nav,NavLink} from 'react-bootstrap'
import HamburgerSVG from '../assets/SVG/Hamburger.svg'
import Arrow from '../assets/SVG/Arrow.svg'

export default function NavbarComp(props){
    const [isScrolled,setIsScrolled] = React.useState(false);


    React.useEffect(()=>{
      window.addEventListener('scroll',handleScroll)
    },[])
   
    function handleScroll(){
      if(window.scrollY > 100){
        setIsScrolled(true)
      }else{
        setIsScrolled(false);
      }
    }

    


    return(
      <React.Fragment>
              <Navbar bg='' fixed="top" className={isScrolled == true ? 'Navbar_scrolled py-3' : 'Navbar_transparent py-2'}   style={{padding:'10px 0'}} expand="lg" >
                <Container className="navbar_container">
                  <Link to="/"><Navbar.Brand className="nav_logo">Suprimo</Navbar.Brand></Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto d-flex" style={{alignItems:'center'}}>
                      <Link to={props.adminPage == true ? '/admin' : '/'} className="nav-link">{props.adminPage == true ? 'Admin Home' : 'Home'}</Link>
                      <Link to={props.adminPage == true ? '/admin/add' : '/AboutUS'} className="nav-link">{props.adminPage == true ? 'Add':'About Us'}</Link>
                      {!props.adminPage  ? 
                      <div className="navRest d-flex" style={{alignItems:'center'}}>
                      <Link to='/Pricing' className="nav-link"> Pricing</Link>
                      <Link to='/JobListing' className="nav-link"> Jobs </Link>
                      <Link to='/Blogs' className="nav-link"> Blog</Link>
                      <a href='#Contact' className="nav-link topBanner_ReadMore " style={{width:'200px'}}> Contact <img src={Arrow} width='20px' alt="" /> </a>
                      </div>
                      : '' }
                      

                    </Nav>
                  </Navbar.Collapse>
                </Container>
          </Navbar>
        
      </React.Fragment>
    )
}   
