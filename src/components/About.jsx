import ProfilePicture from './ProfilePicture';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload } from 'react-icons/fa';

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 min-h-screen grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12">
      {/* Left - Profile (Sticky on Desktop, Normal on Mobile) */}
      <div className="flex flex-col items-center md:items-start md:col-span-1 md:sticky md:top-20 space-y-6">
        <ProfilePicture className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full shadow-md shadow-cyan-500/50" />

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 text-center md:text-left">
          SANDEEP 
        </h1>

        {/* Socials */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
          {[
            { href: "https://github.com/Sandeep0806", label: "GitHub", icon: <FaGithub size={26} /> },
            { href: "https://www.linkedin.com/in/sandeep-kokkonda-b78110243", label: "LinkedIn", icon: <FaLinkedin size={26} /> },
            { href: "https://www.instagram.com/sandeep_gold06", label: "Instagram", icon: <FaInstagram size={26} /> },
            { href: "mailto:kokkondasandeep10@gmail.com", label: "Email", icon: <FaEnvelope size={26} /> },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-600 transition-colors duration-300"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right - Content */}
      <div className="md:col-span-2 flex flex-col space-y-8 text-gray-300 leading-relaxed">
        {/* About */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4">ABOUT ME 👨🏻‍💻</h3>
          <p className="text-base sm:text-lg">
            Hello! I'm <strong>SANDEEP KOKKONDA</strong>, a dedicated BTech student specializing in Computer Science Engineering (CSE) at ACE Engineering College, Hyderabad.
            With a strong passion for programming and problem-solving, I thrive on exploring innovative technologies and applying them to practical, real-world scenarios.
            <br /><br />
            As an enthusiastic AI learner and web developer, I constantly seek opportunities to expand my technical expertise,
            staying up-to-date with emerging trends in software development, artificial intelligence, and web technologies.
            I take pride in writing clean, efficient, and scalable code to build impactful solutions that address real-world challenges.
          </p>
        </div>

        {/* Education */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-6">Education 🎓</h2>
          <div className="space-y-6">
            {/* B.Tech */}
            <div>
              <h3 className="font-semibold text-white text-lg sm:text-xl">B.Tech in Computer Science Engineering (CSE)</h3>
              <p>ACE Engineering College, Hyderabad, Telangana, India (2023 – 2027)</p>
              <p>Current CGPA: <strong>7.97</strong></p>
            </div>

            {/* Intermediate */}
            <div>
              <h3 className="font-semibold text-white text-lg sm:text-xl">Intermediate (MPC)</h3>
              <p>ABV Junior College, Jangaon, Telangana, India (2020 – 2022)</p>
              <p>Percentage: <strong>50.5%</strong></p>
            </div>

            {/* SSC */}
            <div>
              <h3 className="font-semibold text-white text-lg sm:text-xl">SSC</h3>
              <p>Ekashila Public School, Jangaon, Telangana, India (2020)</p>
              <p>CGPA: <strong>10.0</strong></p>
            </div>
          </div>

          <p className="mt-6 text-base sm:text-lg">
            I believe education is more than just books and grades. It’s about understanding how to use what you learn to{' '}
            <span className="font-semibold text-cyan-300">create</span>,{' '}
            <span className="font-semibold text-cyan-300">solve problems</span>, and{' '}
            <span className="font-semibold text-cyan-300">make a difference</span>.
          </p>
        </section>

        {/* Resume Button */}
        <div className="pt-6 flex justify-center md:justify-start">
          <a
            href="/resume.pdf" // Place your resume.pdf in "public" folder
            download="Sandeep_Kokkonda_Resume.pdf"
            className="inline-flex items-center space-x-2 px-5 py-3 bg-cyan-600 hover:bg-cyan-700 transition-colors rounded-md text-white font-semibold shadow-md shadow-cyan-500/40"
            aria-label="Download Resume"
          >
            <FaDownload size={20} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
