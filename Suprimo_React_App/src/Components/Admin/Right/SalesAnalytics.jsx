import React from "react";
import ShoppingCartSvg from '../../../assets/AdminSvg/ShoppingCartSvg.svg'

export default function SalesAnalytics(){

    return(
        <React.Fragment>
            <h1 className="mt-5">Sales Analytics</h1>
            
                <div className="analytics mt-3">
                    <div className="analytic my-3" style={{flexDirection:'row'}}>
                        <div className="img_container" style={{width:'50px'}}>
                            <img src={ShoppingCartSvg} className='w-100' alt="" />
                        </div>
                        <div className="name">
                            <h6>Online Orders</h6>
                            <p className="text-muted" >Last 24h</p>
                        </div>
                        <div className="precentage">
                            +25%
                        </div>
                        <div className="number">
                            3842
                        </div>
                    </div>  
                </div>
                <div className="analytics mt-3">
                    <div className="analytic my-3"  style={{flexDirection:'row'}}>
                        <div className="img_container" style={{width:'50px'}}>
                            <img src={ShoppingCartSvg} className='w-100' alt="" />
                        </div>
                        <div className="name">
                            <h6>Online Orders</h6>
                            <p className="text-muted" >Last 24h</p>
                        </div>
                        <div className="precentage">
                            +25%
                        </div>
                        <div className="number">
                            3842
                        </div>
                    </div>  
                </div>
        </React.Fragment>
    )
}