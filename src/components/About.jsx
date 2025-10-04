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
        I’m a dedicated Software Engineer passionate about developing high-quality web and mobile applications with Agile methodologies.
        I specialize in full-stack development, with hands-on experience in <strong>React</strong>, <strong>Python Django</strong>, <strong>Bootstrap</strong> and <strong>Supabase (PostgreSQL)</strong>.
        I enjoy building systems that are intuitive, reliable, and scalable — combining clean code with modern design.
      </motion.p>
    </section>
  );
}
