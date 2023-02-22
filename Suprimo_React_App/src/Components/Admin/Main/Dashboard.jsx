import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import CalendarSvg from '../../../assets/AdminSvg/CalendarSvg.svg'
import InsightChartSvg from '../../../assets/AdminSvg/InsightChartSvg.svg'
import RecentOrders from "./RecentOrders";


export default function Dashboard(){


    return(
        <React.Fragment>
            <div className="mainContent">
                <h1>Dashboard</h1>
                <div className="date mt-3">
                    mm/ dd/ yyyy <img className="ml-2" src={CalendarSvg} width='30px' alt="" />
                </div>

                <div  className='mt-5 insights'>

                        
                                <div className="insight p-4">
                                    <div className="insight_logo ">
                                        <img src={InsightChartSvg} alt="" width='40px' />
                                    </div>
                                    <div className="insight_info mt-4">

                                        <div className="insight_money_info">
                                            <h6>Total Sales</h6>
                                            <div className="money pt-3">$25,201</div>
                                        </div>
                                        <div className="insight_chart">
                                            Chart
                                        </div>
                                    </div>
                                    <div className="time mt-2">
                                        24h ago
                                    </div>
                                </div>
                
                                <div className="insight p-4">
                                    <div className="insight_logo ">
                                        <img src={InsightChartSvg} alt="" width='40px' />
                                    </div>
                                    <div className="insight_info mt-4">

                                        <div className="insight_money_info">
                                            <h6>Total Sales</h6>
                                            <div className="money pt-3">$25,201</div>
                                        </div>
                                        <div className="insight_chart">
                                            Chart
                                        </div>
                                    </div>
                                    <div className="time mt-2">
                                        24h ago
                                    </div>
                                </div>
                    
                                <div className="insight p-4">
                                    <div className="insight_logo ">
                                        <img src={InsightChartSvg} alt="" width='40px' />
                                    </div>
                                    <div className="insight_info mt-4">

                                        <div className="insight_money_info">
                                            <h6>Total Sales</h6>
                                            <div className="money pt-3">$25,201</div>
                                        </div>
                                        <div className="insight_chart">
                                            Chart
                                        </div>
                                    </div>
                                    <div className="time mt-2">
                                        24h ago
                                    </div>
                                </div>
  
                </div>

                <RecentOrders/>
            </div>

        </React.Fragment>
    )
}