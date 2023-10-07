import React, {useContext, useState, useEffect} from 'react'
import {auth} from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    // return 1
    // return auth.createUserWithEmailAndPassword('test_hardcode_idkwhatsgoingonahhhh@test.org', 'test_hardcode_???')
    // admin.auth().listUsers(1000, null)
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password){
        console.log("step3")
        console.log(email)
        console.log(password)
        return auth.createUserWithEmailAndPassword(email, password).then((test_user)=>console.log(test_user)).catch((test_user)=>console.log(test_user))
        // return auth.createUserWithEmailAndPassword('test_hardcode_idkwhatsgoingonahhhh@test.org', 'test_hardcode_???')
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email){
        return currentUser.updateEmail(email)
    }

    function updatePassword(password){
        return currentUser.updatePassword(password)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        // <View>
        //     {console.log("step2.5")}
        // </View>
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}