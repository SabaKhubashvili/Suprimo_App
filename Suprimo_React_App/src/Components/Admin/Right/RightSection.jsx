import React from "react";
import RecentUpdates from "./RecentUpdates";
import SalesAnalytics from "./SalesAnalytics";


export default function RightSection(){

    return(
        <React.Fragment>
            <div className="right" style={{marginTop: '120px'}}>        
                <RecentUpdates/>
                <SalesAnalytics/>
            </div>

        </React.Fragment>
    )
}