import { motion } from "motion/react";
import certifications from "../../data/certifications";

function Certifications() {
  return (
    <section className="bg-[#09090B] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl"
            >
              <h3 className="text-xl font-bold text-white">
                {cert.title}
              </h3>

              <p className="text-blue-400 mt-3">
                {cert.issuer}
              </p>

              <p className="text-gray-400 mt-2">
                {cert.year}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;