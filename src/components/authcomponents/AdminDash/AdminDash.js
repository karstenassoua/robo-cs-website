import React, { useRef, useState } from "react"
import toast, { Toaster } from 'react-hot-toast'
import { Button } from "../../../globalStyles"
import { functions } from "../../../firebase"
import {
    DashSec,
    DashCard,
    Heading,
    PromoteForm,
    PromoteInput,
} from "./AdminDash.elements";

// See above, IA - Key Elements: File Input/Output:
// Importing React, hooks, components, and a library called React-Hot-Toast for notifications

// Creating the Admin Dashboard component 
export default function Dashboard() {
    // Creating Refs to hold data from input fields and a loading state
    const emailRef = useRef()
    const [loading, setLoading] = useState(false)

    // Defining a function to be called on promotion form submit
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setLoading(true) // Sets Loading to true across the page
            const addAdminRole = functions.httpsCallable('addAdminRole');
            await addAdminRole({ email: emailRef.current.value }).then(result => {
                console.log(result);
            });
            // If all promises go through without errors, alert user
            toast.success("Success! User promoted.")
        } catch {
            // IA - Key Algorithms: Sending an error message
            toast.error("Failed to promote user.")
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
            {/* Creating the rest of the component's display using styled components*/}
            <DashSec>
            <Heading>Welcome to the Admin Dashboard!</Heading>
                <DashCard>
                    <PromoteForm onSubmit={handleSubmit}>
                        <PromoteInput type="email" ref={emailRef} placeholder="email" required />
                        <Button big wide disabled={loading} type="submit">
                            PROMOTE
                        </Button>
                    </PromoteForm>
                </DashCard>
            </DashSec>
        </>
    )
}
