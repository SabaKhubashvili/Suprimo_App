import React from "react";
import AllBlogs from "../Components/AllBlogs/AllBlogs";
import TopBanner from "../Components/TopBanner/TopBanner";


import topBannerImage from '../assets/Images/Banner/BlogBanner.jpg'

import NavbarComp from "../Common/NavbarComp"
import Bottom from "../Common/Footer/Bottom"

export default function AllBlogsPage(){


    return(
        <React.Fragment>
            <NavbarComp/>

            <TopBanner
                topTitle='Blogs'
                title='Here you can check our latest blogs'
                topBannerBackground={topBannerImage}
                description="Welcome to the Suprimo Gym blog! Here, you'll find all the latest information about fitness, wellness, and healthy living. Whether you're a seasoned gym-goer or just starting your fitness journey, our blog has something for everyone."
            />
             <AllBlogs/>

             <Bottom/>
        </React.Fragment>
    )
}