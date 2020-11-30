import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import ProtectedRoute from '../../routes/ProtectedRoute'
import Dashboard from '../partials/Dashboard'
import SideNav from '../partials/SideNav'
import Assignment from './Assignment'
import Profile from './Profile'

function Mainpage(props) {
  

  // useEffect(() => {
  //   Axios.get('/student/check')

  //   .catch(err => {

  //     localStorage.clear()
  //     props.history.push('/registeration')
   
      
  //   })
  // })
    
    return (
   <BrowserRouter>
    <Container style={{padding:0}} className='dashboard' fluid>
                
                <SideNav {...props} />
      <div className='activity-area'>
        
        <Route    path='/mainpage' render={(props) => <Redirect to='/mainpage/dashboard' />} />
        <Route    path='/mainpage/dashboard' component={Dashboard}/>
        <Route    path='/mainpage/add-submission' component={Assignment} />
        <Route    path='/mainpage/profile' component={Profile} />

        
      </div>
      
            </Container>
   </BrowserRouter>
           
        
    )
}


export default Mainpage