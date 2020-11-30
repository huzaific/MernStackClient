import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isLoggedIn } from '../Utils/Common'

export default function PublicRoute({component , ...rest}) {

    const Component = component

    return (
        <Route
          {...rest}
          render={(props) =>
            isLoggedIn() === 'false' || isLoggedIn() === null ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/mainpage",
                  state: { from: props.location }
                }}
              />
            )} />
            
    )
            }
