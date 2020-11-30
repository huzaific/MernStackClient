import React, { useState } from 'react'
import penImage from '../../images/pem.png'
import { Form , Button , Col , Card, Row, Container, Modal } from 'react-bootstrap'
import Axios from 'axios'
export default function Signup(props) {
  
    const [name , setName] = useState('')
    const [lastName , setLastName] = useState('')
    const [rollNo , setRollNo] = useState('')
    const [password , setPassword] = useState('')
    const [contactNo , setContactNo] = useState(null)
    const [department , setDepartment] = useState('')
    const [profilePic , setProfilePic] = useState(null)

    const{show , setShow} = props

    const signUpStudent = (e) => {

      e.preventDefault()
      const form = new FormData()
      form.append('name' , name)
      form.append('lastName' , lastName)
      form.append('rollNo', rollNo)
      form.append('password' , password)
      form.append('contactNo' , contactNo)
      form.append('department' , department)
      form.append('profilePic' , profilePic)

      Axios({
        method:'POST',
        url:'/student/signup',
        data:form

      })
      .then(response => {
       return Axios.post('/student/login' , {

          rollNo,
          password
      })
      })
      .then(response => {

        const user = response.data.user
        const student = JSON.stringify(user)
        localStorage.setItem('isLoggedIn' , true)
        localStorage.setItem('student', student)
        props.history.push('/mainpage')
        
      })
      .catch(err => {
        alert('Something went wrong')
    }) 


    }
  
  
      
    
  
    return(

      <Modal show={show} onHide={() => setShow(false)} >
 <Container className='login-signup'>
              <Row className='login-signup-headings signup-headings'>
        <Col>
        <Card.Title>Register Yourself</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Do not have your student account yet no worry.</Card.Subtitle>
        </Col>

        <Col style={{textAlign:'center'}} xl={"auto"} sm={12}>
            <img src={penImage} style={{
                width:'50px',
                height:'60px'
            }}/>
        </Col>

    </Row>

    
    <Row className='login-signup-form signup-form'>
        <Col>
        
<Form>
<Form.Group controlId="formBasicPassword">
  <Form.Control onChange={(e) => setName(e.target.value)}  type="text" placeholder="Name" />
</Form.Group>
<Form.Group controlId="formBasicPassword">
  <Form.Control onChange={(e) => setLastName(e.target.value)}  type="text" placeholder="Last Name" />
</Form.Group>
<Form.Group controlId="formBasicPassword">
  <Form.Control onChange={(e) => setRollNo(e.target.value)} type="text" placeholder="Roll No" />
</Form.Group>
<Form.Group controlId="formBasicCheckbox">
  <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
</Form.Group>
<Form.Group controlId="formBasicPassword">
  <Form.Control onChange={(e) => setContactNo(e.target.value)} type="text" placeholder="Contact No" />
</Form.Group>
<Form.Group controlId="formBasicPassword">
  <Form.Control onChange={(e) => setDepartment(e.target.value)} type="text" placeholder="Department" />
</Form.Group>
<Form.Group>
    <Form.File onChange={(e) => setProfilePic(e.target.files[0])} id="profilePic" label="Please Select A Profile Pic" />
  </Form.Group>
<Button onClick={signUpStudent} variant="primary" type="submit" block>
  Register
</Button>
</Form>
        </Col>


    </Row>
        </Container>
      </Modal>
       
    )
          }