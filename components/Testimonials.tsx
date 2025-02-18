"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "David Wilson",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    content:
      "The team at Jashore Installation Service provided exceptional service for our CCTV installation. Their attention to detail and professionalism was outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: "Lisa Anderson",
    role: "Hotel Manager",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    content:
      "We're extremely satisfied with the solar panel installation. The team was knowledgeable and completed the project ahead of schedule.",
    rating: 5,
  },
  {
    id: 3,
    name: "Robert Chang",
    role: "Restaurant Owner",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    content:
      "Their electrical work was impeccable. They helped us upgrade our entire electrical system with minimal disruption to our business.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Do not just take our word for it. Here is what our clients have to
              say about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={500}
                    height={300}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
                <p className="mb-6">{testimonial.content}</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaRegStar key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
