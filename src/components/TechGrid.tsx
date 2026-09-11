import { use } from "react"
import TechCard from "./TechCard"
import type { Technology } from "../types/technologies";

// Props Type Definition for Promise
interface TechGridProps {
  dataPromise: Promise<Technology[]>;
}



export default function TechGrid({ dataPromise }: TechGridProps) {
    const techs: Technology[] = use(dataPromise)
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-12 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Explore the <span className="gradient-text">Technologies</span></h2>
            <p className="text-gray-600 mt-1">Pick one technology per category to build your ideal stack</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {techs.map((tech) => (
              <TechCard key={tech.id} tech={tech} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Your Dev Stack</h3>
          <p className="text-sm text-gray-500">No technologies selected yet.</p>
        </div>
      </div>
    </section>
  );
}
