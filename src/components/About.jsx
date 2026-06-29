import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-8 bg-gray-900 text-center">
      <motion.h2
        className="text-4xl font-bold text-blue-400 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        A result-driven software engineer with over 2+ years of experience in full-stack development, system integration,
        cloud deployment and technical support. Experienced in working within structured and regulated environments implementing 
        system updates, maitaining production systems, collaborating across teams and utilizing GitHub, CI/​CD and cloud platforms
        (Azure & AWS). Posses a solid foundation and growing experience in Node.js backend and desktop application development..

      </motion.p>
    </section>
  );
}
