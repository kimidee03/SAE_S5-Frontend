import { useContext } from "react";
import { VisitorContext } from "../context/VisitorContext";
export function useVisitor() {
    const ctx = useContext(VisitorContext);
    if (ctx === null) throw new Error("useVisitor doit être utilisé dans <VisitorProvider>");
    return ctx;
}