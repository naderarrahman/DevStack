import type { Technology } from "../types/technologies";

// Props Type Definition
interface TechCardProps {
  tech: Technology;
}

export default function TechCard({ tech }: TechCardProps) {
  return (
      <article className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full">
      <div>
        {/* Top Header: Icon & Brand Accent Badge */}
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

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {tech.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-6 leading-relaxed line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div>
        {/* Info Row: Category | Experience | Rating */}
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

        {/* Brand Theme Gradient Button */}
        <button
          type="button"
          className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-95 active:scale-[0.99] transition-all duration-150 shadow-sm"
        >
          Add to Stack
        </button>
      </div>
    </article>
  )
}
