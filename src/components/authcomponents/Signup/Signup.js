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

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            toast.error("Passwords do not match!")
            return null;
        }

        try {
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
            toast.success("Account created successfully.")
        } catch {
            toast.error("Failed to create an account :(")
        }
        setLoading(false)
    }

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <SignupSec>
                <Heading>Welcome to ROBO CS!</Heading>
                <SignupCard>
                    <SignupForm onSubmit={handleSubmit}>
                        <SignupInput type="email" ref={emailRef} placeholder="email" required />
                        <SignupInput type="password" ref={passwordRef} placeholder="password (6+ characters)" required />
                        <SignupInput type="password" ref={passwordConfirmRef} placeholder="confirm password" required />
                        <ButtonWrapper>
                            <Button big wide disabled={loading} type="submit">
                                Sign up
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

