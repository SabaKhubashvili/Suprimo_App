import React from "react"
import { BrowserRouter } from "react-router-dom"

import Router from './router/Router'


export default function(){
    return(
        <React.Fragment>
            <BrowserRouter>
              
                
                <Router />

         
            </BrowserRouter>
        </React.Fragment>
    )
}