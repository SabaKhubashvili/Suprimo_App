import React from "react";
import { Container } from "react-bootstrap";
import profileImage from '../../../assets/AdminImages/DefaultProfileImage.jpg'

export default function RecentUpdates(){


    return(
        <React.Fragment>
            <h1 className="mb-4">Recent Updates</h1>
            <Container fluid={true} style={{backgroundColor:'#FFF',height:'350px',borderRadius:'20px',padding:'30px 10px'}}>
                
                <div className="update">

                  

                    <div className="info"> 

                     <div className="imgContainer" style={{width:'50px'}}>
                        <img src={profileImage} width='100%' style={{borderRadius:'50px'}} alt="" />
                    </div>
                        <div className="name ml-3">Tony Stark</div>

                        <span className="info_description">
                            Rescieved his order of Astronaut Jacket
                        </span>
                        
                    </div>
                    <p className="mt-3 ml-2" >2 minutes ago</p>
                </div>
                <div className="update">
                  

                    <div className="info"> 

                     <div className="imgContainer" style={{width:'50px'}}>
                        <img src={profileImage} width='100%' style={{borderRadius:'50px'}} alt="" />
                    </div>
                        <div className="name ml-3">Tony Stark</div>

                        <span className="info_description">
                            Rescieved his order of Astronaut Jacket
                        </span>
                        
                    </div>
                    <p className="mt-3 ml-2" >2 minutes ago</p>
                </div>
            </Container>
        </React.Fragment>
    )
}