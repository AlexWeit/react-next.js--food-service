import { useState } from "react";
import { AuthContext } from "./auth-context";

export const AuthContextProvider = ({ children }) => {
    const [name, setName] = useState(undefined);

    const isAuth = !!name;

    return (
        <AuthContext.Provider value={{ name, setName, isAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
