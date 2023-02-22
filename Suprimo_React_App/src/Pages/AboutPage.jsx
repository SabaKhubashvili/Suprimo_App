import Aos from "aos";
import React from "react";
import AboutUs_page from "../Components/AboutUs_page/AboutUs_page";
import TopBanner from "../Components/TopBanner/TopBanner";

import topBannerImage from '../assets/Images/Banner/AboutUs.jpg'

import NavbarComp from "../Common/NavbarComp"
import Bottom from "../Common/Footer/Bottom"

export default function AboutPage(){

    React.useEffect(()=>{
        window.scroll(0,0)
        Aos.init({duration:1000})
    },[])

    return(
        <React.Fragment>
            <NavbarComp/>
            <TopBanner
             title='Who are we?' 
             topBannerBackground={topBannerImage}
             topTitle='Gym Station' 
             description='Suprimo Gym is a fitness center like no other. Our goal is to provide a welcoming and supportive environment where everyone, regardless of their fitness level, feels comfortable and motivated to reach their fitness goals.'
             readMore={false}
            />
            <AboutUs_page/>

            <Bottom />
        </React.Fragment>

    )
}