import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../firebase"

// Creating a context "umbrella" to encapsulate the whole application
// This context is important because it informs components of authentication changes
const AuthContext = React.createContext()

// Creating a function components can use to check auth state
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    // Defining different states using React's useState
    const [currentUser, setCurrentUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);
    const [loading, setLoading] = useState();

    // Defining authentication functions like logout, signup, etc. for users
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
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

    // Using React's useEffect to create a side effect when the user's auth state changes
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
        signup,
    }

    // Shipping all necessary authentication information using the value object
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}