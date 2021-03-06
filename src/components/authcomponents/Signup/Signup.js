import React, { useRef, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "../../../globalStyles";
import { useAuth } from "../../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import {
    SignupForm,
    SignupInput,
    SignupSec,
    SignupCard,
    Heading,
    LinkWrapper,
    ButtonWrapper,
} from "./Signup.elements";

// See above, IA - Key Elements: File Input/Output:
// Importing React, hooks, components, and a library called React-Hot-Toast

// Creating a component for signing up
export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    // Defining a function to run on submission of the form
    async function handleSubmit(e) {
        e.preventDefault()

        // IA - Key Algorithms: 
        // Sending an error message if the password and password confirmation do not match
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            toast.error("Passwords do not match!")
            return null;
        }

        try {
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/profile")
            toast.success("Account created successfully.")
        } catch {
            // IA - Key Algorithms: 
            // Sending an error message if the account cannot be created
            toast.error("Failed to create an account :(")
        }
        setLoading(false)
    }

    return (
        <>
            {/* Adding a "Toaster" for error messages at the top of the component*/}
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
            {/* Creating the rest of the component's display using imported elements*/}
            <SignupSec>
                <Heading>Welcome to ROBO CS!</Heading>
                <SignupCard>
                    <SignupForm onSubmit={handleSubmit}>
                        <SignupInput type="email" ref={emailRef} placeholder="email" required />
                        <SignupInput type="password" ref={passwordRef} placeholder="password (6+ characters)" required />
                        <SignupInput type="password" ref={passwordConfirmRef} placeholder="confirm password" required />
                        <ButtonWrapper>
                            <Button big wide disabled={loading} type="submit">
                                SIGN UP
                            </Button>
                        </ButtonWrapper>
                    </SignupForm>
                </SignupCard>
                <LinkWrapper>
                    Already have an account? <Link to="/login">Log in</Link>
                </LinkWrapper>
            </SignupSec>
        </>
    )
}

