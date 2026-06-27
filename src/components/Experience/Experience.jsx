import { motion } from "motion/react";
import experiences from "../../data/experience";

function Experience() {
  return (
    <section className="bg-[#09090B] py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              whileHover={{ y: -5 }}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold">{exp.title}</h3>

              <p className="text-blue-400 mt-2">
                {exp.company} • {exp.duration}
              </p>

              <p className="text-gray-500 mt-1">
                {exp.location}
              </p>

              <p className="text-gray-400 mt-6 leading-8">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;