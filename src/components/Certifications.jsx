import React, { useState } from "react";

const certifications = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    imgSrc: "/certifications/oci-data-science-cert.png", // Replace with real path
    alt: "Oracle Cloud Infrastructure Data Science Certification",
  },
  {
    id: 2,
    title: "Oracle Cloud Infrastructure DevOps Professional Certification",
    imgSrc: "/certifications/oci-devops-cert.png", // Replace with real path
    alt: "Oracle Cloud Infrastructure DevOps Certification",
  },
  {
    id: 3,
    title: "TCS iON Career Edge - Young Professional",
    imgSrc: "/certifications/tcs ion career.png", // Use your own image path
    alt: "TCS iON Career Edge Certificate",
  },
  {
    id: 4,
    title: "Networking Virtual Internship (AICTE, EduSkills, Juniper Networks)",
    imgSrc: "/certifications/juniper networking internship.png", // Use your own image path
    alt: "Networking Virtual Internship Certificate",
  }
];

export default function Certifications() {
  const [openCertId, setOpenCertId] = useState(null);

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-12 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-12 text-center border-b-4 border-cyan-400 pb-2 w-fit">
        Certifications 🏆
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
        {certifications.map(({ id, title, imgSrc, alt }) => (
          <div
            key={id}
            className="rounded-xl overflow-hidden shadow-md border-2 border-cyan-400 cursor-pointer 
                       hover:shadow-cyan-400/50 transition duration-300"
            onClick={() => setOpenCertId(id)}
          >
            <img
              src={imgSrc}
              alt={alt}
              className="w-full h-56 sm:h-64 object-contain bg-white"
              loading="lazy"
            />
            <div className="p-3 sm:p-4 bg-[#181E36] text-white text-center font-medium sm:font-semibold text-sm sm:text-base">
              {title}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openCertId && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
          onClick={() => setOpenCertId(null)}
        >
          <div
            className="relative p-4 bg-gray-800 rounded-xl max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Certification Image */}
            <img
              src={certifications.find((c) => c.id === openCertId).imgSrc}
              alt={certifications.find((c) => c.id === openCertId).alt}
              className="max-h-[70vh] w-auto rounded-lg shadow-lg object-contain"
            />

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-cyan-600 rounded-full p-2 hover:bg-cyan-400 transition"
              aria-label="Close"
              onClick={() => setOpenCertId(null)}
            >
              ✕
            </button>

            {/* Title */}
            <div className="mt-4 text-white text-sm sm:text-base md:text-lg text-center px-4">
              {certifications.find((c) => c.id === openCertId).title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
