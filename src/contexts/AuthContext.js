import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);
    const [loading, setLoading] = useState();

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password).then(cred => {
            return db.collection("users").doc(cred.user.uid).set({
                year: "",
                interests: "",
                bio: ""
            });
        });
    }

    function updateProfile(year, interests, biography) {
        return db.collection("users").doc(currentUser.uid).set({
            year: year,
            interests: interests,
            bio: biography
        });
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                user.getIdTokenResult().then(idTokenResult => {
                    setIsAdmin(idTokenResult.claims.admin)
                })
            }
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const value = {
        currentUser,
        isAdmin,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateProfile,
        signup,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}