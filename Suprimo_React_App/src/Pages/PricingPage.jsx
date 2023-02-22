import Aos from "aos";
import React from "react";
import Pricing from "../Components/Pricing/Pricing";
import TopBanner from "../Components/TopBanner/TopBanner";


import topBannerImage from '../assets/Images/Banner/PricingBanner.jpg'

import NavbarComp from "../Common/NavbarComp"
import Bottom from "../Common/Footer/Bottom"

export default function PricingPage(){

    React.useEffect(()=>{
        window.scroll(0,0)
        Aos.init({duration:1000})
    },[])

    return(
        <React.Fragment>
            <NavbarComp/>

            <TopBanner 
                topTitle='Pricing'
                title='Check prices here'
                description="Gym Suprimo is a premium fitness center that offers a variety of gymn equipment and amenities at competitive prices. With memberships starting at just $29.99 per month, Gym Suprimo provides value for money to fitness enthusias"
                topBannerBackground={topBannerImage}
            />
            <Pricing
                animation={true}
            />
            <Bottom/>
        </React.Fragment>
    )
}