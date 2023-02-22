import React from "react"
import AllJobs from "../Components/AllJobs/AllJobs";
import TopBanner from "../Components/TopBanner/TopBanner";

import topBannerImage from '../assets/Images/Banner/JobsBanner.jpg'

import NavbarComp from "../Common/NavbarComp"
import Bottom from "../Common/Footer/Bottom"

export default function JobsPage(){


    return(
        <React.Fragment>
            <NavbarComp/>

            <TopBanner 
                topTitle='Jobs'
                title='Here you can see our vacancies'
                topBannerBackground={topBannerImage}
                description='Suprimo Gym is now hiring! We are looking for energetic and passionate individuals to join our team. Our state-of-the-art gym offers a wide range of workout equipment, group classes, and personalized training sessions to our members.'
            />
            <AllJobs/>

            <Bottom/>
        </React.Fragment>
    )
}