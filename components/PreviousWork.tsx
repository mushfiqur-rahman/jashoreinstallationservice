"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Corporate CCTV Installation",
    category: "CC Camera",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description:
      "Complete CCTV system installation for a corporate office building",
  },
  {
    id: 2,
    title: "Solar Power Plant",
    category: "Solar Panel",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "1MW solar power plant installation for industrial complex",
  },
  {
    id: 3,
    title: "Smart Home Automation",
    category: "Electrical",
    image:
      "https://unsplash.com/photos/a-house-with-a-solar-panel-on-the-roof-8kYf4o8C8wY?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Complete smart home electrical system installation",
  },
  {
    id: 4,
    title: "Network Infrastructure",
    category: "IT Solution",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Enterprise-level network infrastructure setup",
  },
];

export default function PreviousWork() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Previous Work
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent projects and installations across
            different sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 bg-gradient-to-t from-black to-transparent">
                <span className="inline-block px-3 py-1 bg-primary/90 rounded-full text-sm mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-200">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
