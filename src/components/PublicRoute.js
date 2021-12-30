import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

// Defining a component that reduces confusion by redirecting 
// authenticated users to the profile page when they land on the login page

export default function PublicRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth()

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Redirect to="/profile" /> : <Component {...props} />
            }}
        >

        </Route>
    )
}
