"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Corporate CCTV Installation",
    category: "CC Camera",
    image: "/work/cccamera.jpg",
    description:
      "Complete CCTV system installation for a corporate office building",
  },
  {
    id: 2,
    title: "Solar Power Plant",
    category: "Solar Panel",
    image: "/work/solar.jpg",
    description: "1MW solar power plant installation for industrial complex",
  },
  {
    id: 3,
    title: "Smart Home Automation",
    category: "Electrical",
    image: "/work/automation.jpg",
    description: "Complete smart home electrical system installation",
  },
  {
    id: 4,
    title: "Network Infrastructure",
    category: "IT Solution",
    image: "/work/network.jpg",
    description: "Enterprise-level network infrastructure setup",
  },
  {
    id: 5,
    title: "Web Development",
    category: "Software",
    image: "/work/webdev.jpg",
    description: "Enterprise-level network infrastructure setup",
  },
];

const PreviousWork = () => {
  return (
    <>
      <section className="py-20 ">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
              Our Previous Work
            </h2>
            <p className="text-lg  max-w-3xl mx-auto">
              Take a look at some of our recent projects and installations
              across different sectors.
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
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0  bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 ">
                  <span className="inline-block px-3 py-1 bg-primary/90 rounded-full text-sm mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PreviousWork;
