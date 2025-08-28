import { useState, useRef } from "react";
import { FaDownload } from 'react-icons/fa';

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  const [page, setPage] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const aboutRef = useRef(null);

  const pages = ["about", "skills", "projects", "certifications", "contact"];

  function handleMobileNavClick(p) {
    setPage(p);
    setMobileMenuOpen(false);
  }

  // Scroll smoothly to About section
  function scrollToAbout() {
    setPage("about");
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#141727] via-[#181E36] to-[#1B2040] text-white flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#181E36]/80 backdrop-blur-md sticky top-0 z-50 border-b border-cyan-500/30 px-4">
        <div className="flex items-center justify-between py-4">
          {/* Your Name on the left - clickable */}
          <div
            onClick={scrollToAbout}
            className="text-cyan-400 font-bold text-xl select-none cursor-pointer"
            aria-label="Go to About section"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => { if (e.key === 'Enter') scrollToAbout() }}
          >
            Kokkonda
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-lg font-semibold items-center">
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

            {/* Resume download button */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-600 cursor-pointer font-semibold capitalize"
            >
              <FaDownload size={18} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile hamburger icon */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
                  page === p ? "bg-cyan-600 text-white" : "text-gray-300 hover:bg-cyan-500/50"
                }`}
              >
                {p}
              </button>
            ))}
            {/* Mobile Resume download button */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center space-x-2 text-cyan-400 hover:bg-cyan-500/50 cursor-pointer font-semibold capitalize px-3 py-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaDownload size={18} />
              <span>Resume</span>
            </a>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="flex-grow px-4 sm:px-6 lg:px-12 py-8 sm:py-10">
        {{
          about: <div ref={aboutRef}><About /></div>,
          skills: <Skills />,
          projects: <Projects />,
          certifications: <Certifications />,
          contact: <Contact />,
        }[page]}
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-6 text-xs sm:text-sm border-t border-gray-700">
        © {new Date().getFullYear()} Built by Kokkonda Sandeep • © 2025 • Designed for internships & projects.
      </footer>
    </div>
  );
}
