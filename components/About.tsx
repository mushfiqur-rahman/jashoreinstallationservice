"use client";
import React from "react";
import { motion } from "framer-motion";
import { GiCctvCamera } from "react-icons/gi";
import { GoZap } from "react-icons/go";
import { GiSolarPower } from "react-icons/gi";
import { FaLaptop } from "react-icons/fa";

const services = [
  {
    icon: <GiCctvCamera className="w-8 h-8" />,
    title: "CC Camera Installation",
    description:
      "Professional CCTV installation with 24/7 monitoring capabilities and HD quality footage.",
  },
  {
    icon: <GoZap className="w-8 h-8" />,
    title: "Electrical Work",
    description:
      "Complete electrical solutions for residential and commercial properties with safety standards.",
  },
  {
    icon: <GiSolarPower className="w-8 h-8" />,
    title: "Solar Panel Setup",
    description:
      "Sustainable energy solutions with expert solar panel installation and maintenance.",
  },
  {
    icon: <FaLaptop className="w-8 h-8" />,
    title: "IT Consultancy",
    description:
      "Professional IT consulting services to optimize your business technology infrastructure.",
  },
];

const About = () => {
  return (
    <>
      <section className="py-20">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Our Services
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              We provide comprehensive installation and maintenance services in
              Jashore, Bangladesh. Our team of experts ensures quality service
              delivery with the latest technology and industry standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
