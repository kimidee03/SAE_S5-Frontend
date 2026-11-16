import { useState } from "react";
import { AddressContext } from "./AddressContext";

export function AddressProvider({ children }) {
    const [address, setAddress] = useState('');
    return (
        <AddressContext.Provider value={{ address, setAddress }}>
            {children}
        </AddressContext.Provider>
    )

}
