import React, { useRef, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "../../../globalStyles";
import { useAuth } from "../../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import {
    LoginForm,
    LoginInput,
    LoginSec,
    LoginCard,
    Heading,
    LinkWrapper,
    ButtonWrapper,
} from "./Login.elements";

// See above, IA - Key Elements: File Input/Output:
// Importing React, hooks, components, and a library called React-Hot-Toast for notifications

// Creating the Login component 
export default function Login() {
    // Creating Refs to hold data from input fields
    const emailRef = useRef()
    const passwordRef = useRef()

    // Drawing data from the AuthContext & defining a loading state
    const { login } = useAuth()
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    // Defining a function to be called on login form submit
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setLoading(true) // Sets Loading to true across the page
            await login(emailRef.current.value, passwordRef.current.value)

            // If all promises go through without errors, navigate user to profile page and alert them
            history.push("/profile")
            toast.success("Successfully logged in.")
        } catch {
            // IA - Key Algorithms: Sending an error message
            // If there are errors, alert user that the update failed
            toast.error("Failed to log in. Make sure your email and password are correct.")
        }
        // No matter what, set Loading to false — we're ready to move on
        setLoading(false)
    }

    return (
        <>
            {/* Adding a "Toaster" for error messages at the top of the component*/}
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
            {/* Creating the rest of the component's display using styled components*/}
            <LoginSec>
                    <Heading>Welcome back!</Heading>
                    <LoginCard>
                        <LoginForm onSubmit={handleSubmit}>
                            <LoginInput type="email" ref={emailRef} placeholder="email" required />
                            <LoginInput type="password" ref={passwordRef} placeholder="password (6+ characters)" required />
                            <ButtonWrapper>
                                <Button big wide disabled={loading} type="submit">
                                    LOG IN
                                </Button>
                            </ButtonWrapper>
                        </LoginForm>
                        <LinkWrapper>
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </LinkWrapper>
                    </LoginCard>
                    <LinkWrapper>
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </LinkWrapper>
            </LoginSec>
        </>
    )
}