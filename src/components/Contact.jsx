import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mvgqbawa", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setFormStatus("Thanks! I'll get back to you soon.");
        e.target.reset();
      } else {
        const data = await response.json();
        setFormStatus(
          data.errors
            ? data.errors.map((err) => err.message).join(", ")
            : "Oops! There was a problem."
        );
      }
    } catch {
      setFormStatus("Network error. Please try again later.");
    }
  }

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-tr from-[#141727] via-[#181E36] to-[#1B2040] rounded-lg shadow-lg text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center border-b-4 border-cyan-500 pb-2 max-w-max mx-auto">
        Contact Me
      </h2>

      {/* Responsive Layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contact Info */}
        <div className="lg:w-1/2 text-gray-300 space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-center lg:text-left">
            Interested in collaborating, interning, or just want to chat? Drop a message!
          </p>
          <p className="text-center lg:text-left">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:kokkondasandeep10@gmail.com"
              className="underline text-cyan-400 hover:text-cyan-600 transition"
            >
              kokkondasandeep10@gmail.com
            </a>
          </p>
          <div className="flex justify-center lg:justify-start space-x-8 mt-4 text-cyan-400">
            <a
              href="https://github.com/Sandeep0806"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-cyan-600 transition"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-kokkonda-b78110243"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-600 transition"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/sandeep_gold06"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-cyan-600 transition"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/2 flex flex-col gap-4 bg-[#232747] p-6 sm:p-8 rounded-lg shadow-md"
        >
          <input
            type="text"
            name="_gotcha"
            style={{ display: "none" }}
            autoComplete="off"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-[#141727] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-[#141727] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            className="p-3 rounded bg-[#141727] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-600 py-3 rounded text-white font-semibold hover:bg-cyan-700 transition"
          >
            Send Message
          </button>
          {formStatus && (
            <p className="mt-2 text-center text-cyan-400">{formStatus}</p>
          )}
        </form>
      </div>

      <footer className="mt-12 text-center text-gray-400 text-xs sm:text-sm">
        Built by <span className="text-cyan-400 font-semibold">Kokkonda Sandeep</span> • © 2025 • Designed for internships & projects.
      </footer>
    </section>
  );
}
