import React from "react";
import Blog from "../Components/Blog/Blog";
import TopBanner from "../Components/TopBanner/TopBanner";


import topBannerImage from '../assets/Images/Banner/blogPost_1.jpg'

import NavbarComp from "../Common/NavbarComp"
import Bottom from "../Common/Footer/Bottom"

export default function BlogPage(){

    return(
        <React.Fragment>
            <NavbarComp/>

            <TopBanner
                title='How to stay fit in winter?'
                description='
                In this article, we will show you tips on how to stay in shape during the winter. Check and share!'
                topTitle='Blog'
                topBannerBackground={topBannerImage}
            />
            <Blog />

            <Bottom/>
        </React.Fragment>
    )
}