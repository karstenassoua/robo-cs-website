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
} from "./Dashboard.elements";

// See above, IA - Key Elements: File Input/Output:
// Importing React, hooks, components, and a library called React-Hot-Toast

// Creating the Dashboard component 
export default function Dashboard() {
    const [loading] = useState(false)
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    // Defining a function to be called on logout
    // and one to help send users to the update profile page

    async function sendToUpdateProfile() {
        history.push("/update-profile")
    }

    async function handleLogout() {
        try {
            await logout()
            history.push("/login")
            toast.success("Logged out.")
        } catch {
            // IA - Key Algorithms: Sending an error message
            toast.error("Failed to log out :(")
        }
    }

    return (
        <>
            {/* Adding a "Toaster" for error messages at the top of the component*/}
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
            {/* Creating the rest of the component's display using styled components*/}
            <DashSec>
                {/* IA - String manipulation:
                // Concatenating the dynamic value of the user's email with a hello message */}
                <Heading>Hello, {currentUser.email}!</Heading>
                <DashCard>
                    <ButtonWrapper>
                        <Button disabled={loading} onClick={sendToUpdateProfile} type="link">
                            UPDATE PROFILE
                        </Button>
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <Button disabled={loading} onClick={handleLogout} type="link">
                            LOG OUT
                        </Button>
                    </ButtonWrapper>
                </DashCard>
            </DashSec>
        </>
    )
}
