import React from "react";
import { Container } from "react-bootstrap";
import ApiUrl from "../../../RestApi/ApiUrl/ApiUrl";
import AxiosRequest from "../../../RestApi/AxiosRequest/AxiosRequest";
import loader from '../../../assets/svg/loader.svg'

export default function  Messages(){

    const [messages,setMessages] = React.useState([])


        React.useEffect(()=>{
                AxiosRequest.getRequest(ApiUrl.getMessages)
                            .then(res => {
                                setMessages(res.data)
                              
                            }).catch(error =>{
                                console.log(error);
                            })
            
                },[])
    return(
        <React.Fragment>
            <Container  fluid={true}>
                <h1 className="my-5 text-center">Messages</h1>
                <table className="w-100 recentOrders_table text-center" >
                        <thead>
                            <tr>
                                <th className='customerName'>Customer Name</th>
                                <th className="customerEmail">Customer Email</th>
                                <th className="customerPhone" >Customer Phone</th>
                                <th className="">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                messages.map((message)=>{
                                    return(
                                        <tr key={message.id}>
                                            <td className='customerName'>{message.name}</td>
                                            <td className="customerEmail">{message.email}</td>
                                            <td className="customerPhone">{message.phone}</td>
                                            <td className=" ">{message.message}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table> 
                    { !messages[0] ?  
                        <div className='py-5 my-5'  ><img src={loader} className='d-flex mx-auto'  alt="" /></div> 
                    : '' }
            </Container>
        </React.Fragment>
    )
}