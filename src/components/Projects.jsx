import { motion } from "framer-motion";

const projects = [
  {
    title: "Dreamscape Realty",
    description:
      "A real estate management system featuring fraud detection, AI chatbot search, secure transactions, Property management and 3D virtual tours",
    tech: "Django, Supabase, ML, ",
  },
  {
    title: "SiteLink Logistics",
    description:
      "A Transportation logistics platform for shipping medium-sized goods to construction sites and real-time tracking of routes",
    tech: "Python, Django, MySQL",
  },
  {
    title: "LMS App",
    description:
      "A Learning Management System with attendance, grading, and notifications using React Native and Supabase.",
    tech: "React Native, Supabase",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-gray-950">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-400 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {proj.title}
            </h3>
            <p className="text-gray-400 mb-4">{proj.description}</p>
            <span className="text-blue-400 text-sm">{proj.tech}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
