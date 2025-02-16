"use client";

import { motion } from "framer-motion";
import { 
  Camera, 
  Wifi, 
  Zap, 
  Sun, 
  Network, 
  Globe, 
  Server, 
  Smartphone, 
  Laptop, 
  Mail, 
  Headphones 
} from "lucide-react";

const services = [
  {
    icon: <Camera className="w-12 h-12" />,
    title: "CC Camera Installation",
    description: "Professional CCTV camera installation with 24/7 monitoring capabilities, motion detection, and HD quality footage for enhanced security.",
    features: [
      "HD Quality Footage",
      "Motion Detection",
      "Night Vision",
      "Remote Monitoring"
    ]
  },
  {
    icon: <Camera className="w-12 h-12" />,
    title: "IP Camera Setup",
    description: "Advanced IP camera solutions with remote access, high-resolution video, and intelligent surveillance features for your security needs.",
    features: [
      "Remote Access",
      "High Resolution",
      "Smart Analytics",
      "Cloud Storage"
    ]
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Electrician Work",
    description: "Complete electrical solutions for residential and commercial properties, ensuring safety and efficiency in all installations.",
    features: [
      "Wiring Installation",
      "Circuit Testing",
      "Emergency Repairs",
      "Safety Inspections"
    ]
  },
  {
    icon: <Sun className="w-12 h-12" />,
    title: "Solar System Installation",
    description: "Sustainable energy solutions with expert solar panel installation, maintenance, and optimization for maximum efficiency.",
    features: [
      "Panel Installation",
      "Battery Storage",
      "System Monitoring",
      "Maintenance"
    ]
  },
  {
    icon: <Network className="w-12 h-12" />,
    title: "Office Network Setup",
    description: "Professional network infrastructure setup for offices, ensuring reliable connectivity and optimal performance.",
    features: [
      "LAN Setup",
      "Network Security",
      "Hardware Installation",
      "Performance Optimization"
    ]
  },
  {
    icon: <Wifi className="w-12 h-12" />,
    title: "WiFi Configuration",
    description: "Expert WiFi network setup and optimization for seamless wireless connectivity across your space.",
    features: [
      "Coverage Analysis",
      "Security Setup",
      "Speed Optimization",
      "Guest Networks"
    ]
  },
  {
    icon: <Server className="w-12 h-12" />,
    title: "Internet Server Setup",
    description: "Comprehensive server installation and configuration services for reliable internet connectivity.",
    features: [
      "Server Installation",
      "Configuration",
      "Maintenance",
      "Security Setup"
    ]
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Android App Development",
    description: "Custom Android application development tailored to your business needs with modern features and intuitive design.",
    features: [
      "Custom Development",
      "UI/UX Design",
      "App Testing",
      "Play Store Publishing"
    ]
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Website Development",
    description: "Professional website development services using latest technologies and responsive design principles.",
    features: [
      "Custom Design",
      "Responsive Layout",
      "SEO Optimization",
      "Content Management"
    ]
  },
  {
    icon: <Mail className="w-12 h-12" />,
    title: "Business Email Configuration",
    description: "Professional email setup and configuration services for your business communications.",
    features: [
      "Domain Setup",
      "Email Configuration",
      "Spam Protection",
      "Backup Solutions"
    ]
  },
  {
    icon: <Headphones className="w-12 h-12" />,
    title: "IT Consultancy",
    description: "Expert IT consulting services to help optimize your business technology infrastructure and processes.",
    features: [
      "Technology Assessment",
      "Strategic Planning",
      "Security Audits",
      "Process Optimization"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive installation and technology solutions for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}