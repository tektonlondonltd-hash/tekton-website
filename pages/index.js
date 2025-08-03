
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { Phone } from 'lucide-react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function Home() {
  return (
    <ParallaxProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white text-black min-h-screen font-sans scroll-smooth"
      >
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

        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/hero.jpg')" }}
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
              <motion.h1 className="text-5xl font-bold tracking-wide uppercase">Tekton London</motion.h1>
              <p className="mt-4 text-xl">Property Renovation & High-End Development</p>
              <button className="mt-6 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-2xl">
                View Our Work
              </button>
            </motion.div>
          </Parallax>
        </section>

        <footer className="bg-black text-white py-10 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://www.instagram.com/tekton_london_ltd/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@ilia_rudaj" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={24} />
            </a>
          </div>
          <p className="flex justify-center items-center gap-2 text-sm">
            <Phone size={16} /> +44 7999 875689
          </p>
          <p className="mt-2 text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Tekton London Ltd. All rights reserved.
          </p>
        </footer>
      </motion.div>
    </ParallaxProvider>
  );
}
