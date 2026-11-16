import QuestionForm from "../components/ui/QuestionForm";
import { useAddress } from "../hooks/useAddress";
import { MapPin } from "lucide-react";
import { useVisitor } from "../hooks/useVisitor";

export default function Address({ onSuivant }) {
    const { setAddress } = useAddress();
    const { visitor } = useVisitor();
    return (
        <QuestionForm onResultat={(t) => { setAddress(t); onSuivant(); }} visitor={visitor} question={'quelle est votre adresse ?'} placeholder={'tapez votre adresse'} icon={MapPin} />
    )
}