import React from "react";
import { Helmet } from "react-helmet";
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

import MetadataImage from '../assets/Images/Blog/BlogPost_1_adds.jpg'

export default function Home(){
    React.useEffect(()=>{
        window.scroll(0,0)        
        Aos.init({duration:1000})
    },[])
    


    return(
        <React.Fragment>
           <Helmet>
                    <title>Suprimo Gym</title>
                    <meta name="description" content="Discover a healthier you at our state-of-the-art fitness center. Achieve your fitness goals with expert trainers, modern equipment, and diverse workout programs. Join us today and start your journey to a fitter, stronger, and happier you!" />
                    <meta property="og:title" content="Suprimo" />
                    <meta property="og:image" content={MetadataImage} />
                    <meta property="og:url" content={'https://suprimo.netlify.app'} />

                    <meta name="twitter:title" content="Suprimo" />
                    <meta name="twitter:image" content={MetadataImage} />
                </Helmet>
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