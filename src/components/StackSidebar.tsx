import type { Technology } from "../types/technologies";

interface StackSidebarProps {
  selectedTechs: Technology[];
  onRemoveTech: (id: string) => void;
  onClearAll: () => void;
}

export default function StackSidebar({
  selectedTechs,
  onRemoveTech,
  onClearAll,
}: StackSidebarProps) {
  const hasSelectedTechs = selectedTechs.length > 0;
  return (
    <aside className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm sticky top-8 flex flex-col justify-between">
      {/*Header Area */}
      <div className="mb-6 pb-4 border-b border-gray-100">
        <h3 className="text-xl font-bold text-gray-900">Your Dev Stack</h3>
        <p className="text-xs text-gray-500 mt-0.5">
          {selectedTechs.length}{" "}
          {selectedTechs.length === 1 ? "technology" : "technologies"} selected
        </p>
      </div>

      {/* Main Content Area */}
      {!hasSelectedTechs ? (
        <div className="text-center py-8 px-4 rounded-2xl bg-gray-50/50 border border-dashed border-gray-200">
          <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mx-auto mb-3 font-semibold text-base">
            +
          </div>
          <p className="text-sm font-medium text-gray-700 mb-1">
            No technologies selected yet.
          </p>
          <p className="text-xs text-gray-400">
            Click "Add to Stack" on any card to start building.
          </p>
        </div>
      ) : (
        /* Selected Items List */
        <ul className="space-y-3">
          {selectedTechs.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-gray-200 transition-all duration-150"
            >
              <div className="flex items-center gap-3">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 object-contain shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">
                    {tech.name}
                  </h4>
                  <span className="text-[11px] font-medium text-gray-500 bg-white px-2 py-0.5 rounded-md border border-gray-200/60 inline-block mt-1">
                    {tech.category}
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="w-7 h-7 rounded-lg text-gray-400 hover:text-rose-500 hover:bg-rose-50 flex items-center justify-center transition-all duration-150"
                title={`Remove ${tech.name}`}
                onClick={() => onRemoveTech(tech.id)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Bottom Area (Clear All Button) */}
      {hasSelectedTechs && (
        <div className="mt-6 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={onClearAll}
            className="w-full py-2.5 px-4 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors duration-150 flex items-center justify-center"
          >
            Clear All Stack
          </button>
        </div>
      )}
    </aside>
  );
}
