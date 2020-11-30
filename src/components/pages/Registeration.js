import React, { useState } from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import Login from '../forms/Login'
import Signup from '../forms/Signup'

export default function Registeration(props) {

    const [show , setShow] = useState(false)

    return (
       <Container className='registeration-page' fluid>
           {/* <img
           className='background-img'
            src={backgroundImg}
            /> */}
          
            <Row className='headings'>
            <Col/>

            <div>
            <h2>Virtual Learning<small> Login or Register yourself</small></h2>
            <h5>Providing Best Services for students who are passionate about thier future and wants to evolve themselves.</h5>
            <h6>Regitser yourself now ... Be a part of great journey</h6>
            </div>
            <Col />
            </Row>


<Container>
<Row className='forms-container'>
            <Col />
                <Col sm={6}>
                    <div>
                    <Login {...props} />
                    <p style={{textAlign:'center'}}>Dont have your account yet <a onClick={()=>setShow(true)} href='#'>signup here</a></p>
                    </div>

                </Col>
            
            <Col />
              
                <Signup show={show} setShow={setShow} {...props} />
               
            </Row>
</Container>
           

           
       </Container>
      
    )
}
