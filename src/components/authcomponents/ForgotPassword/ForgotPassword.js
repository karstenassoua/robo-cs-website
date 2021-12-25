import React, { useRef, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "../../../globalStyles";
import { useAuth } from "../../../contexts/AuthContext"
import { Link } from "react-router-dom"
import {
    ForgotForm,
    ForgotInput,
    ForgotSec,
    ForgotCard,
    Heading,
    LinkWrapper,
} from "./ForgotPassword.elements";

// See above, IA - Key Elements: File Input/Output:
// Importing React, hooks, components, and a library called React-Hot-Toast for notifications

// Creating the password reset component 
export default function ForgotPassword() {
    // Creating Refs to hold data from input fields and a loading state
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [loading, setLoading] = useState(false)

    // Defining a function to be called on password reset form submit
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setLoading(true) // Sets Loading to true across the page
            await resetPassword(emailRef.current.value)
            // If all promises go through without errors, alert user
            toast("Check your inbox for further instructions!", { icon: "✈️"})
        } catch {
            // IA - Key Algorithms: Sending an error message
            // If there are errors, alert user that the update failed
            toast.error("Failed to reset password—check if your email is correct.")
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
            <ForgotSec>
                <Heading>Password Reset</Heading>
                <ForgotCard>
                    <ForgotForm onSubmit={handleSubmit}>
                        <ForgotInput type="email" ref={emailRef} placeholder="email" required />
                        <Button big wide disabled={loading} type="submit">
                            Reset Password
                        </Button>
                    </ForgotForm>
                    <LinkWrapper>
                        <Link to="/login">Login</Link>
                    </LinkWrapper>
                </ForgotCard>
                <LinkWrapper>
                    Need an account? <Link to="/signup">Sign Up</Link>
                </LinkWrapper>
            </ForgotSec>
        </>
    )
}