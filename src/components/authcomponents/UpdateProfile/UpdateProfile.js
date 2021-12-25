import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'; 
import { Button } from "../../../globalStyles"
import { useAuth } from "../../../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import {
    UpdateForm,
    UpdateInput,
    UpdateSec,
    UpdateCard,
    Heading,
    ButtonWrapper,
    CancelLink,
} from "./Update.elements";

// See above, IA - Key Elements: File Input/Output:
// Importing React, hooks, components, and a library called React-Hot-Toast for notifications

// Creating the Signup component 
export default function Signup() {

    // Creating Refs to hold data from input fields
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    // Drawing data from the AuthContext & defining a loading state
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    // Defining a function to be called on update profile form submit
    function handleSubmit(e) {
        e.preventDefault()

        // If the confirmed password is not equal to the first password
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            // IA - Key Algorithms: Sending an error message
            toast.error("Passwords do not match!")
            return null;
        }

        const promises = []
        setLoading(true)

        // If the email the user wants to change to is new, then we continue with the algorithm
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        // If the password the user wants to change to is new, then we continue with the algorithm
        if (passwordRef.current.value !== currentUser.password) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        // If all promises go through without errors, navigate user to home page and alert them
        Promise.all(promises).then(() => {
            history.push("/")
            toast.success("Account updated successfully.")
        }).catch(() => {
            // IA - Key Algorithms: Sending an error message
            // If there are errors, alert user that the update failed
            toast.error("Failed to update account.")
        }).finally(() => {
            // No matter what, set Loading to false — we're ready to move on
            setLoading(false)
        })
    }

    return (
        <>
            {/* Adding a "Toaster" for error messages at the top of the component*/}
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
            {/* Creating the rest of the component's display using styled components*/}
            <UpdateSec>
                <Heading>Update Profile</Heading>
                <UpdateCard>
                    <UpdateForm onSubmit={handleSubmit}>
                        <UpdateInput type="email" ref={emailRef} required placeholder={currentUser.email} />
                        <UpdateInput type="password" ref={passwordRef} placeholder="Leave blank to keep the same. (6+ characters)" />
                        <UpdateInput type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same." />
                        <ButtonWrapper>
                            <Button disabled={loading} type="submit">Update</Button>
                        </ButtonWrapper>
                    </UpdateForm>
                    <CancelLink to="/profile">Cancel</CancelLink>
                </UpdateCard>
            </UpdateSec>
        </>
    )
}