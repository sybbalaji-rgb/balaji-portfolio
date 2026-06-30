import { motion } from "motion/react";
import { FaAward, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import certifications from "../../data/certifications";

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative bg-[#09090B] py-28 px-6 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-blue-400">
            Achievements
          </p>

          <h2 className="text-5xl font-black mt-3">
            My <span className="text-blue-500">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((cert) => (

            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,.25)] transition-all"
            >

              <div className="flex items-center gap-4 mb-6">

                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-2xl">
                  <FaAward />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400">
                    {cert.issuer}
                  </p>
                </div>

              </div>

              <div className="flex justify-between items-center mb-6">

                <span className="text-blue-400">
                  📅 {cert.year}
                </span>

                <span className="flex items-center gap-2 text-green-400">
                  <FaCheckCircle />
                  {cert.status}
                </span>

              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full transition"
              >
                <FaExternalLinkAlt />
                View Credential
              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;