import type { Technology } from "../types/technologies";

// Props Type Definition
interface TechCardProps {
  tech: Technology;
  isSelected: boolean;
  onSelect: () => void;
}

export default function TechCard({
  tech,
  isSelected,
  onSelect,
}: TechCardProps) {
  return (
    <article className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-10 h-10 object-contain"
          />
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-100">
            Popular
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
          <span>{tech.experience}</span>
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
              ? "bg-gray-900 text-white cursor-not-allowed opacity-90"
              : "text-white bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-95 active:scale-[0.99]"
          }`}
        >
          {isSelected ? "Selected" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
}
