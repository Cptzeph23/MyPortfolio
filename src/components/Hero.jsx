import { motion } from "framer-motion";
import { Download } from "lucide-react"; // 👈 Import the icon

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center text-center h-screen bg-gray-950"
    >
      <motion.h2
        className="text-5xl font-bold text-blue-400 mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Zeph Aseka 👋
      </motion.h2>

      <motion.p
        className="text-lg text-gray-400 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate Software Engineer specializing in full-stack web development —
        building efficient, secure, and elegant digital solutions.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {/* Work Button */}
        <a
          href="#projects"
          className="bg-blue-500 px-6 py-3 rounded-lg text-white hover:bg-blue-600 transition-transform transform hover:-translate-y-1 hover:shadow-lg"
        >
          View My Work
        </a>

        {/* 🌟 Animated Download CV Button with Icon */}
        <motion.a
          href="/Zephaniah_Aseka_Software_engineer.pdf"
          download="Zeph_Aseka_CV"
          className="relative border border-blue-500 px-6 py-3 rounded-lg text-blue-400 overflow-hidden group flex items-center justify-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Pulsing glow */}
          <span className="absolute inset-0 bg-blue-500 opacity-10 blur-md animate-pulse group-hover:opacity-20 transition" />

          {/* Button content */}
          <span className="relative z-10 flex items-center gap-2">
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              Download Resume
            </span>

            {/* Download icon animation */}
            <motion.span
              className="text-blue-400"
              initial={{ y: 0 }}
              whileHover={{
                y: [0, -4, 0],
                transition: { duration: 0.6, repeat: Infinity },
              }}
            >
              <Download size={20} />
            </motion.span>
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
