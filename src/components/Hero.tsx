import banner from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Build Your Ideal{" "}
            <span className="gradient-text">Development Stack</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Discover, evaluate, and assemble the best modern web technologies
            for your next big project.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 text-sm font-semibold text-white bg-brand-gradient rounded-full shadow-lg hover:opacity-95 transition">
              Explore Technologies
            </button>
            <button className="px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>
        {/* Right Side: Hero Image */}
        <div className="flex justify-center">
          <img
            src={banner}
            alt="Hero"
            className="w-full max-w-lg lg:max-w-none h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
