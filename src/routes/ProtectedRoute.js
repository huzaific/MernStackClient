import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getStudent, isLoggedIn } from '../Utils/Common'

export default function ProtectedRoute({component , ...rest}) {

    const Component = component

    const [loggedIn , setLoggedIn] = useState(null)

    useEffect(() => {
      Axios.get('/student/check')
      .then(response => {

        setLoggedIn(true)

      })
      .catch(err => {
        setLoggedIn(false)
      })
    },[])
    

    return (
        <Route
        
          {...rest}
          render={(props) => {

            if(loggedIn){
              return <Component {...props} />

            }else if(!loggedIn){
              <Redirect
                  to={{
                    pathname: "/registeration",
                    state: { from: props.location }
                  }}
                />
            }else{
              return <h1>Loading</h1>
            }

           
            // return isLoggedIn() === 'true' ? (
            //   <Component {...props} />
            // ) : (
            //   <Redirect
            //     to={{
            //       pathname: "/registeration",
            //       state: { from: props.location }
            //     }}
            //   />
            // )
            


          }} />
            
)
}
