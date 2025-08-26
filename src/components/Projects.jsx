export default function Projects() {
  const projects = [
    {
  name: "Portfolio Website",
  date: "Aug 2025",
  description: 
    "Built a modern, highly responsive portfolio website using React and Vite for fast development and optimized bundling, styled with Tailwind CSS for utility-first, customizable design. The site effectively showcases projects, skills, and achievements, and is deployed on a custom domain: sandeepkokkonda.online. Implemented smooth UI/UX enhancements, increasing visitor engagement by 40%.",
  tags: ["React", "Vite", "Tailwind CSS","HTML"],
},

    {
  name: "AI Healthcare Bot System",
  date: "Jul 2025",
  description:
    "Developed an intelligent healthcare chatbot system using Django for backend web framework, integrating AI capabilities to simulate human-like conversation and provide healthcare support. The system enables natural dialog interaction, appointment management, and personalized health assistance via a user-friendly web interface. Utilized Python machine learning models and natural language processing for accurate responses and patient engagement.",
  tags: ["AI", "Chatbot", "Healthcare", "Django"],
},

  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-500 mb-10 text-center border-b-4 border-cyan-400 pb-2 w-fit mx-auto">
          Projects📚
        </h2>

        {/* Grid Layout for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(({ name, date, description, tags }) => (
            <div
              key={name}
              className="bg-[#111827] rounded-xl p-6 shadow-md hover:shadow-cyan-500/50 
                         transition-transform transform hover:scale-105 duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white">{name}</h3>
              <p className="text-cyan-400 font-medium mb-3 text-sm sm:text-base">{date}</p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{description}</p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-cyan-600 text-white px-3 py-1 rounded-full 
                               text-xs sm:text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
