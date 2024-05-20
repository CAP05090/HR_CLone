import { useEffect, createContext, useState } from "react";
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [login, setLogin] = useState(false);
    const [token, setToken] = useState("")

    useEffect(()=>{
        const StoredToken = localStorage.getItem("token")
        if (StoredToken){
            setLogin(true)
            setToken(StoredToken)
        }
    }, []);

    const logoutHandler = async () => {
        try {
          const response = await axios.post('http://localhost:8080/users/logout',  {token} );
          if (response.data) {
            localStorage.removeItem('token');
            setLogin(false);
            setToken("")
          }
          alert(response.data)
          console.log(response.data)
        } catch (error) {
          console.error('Error:', error.message);
        }
      };

    return(
        <AuthContext.Provider value={{login, setLogin, token, setToken, logoutHandler}}>
            {children}
        </AuthContext.Provider>
    )
}