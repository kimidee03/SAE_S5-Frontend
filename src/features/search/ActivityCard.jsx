export default function ActivityCard({ activity }) {
  const {
    name,
    categories = [],
    distance,
    score,
  } = activity;

  const categoryName = Array.isArray(categories) && categories.length > 0
    ? (typeof categories[0] === 'string' ? categories[0] : categories[0].name)
    : (typeof categories === 'string' ? categories : 'Activité');

  const formattedDistance = distance
    ? distance >= 1000
      ? `${(distance / 1000).toFixed(0)} km`
      : `${Math.round(distance)} m`
    : '9 km';

  const formattedScore = score !== undefined && score !== null
    ? `${score <= 1 ? Math.round(score * 100) : Math.round(score)}% pertinent`
    : null;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-[6px_6px_0px_#3fa678] transition-transform hover:-translate-y-0.5 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="font-bold text-xl text-gray-900 leading-snug">{name}</h3>

          <div className="flex items-center gap-2 shrink-0">
            {formattedScore && (
              <span className="bg-amber-100 text-amber-800 font-semibold text-xs px-3 py-1 rounded-full">
                ★ {formattedScore}
              </span>
            )}
            <span className="bg-emerald-100 text-emerald-800 font-semibold text-xs px-3 py-1 rounded-full">
              {formattedDistance}
            </span>
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-6">{categoryName}</p>
      </div>

      <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-colors">
        <span>Voir les détails</span>
        <span>→</span>
      </button>
    </div>
  );
}