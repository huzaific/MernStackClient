import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form , Button , Col , Card, Row, Container, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import keyImage from '../../images/key.png'
 function Login(props) {

    console.log(props)

    const[rollNo , setRollNo] = useState('')
    const[password , setPassword] = useState('')
    const[error , setError] = useState(false)
    
    const [disabled , setDisabled] = useState(false)


    useEffect(()=>{
        setError(false)
    },[rollNo,password])
    


    const handleLogin =  (e) => {

    e.preventDefault()

    setDisabled(true)
        Axios.post('/student/login' , {
            rollNo,
            password
        })
        .then(response => {

            const user = response.data.user
            
            const student = JSON.stringify(user)
            localStorage.setItem('isLoggedIn' , true)
            localStorage.setItem('student', student)
            setError(false)
            setDisabled(false)
            props.history.push('/mainpage')

        })
        .catch(err => {
            setError(true)
            setDisabled(false)
        }) 
    }

    const errorMessage = error?
    (
        <Alert variant={'danger'}>
            Login Failed... Try again
        </Alert>
    )
    :
    (
        null
    )


    return (
    
        <Container fluid className='login-signup'>
 
    <Row className='login-signup-headings'>
        <Col>
        <Card.Title>Login To Your Portal</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Enter your Roll Number and Password to Login</Card.Subtitle>
        </Col>

        <Col style={{textAlign:'center'}} xl={"auto"} sm={12}>
            <img src={keyImage} style={{
                width:'50px',
                height:'60px'
            }}/>
        </Col>

    </Row>

    
    <Row className='login-signup-form'>
        <Col>
        
<Form onSubmit={handleLogin}>

<Form.Group controlId="formBasicPassword">

  <Form.Control onChange={(e) => setRollNo(e.target.value)} type="text" placeholder="Roll No" />
</Form.Group>
<Form.Group controlId="formBasicCheckbox">
  <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
</Form.Group>
<Form.Group>
 {
errorMessage
 }
</Form.Group>
<Button variant="primary" type="submit" block disabled={disabled}>
  Login
</Button>
</Form>
        </Col>
    </Row>
        </Container>
    )
}


export default Login