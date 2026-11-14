import { User, ArrowRight } from 'lucide-react';
import { useVisitor } from '../context/VisitorContext';
import { useState } from 'react';

export function Acceuil() {

    const { visitor, setVisitor } = useVisitor();
    const [vistorInput, setvisitorInput] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const visitorF = vistorInput.trim();
        if (visitorF === '') return;

        setVisitor(visitorF)

    }

    return (
        <div className="relative h-screen bg-[url(/background-image.jpg)] bg-cover bg-center">
            {/* calque sombre pour assombrir le fond */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* div pour le logo */}
            <div className="absolute z-10 top-4 left-4 flex items-center gap-2 bg-gray-100 rounded-full pl-2 pr-4 py-1 shadow-md">
                <img src="/logo.png" alt="Logo Spotly" className="h-9 w-auto" />
                <span className="text-xl font-extrabold text-emerald-900">Spotly</span>
            </div>

            {/* div pour le texte de bienvenue */}
            {/* div pour le texte de bienvenue */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <p className="text-white text-xs font-semibold uppercase tracking-[0.3em]">
                    Bienvenue
                </p>
                <h1 className="titre-manuscrit mt-3">Comment vous appelez-vous ?</h1>

                {/* barre de recherche */}
                <form
                    className="flex items-center gap-3 mt-8 w-full max-w-2xl px-4"
                    onSubmit={handleSubmit}
                >
                    {/* icône à gauche */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-lime-200 shrink-0">
                        <User className="w-5 h-5 text-emerald-900" />
                    </div>

                    {/* champ de saisie */}
                    <input
                        type="text"
                        value={vistorInput}
                        placeholder="Tapez votre prénom"
                        className="flex-1 h-14 rounded-full bg-lime-200 px-6 text-center font-manuscrit text-2xl text-emerald-900 placeholder:text-emerald-900/70 outline-none"
                        onChange={(e) => setvisitorInput(e.target.value)}

                    />

                    {/* bouton à droite */}
                    <button
                        type="submit"
                        className="flex items-center justify-center w-14 h-14 rounded-full bg-lime-200 shrink-0 hover:bg-lime-300 transition"
                    >
                        <ArrowRight className="w-5 h-5 text-emerald-900" />
                    </button>
                </form>
                <p className="text-white mt-4">Contexte : {visitor}</p>
            </div>
        </div>
    )

}