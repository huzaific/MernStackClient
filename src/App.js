import react, { useEffect, useState } from 'react'
import Registeration from './components/pages/Registeration'
import './styles.css'
import { Router , Route , Switch, BrowserRouter, Redirect} from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute'
import PublicRoute from './routes/PublicRoute'
import React, { Component } from 'react'
import Mainpage from './components/pages/Mainpage'
import { loadStudent } from './actions/studentActions'
import { connect } from 'react-redux'
import { getStudent } from './Utils/Common'
import Axios from 'axios'


function App(props) {

  

  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path='/' render={(props) => <Redirect to='/mainpage'/>}/>
    <PublicRoute path='/registeration' component={Registeration} />  
    <ProtectedRoute  component={Mainpage} path='/mainpage' />

    </Switch>
    </div>
    </BrowserRouter>
  )
}



export default App