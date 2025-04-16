"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaClock, FaAward, FaUsers } from "react-icons/fa";

const reasons = [
  {
    icon: <FaShieldAlt className="w-12 h-12" />,
    title: "Trusted Service",
    description:
      "Over 10 years of experience in providing reliable installation services.",
  },
  {
    icon: <FaClock className="w-12 h-12" />,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance services.",
  },
  {
    icon: <FaAward className="w-12 h-12" />,
    title: "Certified Experts",
    description:
      "Team of certified professionals with extensive industry knowledge.",
  },
  {
    icon: <FaUsers className="w-12 h-12" />,
    title: "Customer Satisfaction",
    description:
      "High customer satisfaction rate with quality service delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">কেন আমাদের থেকে সেবা নিবেন</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We take pride in delivering exceptional service quality and
            maintaining high professional standards in all our work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
