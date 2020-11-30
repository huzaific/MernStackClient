import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import profilePic from '../../images/huzaifa.jpg'
import axios from 'axios'
export default function SideNav(props) {

    let student = localStorage.getItem('student')
    student = JSON.parse(student)

    const logout = () => {

        axios.post('/student/logout')
        .then(res => {
            localStorage.setItem('isLoggedIn' , false)
            localStorage.setItem('student' , null)
            props.history.push('/')
        })
        .catch(err => {
            alert('Some problem occured')
        })
    

    }

    return (
        <div className='side-nav'>
            <Container style={{textAlign:'center'}} fluid>
            <Row>
            <Col />
            <div>
            <img src={`/${student.profilePicURL}`} />
            <div>
            <h4>{student.name.toUpperCase()}</h4>
            <h5 style={{color:'#747a76'}}>{student.rollNo}</h5>
            </div>
            </div>
            <Col />
            </Row>

            <Row>
            <Col />
            <div className='options'>
            <Link to='/mainpage/dashboard'>Dashboard</Link>
            <Link to='/mainpage/profile'>View Profile</Link>
            <Link to='/mainpage/add-submission'>Add Submission</Link>
            <a onClick={logout}>Logout</a>
            </div>
            <Col />
            </Row>


               

            </Container>
            
        </div>
    )
}
