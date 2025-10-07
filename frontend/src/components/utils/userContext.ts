import { createContext, useContext } from "react";

type ContextType = {
    role: string | null,
    institution: string | null
}
export const Context = createContext({role: null, institution: null});

/** cookie-based and local storage auth _**(for frontend only)**_ */
export function useAuth(): ContextType { 
    return useContext(Context);
}