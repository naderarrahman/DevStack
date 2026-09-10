import logo from "../assets/logo-text.png"



export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 lg:px-12 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="lg:hidden flex items-center">
          <button className="p-2 text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <img src={logo} alt="Logo" className="h-8 w-auto object-contain"/>
        <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-600 text-sm">
          <a href="#home" className="hover:text-gray-900 transition">Home</a>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold text-gray-700 hover:text-gray-900 px-3 py-2 transition">Sign In</button>
          <button className="text-sm font-semibold text-white px-5 py-2 rounded-full bg-brand-gradient shadow-md hover:opacity-95 transition">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
