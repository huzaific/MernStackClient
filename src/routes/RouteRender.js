import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function RouteRender(props) {

    const { Component , componentProps } = props

    const [loggedIn , setLoggedIn] = useState(null)

    useEffect(() => {

        Axios.get('/student/check')
        .then(response => {

            setLoggedIn(true)
        })
        .catch(err => {
            setLoggedIn(false)
        })

    } , [])


    if(loggedIn){
        return <Component {...componentProps} />
    }else if(!loggedIn){
        return <Redirect to='/registeration' />
    }else{
        return <h1>Checking User</h1>
    }

    
}

