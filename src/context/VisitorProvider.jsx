import { useState } from "react";
import { VisitorContext } from "./VisitorContext";

export function VisitorProvider({ children }) {
    const [visitor, setVisitor] = useState(null)

    return (
        <VisitorContext.Provider value={{ visitor, setVisitor }}>
            {children}
        </VisitorContext.Provider>
    )

}
