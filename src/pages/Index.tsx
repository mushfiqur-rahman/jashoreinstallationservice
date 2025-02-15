import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import {
  Shield,
  Zap,
  Users,
  Trophy,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Camera,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-50" />
        <div className="container relative z-10 px-4 py-32 text-center text-white">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to
              <span className="text-primary">
                {" "}
                Jashore Installation Service
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Professional CCTV installation and electrical services for your
              home and business
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver excellence in security and electrical solutions with
              our experienced team and cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  "p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow",
                  "animate-fade-up"
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Expert Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our dedicated professionals who ensure your security and
              electrical needs are met with excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="aspect-square relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What our clients say about our services and dedication to
              excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center space-x-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Work Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Previous Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our portfolio of successful installations and
              projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-black px-4 py-2 rounded-full flex items-center space-x-2">
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        {/* Main Footer */}
        <div className="container px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Camera className="w-6 h-6" />
                <span className="text-xl font-bold">Jashore Installation</span>
              </div>
              <p className="text-gray-400">
                Professional CCTV and electrical installation services for your
                security needs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    CCTV Installation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Electrical Work
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Maintenance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Hushtola Bou Bazar</li>
                <li>Bokchor, Jashore, Bangladesh</li>
                <li>Phone: +880 1737-760068</li>
                <li>Email: info@jashoreinstallationservice.com</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="container px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400">
                © {new Date().getFullYear()} Jashore Installation Service. All
                rights reserved.
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/JashoreInstallationService"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/jashoreis"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/jashoreinstallationservice/"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/jashore-installation-service"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Data for features section
const features = [
  {
    icon: Shield,
    title: "Expert Security",
    description:
      "Professional installation and maintenance of high-quality security systems",
  },
  {
    icon: Zap,
    title: "Electrical Excellence",
    description: "Certified electricians for all your electrical needs",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Experienced professionals committed to your satisfaction",
  },
  {
    icon: Trophy,
    title: "Quality Assured",
    description: "Industry-leading warranty and after-sales support",
  },
];

// Data for team section
const team = [
  {
    name: "John Smith",
    role: "Lead Technician",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Sarah Johnson",
    role: "Electrical Engineer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Brown",
    role: "Security Specialist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Emily Davis",
    role: "Customer Relations",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

// Data for testimonials section
const testimonials = [
  {
    name: "Alex Thompson",
    role: "Business Owner",
    comment:
      "Excellent service! The team was professional and completed the installation ahead of schedule.",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Maria Garcia",
    role: "Shop Manager",
    comment:
      "Very satisfied with their work. The CCTV system they installed has been working perfectly.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "David Wilson",
    role: "Restaurant Owner",
    comment:
      "Great team, very knowledgeable and professional. Highly recommend their services!",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
  },
];

// Data for projects section
const projects = [
  {
    title: "Commercial CCTV Installation",
    description: "Complete security system installation for a shopping complex",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Residential Security",
    description: "Home security system with smart monitoring features",
    image:
      "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Industrial Electrical Work",
    description: "Factory-wide electrical system upgrade and maintenance",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export default Index;
