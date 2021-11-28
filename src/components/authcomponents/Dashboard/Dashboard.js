import React, { useState } from "react"
import toast, { Toaster } from 'react-hot-toast'
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
    const [loading] = useState(false)
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        try {
            await logout()
            history.push("/login")
            toast.success("Logged out.")
        } catch {
            toast.error("Failed to log out :(")
        }
    }

    return (
        <>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
            <DashSec>
                <Heading>Hello, {currentUser.email}!</Heading>
                <DashCard>
                    <UpdateLink to="/update-profile">Update Credentials</UpdateLink>
                    <ButtonWrapper>
                        <Button big wide disabled={loading} onClick={handleLogout} type="link">
                            LOG OUT
                        </Button>
                    </ButtonWrapper>
                </DashCard>
            </DashSec>
        </>
    )
}
