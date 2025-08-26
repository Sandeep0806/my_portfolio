import { useState } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  const [page, setPage] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = ["about", "skills", "projects", "certifications", "contact"];

  // Close mobile menu when a page is clicked
  function handleMobileNavClick(p) {
    setPage(p);
    setMobileMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#141727] via-[#181E36] to-[#1B2040] text-white flex flex-col">

      {/* Navbar */}
      <nav className="bg-[#181E36]/80 backdrop-blur-md sticky top-0 z-50 border-b border-cyan-500/30 px-4">
        
        <div className="flex items-center justify-between py-4">
          {/* Your Name on the left */}
          <div className="text-cyan-400 font-bold text-xl select-none">
            Sandeep_Kokkonda
          </div>

          {/* Desktop Nav - hidden on mobile */}
          <div className="hidden md:flex space-x-10 text-base lg:text-lg font-semibold">
            {pages.map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`capitalize transition hover:underline ${
                  page === p ? "text-cyan-400 underline" : "text-gray-300"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#181E36] border-t border-cyan-600 space-y-2 px-4 pb-4">
            {pages.map((p) => (
              <button
                key={p}
                onClick={() => handleMobileNavClick(p)}
                className={`block w-full text-left capitalize py-2 px-3 rounded transition ${
                  page === p
                    ? "bg-cyan-600 text-white"
                    : "text-gray-300 hover:bg-cyan-500/50"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-6 lg:px-12 py-8 sm:py-10">
        {{
          about: <About />,
          skills: <Skills />,
          projects: <Projects />,
          certifications: <Certifications />,
          contact: <Contact />,
        }[page]}
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-6 text-xs sm:text-sm border-t border-gray-700">
        © {new Date().getFullYear()} Kokkonda Sandeep
      </footer>
    </div>
  );
}
