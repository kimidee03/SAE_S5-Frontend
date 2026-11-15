import { User } from 'lucide-react';
import { useVisitor } from '../hooks/useVisitor';
import QuestionForm from '../components/ui/QuestionForm';


export default function Acceuil({ onSuivant }) {

    const { setVisitor } = useVisitor();


    return (
        <div className='h-full'>
            <QuestionForm onResultat={(r) => { setVisitor(r); onSuivant(); }} question={'Comment vous appelez-vous ?'} placeholder={'Tapez votre prénom'} icon={User} />
        </div>
    )

} 