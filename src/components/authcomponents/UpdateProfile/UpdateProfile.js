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

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            toast.error("Passwords do not match!")
            return null;
        }

        const promises = []
        setLoading(true)

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value !== currentUser.password) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push("/")
            toast.success("Account updated successfully.")
        }).catch(() => {
            toast.error("Failed to update account.")
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
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