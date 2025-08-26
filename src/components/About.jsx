import ProfilePicture from './ProfilePicture';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function About() {
  return (
    <section className="max-w-7xl mx-auto p-4 min-h-screen grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 items-start">
      {/* Profile Section */}
      <div className="flex flex-col items-center md:items-start md:col-span-1">
        <ProfilePicture className="w-60 h-60 rounded-full" />
        <h1 className="text-4xl font-bold text-cyan-400 mt-6 text-center md:text-left">SANDEEP KOKKONDA</h1>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4">
          {[
            { href: "https://github.com/Sandeep0806", label: "GitHub", icon: <FaGithub size={30} /> },
            { href: "https://www.linkedin.com/in/sandeep-kokkonda-b78110243", label: "LinkedIn", icon: <FaLinkedin size={30} /> },
            { href: "https://www.instagram.com/sandeep_gold06", label: "Instagram", icon: <FaInstagram size={30} /> },
            { href: "mailto:kokkondasandeep10@gmail.com", label: "Email", icon: <FaEnvelope size={30} /> },
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

      {/* Text and Education Section */}
      <div className="md:col-span-2 text-left">
        <h3 className="text-3xl font-bold text-cyan-400 mb-6">ABOUT ME 👨🏻‍💻</h3>

        <p className="text-sm md:text-lg text-gray-300 leading-relaxed mb-6">
          Hello! I'm <strong>SANDEEP KOKKONDA</strong>, a dedicated BTech student specializing in Computer Science Engineering (CSE) at ACE Engineering College, Ghatkesar.
          With a strong passion for programming and problem-solving, I thrive on exploring innovative technologies and applying them to practical, real-world scenarios.
          <br /><br />
          As an enthusiastic AI learner and web developer, I constantly seek opportunities to expand my technical expertise,
          staying up-to-date with emerging trends in software development, artificial intelligence, and web technologies.
          I take pride in writing clean, efficient, and scalable code to build impactful solutions that address real-world challenges.
        </p>

        <section>
          <h2 className="text-4xl font-bold text-cyan-400 mb-6">Education 🎓</h2>

          <div className="space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
            <div>
              <h3 className="font-semibold text-white text-xl mb-1">B.Tech in Computer Science Engineering (CSE)</h3>
              <p>ACE Engineering College, Hyderabad, Telangana, India (2023 – 2027)</p>
              <p>Current CGPA: <strong>7.93</strong></p>
            </div>

            <div>
              <h3 className="font-semibold text-white text-xl mb-1">Intermediate (MPC)</h3>
              <p>ABV Junior College, Jangaon, Telangana, India (2020 – 2023)</p>
              <p>Percentage: <strong>50.5%</strong></p>
            </div>

            <div>
              <h3 className="font-semibold text-white text-xl mb-1">SSC</h3>
              <p>Ekashila Public School, Jangaon, Telangana, India (2020)</p>
              <p>CGPA: <strong>10.0</strong></p>
            </div>
          </div>

          <p className="mt-8">
            I believe education is more than just books and grades. It’s about understanding how to use what you learn to{' '}
            <span className="font-semibold text-black dark:text-white">create</span>,{' '}
            <span className="font-semibold text-black dark:text-white">solve problems</span>, and{' '}
            <span className="font-semibold text-black dark:text-white">make a difference</span>. With every step in my studies,
            I’m building the skills and mindset needed to grow in the fast-changing world of technology.
          </p>
        </section>
      </div>
    </section>
  );
}
