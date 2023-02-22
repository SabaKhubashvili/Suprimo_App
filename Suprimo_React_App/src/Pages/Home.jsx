import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

import AboutUs from "../Components/AboutUs/AboutUs";
import Featured from "../Components/Featured/Featured";
import GetInShape from "../Components/GetInShape/GetInShape";
import JobListing from "../Components/JobListing/JobListing";
import Pricing from "../Components/Pricing/Pricing";
import TopBanner from "../Components/TopBanner/TopBanner";
import SmallBlog from "../Components/SmallBlog/SmallBlog";

import topBannerImage from '../assets/Images/Banner/topBanner.avif'

import NavbarComp from "../Common/NavbarComp"
import Bottom from "../Common/Footer/Bottom"

export default function Home(){
    React.useEffect(()=>{
        window.scroll(0,0)        
        Aos.init({duration:1000})
    },[])
    


    return(
        <React.Fragment>
            <NavbarComp/>
            
            <TopBanner  
            title='Take care of your health with our exercise plans.' 
            topBannerBackground={topBannerImage}
            topTitle='Gym Station' 
            description='We have been creating and implementing projects for many years all over the world, we have hundreds of satisfied customers.'
            readMore={true}
            />
            <Featured/>
            <GetInShape/>
            <Pricing
                animation={true}
            />
            <AboutUs/>
            <JobListing/>
            <SmallBlog/>

            <Bottom/>

        </React.Fragment>
    )
}