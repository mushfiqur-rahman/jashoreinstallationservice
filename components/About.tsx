"use client";

import { motion } from "framer-motion";
import { Camera, Zap, Sun, Laptop } from "lucide-react";

const services = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "CC Camera Installation",
    description: "Professional CCTV installation with 24/7 monitoring capabilities and HD quality footage."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Electrical Work",
    description: "Complete electrical solutions for residential and commercial properties with safety standards."
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Solar Panel Setup",
    description: "Sustainable energy solutions with expert solar panel installation and maintenance."
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "IT Consultancy",
    description: "Professional IT consulting services to optimize your business technology infrastructure."
  }
];

export default function About() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive installation and maintenance services in Jashore, Bangladesh. Our team of experts ensures quality service delivery with the latest technology and industry standards.
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
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}