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

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setLoading(true)
            await resetPassword(emailRef.current.value)
            toast("Check your inbox for further instructions!", { icon: "✈️"})
        } catch {
            toast.error("Failed to reset password—check if your email is correct.")
        }

        setLoading(false)
    }

    return (
        <>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
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