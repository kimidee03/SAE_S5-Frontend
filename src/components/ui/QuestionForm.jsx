import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function QuestionForm({ onResultat, visitor, question, placeholder, icon: Icon }) {

    const [input, setInput] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const inputf = input.trim();
        if (inputf === '') return;

        onResultat(inputf)

    }

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <p className="text-white text-xs font-semibold uppercase tracking-[0.3em]">
                Bienvenue {visitor}
            </p>
            <h1 className="titre-manuscrit mt-3">{question}</h1>

            {/* barre de recherche */}
            <form
                className="flex items-center gap-3 mt-8 w-full max-w-2xl px-4"
                onSubmit={handleSubmit}
            >
                {/* icône à gauche */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-lime-200 shrink-0">
                    <Icon className="w-5 h-5 text-emerald-900" />
                </div>

                {/* champ de saisie */}
                <input
                    type="text"
                    value={input}
                    placeholder={placeholder}
                    className="flex-1 h-14 rounded-full bg-lime-200 px-6 text-center font-manuscrit text-2xl text-emerald-900 placeholder:text-emerald-900/70 outline-none"
                    onChange={(e) => setInput(e.target.value)}

                />

                {/* bouton à droite */}
                <button
                    type="submit"
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-lime-200 shrink-0 hover:bg-lime-300 transition"
                >
                    <ArrowRight className="w-5 h-5 text-emerald-900" />
                </button>
            </form>
        </div>
    )

}