import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";

function Contact() {
  return (
    <section className="bg-[#09090B] py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Let's <span className="text-blue-500">Connect</span>
        </motion.h2>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-10 backdrop-blur-xl">

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" />
              <a
                href="mailto:sybbalaji@gmail.com"
                className="hover:text-blue-400 transition"
              >
                sybbalaji@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-400" />
              <span>+91 6374834844</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" />
              <span>Coimbatore, Tamil Nadu</span>
            </div>

          </div>

          <div className="flex gap-5 mt-10 flex-wrap">

            <a
              href="https://github.com/sybbalaji-rgb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/balaji-s-y-b22283380/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-500 hover:border-blue-500 transition"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;