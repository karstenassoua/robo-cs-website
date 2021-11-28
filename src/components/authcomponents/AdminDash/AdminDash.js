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


export default function Dashboard() {
    const emailRef = useRef()
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setLoading(true)
            const addAdminRole = functions.httpsCallable('addAdminRole');
            await addAdminRole({ email: emailRef.current.value }).then(result => {
                console.log(result);
            });
            toast.success("Success! User promoted.")
        } catch {
            toast.error("Failed to promote user.")
        }

        setLoading(false)
    }

    return (
        <>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
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
