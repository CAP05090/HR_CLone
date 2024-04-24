import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [login, setLogin] = useState(false);
    const [token, setToken] = useState("")

    return(
        <AuthContext.Provider value={{login, setLogin, token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}