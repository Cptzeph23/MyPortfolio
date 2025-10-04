import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_kohfofq", "template_p3yspjp", form, "uWNlikjeAPJhZ0pZR")
      .then(() => {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      });
  };

  return (
    <section id="contact" className="py-20 px-8 bg-gray-950 text-center">
      <motion.h2
        className="text-4xl font-bold text-blue-400 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      {sent ? (
        <motion.p
          className="text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Message Sent! Thank you, I’ll reply soon.
        </motion.p>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="Your Name" className="w-full p-3 rounded bg-gray-800 text-gray-200 focus:outline-none" required />
          <input type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="Your Email" className="w-full p-3 rounded bg-gray-800 text-gray-200 focus:outline-none" required />
          <textarea name="message" value={form.message} onChange={handleChange}
            placeholder="Your Message" className="w-full p-3 rounded bg-gray-800 text-gray-200 focus:outline-none" required />
          <button type="submit" className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Submit
          </button>
        </motion.form>
      )}
    </section>
  );
}
