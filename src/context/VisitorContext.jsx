import { createContext, useState, useContext } from "react";

const VisitorContext = createContext(null);

export function VisitorProvider({ children }) {
    const [visitor, setVisitor] = useState(null)

    return (
        <VisitorContext.Provider value={{ visitor, setVisitor }}>
            {children}
        </VisitorContext.Provider>
    )

}

export function useVisitor() {
    const ctx = useContext(VisitorContext);
    if (ctx === null) throw new Error("useVisitor doit être utilisé dans <VisitorProvider>");
    return ctx;
}