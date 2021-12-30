import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'; 
import { Button } from "../../../globalStyles"
import { useAuth } from "../../../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import {
    CredsForm,
    CredsInput,
    UpdateSec,
    UpdateCard,
    ProfileForm,
    ProfileInput,
    BioInput,
    ProfileLabel,
    Heading,
    ButtonWrapper,
    CancelLink,
} from "./Update.elements";

// See above, IA - Key Elements: File Input/Output:
// Importing React, hooks, components, and a library called React-Hot-Toast for notifications

// Creating the Signup component 
export default function Signup() {

    // Creating Refs to hold data from input fields
    const yearRef = useRef()
    const interestsRef = useRef()
    const bioRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    // Drawing data from the AuthContext & defining a loading state
    const { currentUser, updatePassword, updateEmail, updateProfile } = useAuth()
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    // Defining functions to be called on update profile form submit
    async function handleProfileSubmit(e) {
        e.preventDefault()
        setLoading(true)

        try {
            await updateProfile(yearRef.current.value, interestsRef.current.value, bioRef.current.value)
            toast.success("Updated successfully! :D")
        } catch {
            // IA - Key Algorithms: Sending an error message
            toast.error("Failed to update profile.")
        }
        setLoading(false)
    }

    function handleCredsSubmit(e) {
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
                    <ProfileForm onSubmit={handleProfileSubmit}>
                        <ProfileLabel for="yearselect">What grade are you in?</ProfileLabel>
                        <select name="yearselect" type="" ref={yearRef}>
                            <option value="Freshman">Freshman</option>
                            <option value="Sophomore">Sophomore</option>
                            <option value="Junior">Junior</option>
                            <option value="Senior">Senior</option>
                            <option value="Alumni">Alumni</option>
                        </select>
                        <ProfileInput type="text" ref={interestsRef} required placeholder="What are you interested in?" />
                        <BioInput type="text" ref={bioRef} rows="5" cols="80" required placeholder="Add a little about you..." />
                        <ButtonWrapper>
                            <Button disabled={loading} type="submit">UPDATE PROFILE</Button>
                        </ButtonWrapper>
                    </ProfileForm>
                    <CredsForm onSubmit={handleCredsSubmit}>
                        <CredsInput type="email" ref={emailRef} required placeholder={currentUser.email} />
                        <CredsInput type="password" ref={passwordRef} placeholder="Leave blank to keep the same. (6+ characters)" />
                        <CredsInput type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same." />
                        <ButtonWrapper>
                            <Button disabled={loading} type="submit">UPDATE CREDENTIALS</Button>
                        </ButtonWrapper>
                    </CredsForm>
                    <CancelLink to="/profile">Cancel</CancelLink>
                </UpdateCard>
            </UpdateSec>
        </>
    )
}