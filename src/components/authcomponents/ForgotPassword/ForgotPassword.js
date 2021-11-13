import React, { useRef, useState } from "react"
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

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions!")
        } catch {
            setError("Failed to reset password.")
        }

        setLoading(false)
    }

    return (
        <>
            <ForgotSec>
                <Heading>Password Reset</Heading>
                {error && [error]}
                {message && [message]}
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