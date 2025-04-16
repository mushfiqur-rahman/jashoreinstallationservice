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
    title: "সিসি ক্যামেরা ইন্সটল",
    description:
      "Professional CCTV installation with 24/7 monitoring capabilities and HD quality footage.",
  },
  {
    icon: <GoZap className="w-8 h-8" />,
    title: "ইলেকট্রিক ওয়্যারিং",
    description:
      "Complete electrical solutions for residential and commercial properties with safety standards.",
  },
  {
    icon: <GiSolarPower className="w-8 h-8" />,
    title: "সোলার সিস্টেম ইন্সটল",
    description:
      "Sustainable energy solutions with expert solar panel installation and maintenance.",
  },
  {
    icon: <FaLaptop className="w-8 h-8" />,
    title: "প্রযুক্তি বিষয়ে সু-পরামর্শ প্রদান",
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
              আমাদের পরিচিতি
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              আমাদের বিশেষজ্ঞ দলের প্রত্যেক সদস্য স্ব স্ব বিষয়ে অন্যন্য এবং ১২
              বছরের বেশি অভিজ্ঞতা সমপন্ন, যারা দেশের বড় বড় প্রতিষ্ঠানে কাজ করার
              পাশাপাশি আন্তর্জাতিক ভাবে সেবা প্রদানে সচেষ্ট। আমরা সাশ্রয়ী মূল্যে
              সর্বোত্তম সেবা প্রাদানের লক্ষ্যে কাজ করে যাচ্ছি।
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
