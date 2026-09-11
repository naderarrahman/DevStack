import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 pb-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs">
                DS
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Dev<span className="text-pink-500">Stack</span>
              </h2>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold text-gray-700">
              <a
                href="https://github.com/naderarrahman"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-pink-500 transition-colors"
              >
                <FaGithub className="text-base" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/naderarrahman"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-pink-500 transition-colors"
              >
                <FaLinkedin className="text-base text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://facebook.com/naderarrahman"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-pink-500 transition-colors"
              >
                <FaFacebook className="text-base text-[#1877F2]" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                PRODUCT
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                COMPANY
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                LEGAL
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© Nader Ar Rahman. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
