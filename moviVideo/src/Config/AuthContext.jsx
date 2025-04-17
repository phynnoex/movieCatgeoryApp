import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe(); // Cleanup subscription on unmount
    })

    const isSignedUP = !!user;

    return(
        <AuthContext.Provider value={{user,isSignedUP}}>
            {children}
        </AuthContext.Provider>

    );

};
export const useAuth = () => {
    return useContext(AuthContext);
};