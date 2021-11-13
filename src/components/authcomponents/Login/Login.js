import React, { useRef, useState } from "react"
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

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to log in. Make sure your email and password are correct.")
        }

        setLoading(false)
    }

    return (
        <>
            <LoginSec>
                    <Heading>Welcome back!</Heading>
                    {error && [error]}
                    <LoginCard>
                        <LoginForm onSubmit={handleSubmit}>
                            <LoginInput type="email" ref={emailRef} placeholder="email" required />
                            <LoginInput type="password" ref={passwordRef} placeholder="password" required />
                            <ButtonWrapper>
                                <Button big wide disabled={loading} type="submit">
                                    Sign up
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