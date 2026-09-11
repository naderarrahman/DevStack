import { use, useState } from "react";
import TechCard from "./TechCard";
import type { Technology } from "../types/technologies";
import StackSidebar from "./StackSidebar";
import { toast } from "react-toastify";

// Props Type Definition for Promise
interface TechGridProps {
  dataPromise: Promise<Technology[]>;
}

export default function TechGrid({ dataPromise }: TechGridProps) {
  const techs: Technology[] = use(dataPromise);

  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
  const handleSelectTech = (tech: Technology) => {
    const existingTech = selectedTechs.find(
      (t) => t.category === tech.category,
    );

    setSelectedTechs((prevSelectedTechs) => {
      const filtered = prevSelectedTechs.filter(
        (t) => t.category !== tech.category,
      );
      return [...filtered, tech];
    });

    if (existingTech && existingTech.id !== tech.id) {
      toast.info(
        `Replaced ${existingTech.name} with ${tech.name} in ${tech.category}!`,
      );
    } else {
      toast.success(`${tech.name} added to your stack!`);
    }
  };

  const handleRemoveTech = (id: string) => {
    const techToRemove = selectedTechs.find((t) => t.id === id);

    setSelectedTechs((prevSelectedTechs) => {
      return prevSelectedTechs.filter((t) => t.id !== id);
    });

    if (techToRemove) {
      toast.error(`${techToRemove.name} removed from your stack!`);
    }
  };

  const handleClearAll = () => {
    if (selectedTechs.length === 0) return;
    setSelectedTechs([]);
    toast.warn("Cleared all technologies from your stack!");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-12 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Explore the <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-gray-600 mt-1">
              Pick one technology per category to build your ideal stack
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {techs.map((tech) => {
              const isSelected = selectedTechs.some((t) => t.id === tech.id);
              return (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isSelected={isSelected}
                  onSelect={() => handleSelectTech(tech)}
                />
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-1">
          <StackSidebar
            selectedTechs={selectedTechs}
            onRemoveTech={handleRemoveTech}
            onClearAll={handleClearAll}
          />
        </div>
      </div>
    </section>
  );
}
