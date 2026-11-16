import { useContext } from "react";
import { AddressContext } from "../context/AddressContext";
export function useAddress() {
    const ctx = useContext(AddressContext);
    if (ctx === null) throw new Error("useAddress doit être utilisé dans <AddressProvider>");
    return ctx;

}