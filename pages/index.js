// FULL HOMEPAGE CODE FOR CODESANDBOX OR LOCAL PREVIEW
// React + Tailwind CSS + Framer Motion + Parallax (hero section)

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-white text-black min-h-screen font-sans scroll-smooth"
    >
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-teal-800 uppercase">Tekton London</h1>
          <nav className="space-x-6 hidden md:block">
            <a href="#about" className="text-sm text-gray-700 hover:text-teal-700">About</a>
            <a href="#services" className="text-sm text-gray-700 hover:text-teal-700">Services</a>
            <a href="#reviews" className="text-sm text-gray-700 hover:text-teal-700">Reviews</a>
            <a href="#contact" className="text-sm text-gray-700 hover:text-teal-700">Contact</a>
          </nav>
        </div>
      </header>

      <div className="h-20" />

      {/* Hero Section with Parallax */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
        id="home"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
        <Parallax speed={-10}>
          <motion.div
            className="relative z-10 text-center text-white px-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 className="text-5xl font-bold tracking-wide uppercase">
              Tekton London
            </motion.h1>
            <p className="mt-4 text-xl">
              Property Renovation & High-End Development
            </p>
            <Button className="mt-6 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-2xl">
              View Our Work
            </Button>
          </motion.div>
        </Parallax>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold text-teal-800 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg">
            Tekton London Ltd is a premium construction and renovation company
            based in London. We specialise in high-end residential refurbishments,
            bespoke interiors, and property development with unmatched attention to
            detail, quality craftsmanship, and modern aesthetics.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-semibold text-teal-800 text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-2">Full Property Renovations</h3>
              <p className="text-gray-600">Comprehensive refurbishments and structural upgrades for residential properties.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Kitchen & Bathroom Installations</h3>
              <p className="text-gray-600">Luxury kitchens, bespoke bathrooms, and smart design solutions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Custom Joinery</h3>
              <p className="text-gray-600">Bespoke wardrobes, media walls, alcove units, and cabinetry.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Painting & Decorating</h3>
              <p className="text-gray-600">Interior and exterior painting, decorative finishes, and wall coverings.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Placeholder for Reviews and Contact sections */}
    </motion.div>
  );
}
