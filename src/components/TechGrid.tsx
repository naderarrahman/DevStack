import { use, useState } from "react"
import TechCard from "./TechCard"
import type { Technology } from "../types/technologies";
import StackSidebar from "./StackSidebar";

// Props Type Definition for Promise
interface TechGridProps {
  dataPromise: Promise<Technology[]>;
}



export default function TechGrid({ dataPromise }: TechGridProps) {
    const techs: Technology[] = use(dataPromise)

    const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
    const handleSelectTech = (tech: Technology) => {
      setSelectedTechs((prevSelectedTechs) => {
        const filtered = prevSelectedTechs.filter((t) => t.category !== tech.category);
        return [...filtered, tech];
      })
    }

    const handleRemoveTech  = (id:string) => {
      setSelectedTechs((prevSelectedTechs) => {
        return prevSelectedTechs.filter((t) => t.id !== id);
      })
    }

    const handleClearAll = () => {
      setSelectedTechs([]);
    }

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-12 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Explore the <span className="gradient-text">Technologies</span></h2>
            <p className="text-gray-600 mt-1">Pick one technology per category to build your ideal stack</p>
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
