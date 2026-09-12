import type { Technology } from "../types/technologies";

// Props Type Definition
interface TechCardProps {
  tech: Technology;
  isSelected: boolean;
  onSelect: () => void;
}


const getBadgeColor = (techIdOrName: string) => {
  const name = techIdOrName.toLowerCase();

  if (name.includes("react")) return "bg-sky-50 text-sky-600 border-sky-200";
  if (name.includes("tailwind")) return "bg-cyan-50 text-cyan-600 border-cyan-200";
  if (name.includes("node")) return "bg-emerald-50 text-emerald-600 border-emerald-200";
  if (name.includes("mongo")) return "bg-green-50 text-green-600 border-green-200";
  if (name.includes("express")) return "bg-slate-100 text-slate-700 border-slate-300";
  if (name.includes("typescript")) return "bg-blue-50 text-blue-600 border-blue-200";
  if (name.includes("next")) return "bg-zinc-100 text-zinc-800 border-zinc-300";
  if (name.includes("postgres")) return "bg-blue-50 text-blue-700 border-blue-200";
  if (name.includes("redux")) return "bg-purple-50 text-purple-600 border-purple-200";
  if (name.includes("firebase")) return "bg-amber-50 text-amber-600 border-amber-200";
  if (name.includes("daisy")) return "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200";
  if (name.includes("git") && !name.includes("hub")) return "bg-orange-50 text-orange-600 border-orange-200";
  if (name.includes("docker")) return "bg-sky-50 text-sky-700 border-sky-300";
  if (name.includes("graphql")) return "bg-pink-50 text-pink-600 border-pink-200";
  if (name.includes("vue")) return "bg-emerald-50 text-emerald-600 border-emerald-300";

  return "bg-gray-50 text-gray-600 border-gray-200";
};

export default function TechCard({
  tech,
  isSelected,
  onSelect,
}: TechCardProps) {
  return (
    <article className={`bg-white rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full border-2 ${
    isSelected
      ? "border-pink-500 shadow-pink-100/50" 
      : "border-gray-100"
  }`}>
      <div>
        <div className="flex items-center justify-between mb-4">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-10 h-10 object-contain"
          />
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${getBadgeColor(
              tech.name
            )}`}
          >
            {tech.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>

        <p className="text-sm text-gray-500 mb-6 leading-relaxed line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-5 font-medium">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg font-semibold">
            {tech.category}
          </span>
          <span>{tech.difficulty}</span>
          <div className="flex items-center gap-1 font-semibold text-gray-800">
            <span className="text-amber-400">★</span>
            <span>{tech.rating}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onSelect}
          disabled={isSelected}
          className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-150 shadow-sm ${
            isSelected
              ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
              : "text-white bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-95 active:scale-[0.99]"
          }`}
        >
          {isSelected ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
}
