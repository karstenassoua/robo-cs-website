import React, { useRef, useState } from "react"
import { Button } from "../../../globalStyles"
import { Alert } from "react-bootstrap"
import { useAuth } from "../../../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import {
    DashForm,
    DashInput,
    DashSec,
    DashCard,
    Heading,
    ButtonWrapper,
    UpdateLink,
} from "./Dashboard.elements";

export default function Dashboard() {
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/dashboard")
        } catch {
            setError("Failed to log in. Make sure your email and password are correct.")
        }

        setLoading(false)
    }

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out :(")
        }
    }

    return (
        <>
            <DashSec>
                <Heading>Hello, {currentUser.email}!</Heading>
                {error && <Alert variant="danger">{error}</Alert>}
                <DashCard>
                    <DashForm onSubmit={handleSubmit}>
                        <DashInput type="email" ref={emailRef} placeholder="email" required />
                        <DashInput type="password" ref={passwordRef} placeholder="password (6+ characters)" required />
                    </DashForm>
                    <UpdateLink to="/update-profile">Update Profile</UpdateLink>
                    <ButtonWrapper>
                        <Button big wide disabled={loading} onClick={handleLogout} type="link">
                            Log Out
                        </Button>
                    </ButtonWrapper>
                </DashCard>
            </DashSec>
        </>
    )
}
