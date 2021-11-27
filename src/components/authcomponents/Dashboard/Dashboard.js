import React, { useState } from "react"
import { Button } from "../../../globalStyles"
import { useAuth } from "../../../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import {
    DashSec,
    DashCard,
    Heading,
    ButtonWrapper,
    UpdateLink,
} from "./Dashboard.elements";

export default function Dashboard() {
    const [error, setError] = useState("")
    const [loading] = useState(false)
    const { currentUser, logout } = useAuth()
    const history = useHistory()

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
                {error && [error]}
                <DashCard>
                    <UpdateLink to="/update-profile">Update Credentials</UpdateLink>
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
