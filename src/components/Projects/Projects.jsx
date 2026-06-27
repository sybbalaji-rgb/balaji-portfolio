import { Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import projects from "../../data/projects";

function Projects() {
  return (
    <section className="bg-[#09090B] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Featured <span className="text-blue-500">Projects</span>
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl"
            >

              <div className="h-52 bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-gray-300">
                  {project.title}
                </h3>
              </div>

              <div className="p-6">

                <p className="text-gray-400 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">

                  <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition">
                    <Github size={18} />
                    GitHub
                  </button>

                  <button className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-600 hover:border-blue-500 transition">
                    <ExternalLink size={18} />
                    Live
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;