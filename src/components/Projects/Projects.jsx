import { useState } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../data/projects";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative bg-[#09090B] text-white py-28 px-6 overflow-hidden"
    >
      
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[6px]">
            My Work
          </p>

          <h2 className="text-5xl font-black mt-3">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project) => (

  <motion.div
    key={project.id}
    onClick={() => setSelectedProject(project)}
    style={{ cursor: "pointer" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              viewport={{ once: true }}
              transition={{ duration: .4 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,.25)] transition-all"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 mt-5">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-5 mt-10">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full transition"
                  >
                    <FaGithub />

                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-full transition"
                  >
                    <FaExternalLinkAlt />

                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
      <ProjectModal
  project={selectedProject}
  onClose={() => setSelectedProject(null)}
/>
    </section>
  );
}

export default Projects;