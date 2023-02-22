import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

import AxiosRequest from "../../RestApi/AxiosRequest/AxiosRequest";
import ApiUrl from "../../RestApi/ApiUrl/ApiUrl";

import Cookies from "universal-cookie";
import jwt from "jwt-decode";




export default function AdminLoginPage(){
    const Cookie = new Cookies();
    const navigate = new useNavigate();

    if(Cookie.get('jwt_token')){
        return <Navigate to='/admin' />
    }
    const [formData,setFormData] = React.useState({
      email:'',
      password:'',
      
    })
  
    function handleChange(e){
      const {name,value} = e.target;

      setFormData((prevData)=>{
        return{
          ...prevData,
          [name]:value
        }
      })
    }
    
  
    function handleSubmit(e) {
      e.preventDefault();

      AxiosRequest.postRequest(ApiUrl.loginUrl,formData)
                  .then(res=>{
                    
                    const decoded = jwt(res.data.token);
                    
                    Cookie.set('jwt_token',res.data.token,{
                      expires: new Date(decoded.exp * 1000)
                    })
                    navigate('/admin')

                    
                   

                  })
                  .catch(err=>{

                    setFormData((prevData) => {
                      return{
                        ...prevData,
                        message:err.response.data.message
                      }

                    });

                  })
    }
    
    React.useEffect(()=>{
      scroll(0,0)
     },[])

    return (
      <React.Fragment>
        <Container className='Login_Container' >
          <h1 className="login_title  text-center" >Admin Login</h1>
          {formData.message && <div className="alert alert-danger" >{formData.message}</div>}
          <form onSubmit={handleSubmit} action="" method='post' style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <div className="login-form-component">
              <label htmlFor="email" >Enter Email</label>
              <input type="email" name='email' placeholder="Email" onChange={handleChange} />
            </div>
            <div className="login-form-component">
              <label htmlFor="email" >Enter password</label>
              <input type="password" name='password' placeholder="Password" onChange={handleChange} />
            </div>
            <div className="login-form-submit">
              <button className="mt-4">Log In</button>
            </div>
          </form>
        </Container>
      </React.Fragment>
    );
}