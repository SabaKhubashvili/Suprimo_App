import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ApiUrl from "../../RestApi/ApiUrl/ApiUrl";
import AxiosRequest from "../../RestApi/AxiosRequest/AxiosRequest";

export default function Contact(){

    const [contactData,setContactData] = React.useState({
        name:'',
        email:'',
        phone:'',
        message:'',
        privacyPolicy:false
    })

    const [requestStatus,setRequestStatus] = React.useState('');

    function handleChange(e){
        const {name,value,type,checked} = e.target;
        setContactData(prevData =>{
           return{
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
           }

        })
    }
    function submitForm(e){
        e.preventDefault();
        
        AxiosRequest.postRequest(ApiUrl.storeMessage,contactData,{
            name:FormData.name,
            email:FormData.email,
            phone:FormData.email,
            message:FormData.message
        }).then(res=>{
            setRequestStatus(res.data.message)
        }).catch(error=>{
            console.log(error);
        })
    }
    



    return(
        <Container className="contactUs_container py-3" id='Contact'>
            <div className="AboutUs_MainTitle">
                Contact
            </div>
            {requestStatus && <div className="alert alert-success">{requestStatus}</div>}
            <form action="" onSubmit={submitForm}>
                    <Row>
                        <Col lg={4} md={4} sm={12} >
                            <div className="input_component">
                                <label htmlFor="name" className="contactUs_label mt-4"> Enter Name <span className="contactUs_label_dot">*</span></label>
                                <input type="text" name='name' placeholder="Your Name And Surname"  className="contactUs_input" required onChange={handleChange} />
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12} >
                            <div className="input_component">
                                <label htmlFor="email" className="contactUs_label mt-4"> E-mail <span className="contactUs_label_dot">*</span></label>
                                <input type="email" name='email' placeholder="Your e-mail"  className="contactUs_input" required onChange={handleChange}/>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12} >
                            <div className="input_component">
                                <label htmlFor="number"  className="contactUs_label mt-4">Phone Number <span className="contactUs_label_dot">*</span></label>
                                <input type="text" name='phone' placeholder="Your phone number" className="contactUs_input" required onChange={handleChange}/>
                            </div>
                        </Col>
                    </Row>
                    <div className="input_component">
                        <label htmlFor="message" className="contactUs_label mt-4">Message <span className="contactUs_label_dot">*</span></label>
                        <input type="textarea" name='message' placeholder="Enter message" className="contactUs_input" style={{height:'300px'}} required onChange={handleChange}/>
                    </div>

                    <div className="contactUs_sendMessage py-4" style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
                        <div className="checkboxDiv py-3">
                            
                            <input type="checkbox" name="privacyPolicy" id="" required onChange={handleChange}/>
                            <label htmlFor="privacyPolicy" className="blog_subTitle mx-3 privacyPolicy_checkbox_label" style={{width:'auto'}} >I agree to privacy policy</label>
                            
                        </div>
                        <div className="sendButtonDiv py-3">
                        <button className="topBanner_ReadMore " style={{alignSelf:'right'}}>Send Message</button>
                        </div>
                    </div>
                </form>
        </Container>
    )
}