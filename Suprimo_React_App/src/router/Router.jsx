import React from "react"
import {Routes,Route} from 'react-router-dom'
import Page404 from "../Pages/404"
import AboutPage from "../Pages/AboutPage"
import AdminAnalyticsPage from "../Pages/Admin/AdminAnalyticsPage"
import AdminHomePage from "../Pages/Admin/AdminHomePage"
import AdminLoginPage from "../Pages/Admin/AdminLoginPage"
import AdminMessagesPage from "../Pages/Admin/AdminMessagesPage"
import AdminOrdersPage from "../Pages/Admin/AdminOrdersPage"
import AllBlogsPage from "../Pages/AllBlogsPage"
import BlogPage from "../Pages/BlogPage"
import Home from "../Pages/Home"
import JobsPage from "../Pages/JobsPage"
import PricingPage from "../Pages/PricingPage"

export default function Router(){

  
    return(
        <React.Fragment>
             
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='AboutUs' element={<AboutPage/>} />
                        <Route path='Pricing' element={<PricingPage/>} />
                        <Route path='JobListing' element={<JobsPage />} />
                        <Route path='/Blogs' element={<AllBlogsPage/>} />
                        <Route path='/blog/:blogID' element={<BlogPage/>} />

                    
                            <Route path='admin/login' element={<AdminLoginPage/>} />
                            <Route path='admin' element={<AdminHomePage/>} />
                            <Route path='admin/orders' element={<AdminOrdersPage/>} />
                            <Route path='admin/analytics' element={<AdminAnalyticsPage/>} />
                            <Route path='admin/messages' element={<AdminMessagesPage/>} />

                        <Route path='*' element={<Page404/>} />
                    </Routes>
    
        </React.Fragment>
    )
}