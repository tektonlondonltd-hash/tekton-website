
import Head from "next/head";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Scene = dynamic(() => import("../components/Scene"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tekton London – High-End Renovation & Development</title>
        <meta name="description" content="Luxury renovations, bespoke joinery and construction by Tekton London Ltd." />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white min-h-screen text-black font-sans"
      >
        <header className="fixed w-full bg-white shadow-md p-6 z-50 flex justify-between">
          <h1 className="text-xl font-bold text-teal-800">Tekton London</h1>
          <nav className="space-x-4 hidden md:block">
            <a href="#about" className="hover:text-teal-600">About</a>
            <a href="#services" className="hover:text-teal-600">Services</a>
            <a href="#contact" className="hover:text-teal-600">Contact</a>
          </nav>
        </header>
        <main className="pt-24 px-6">
          <section className="text-center py-20 bg-gradient-to-br from-gray-100 to-white">
            <motion.h2 className="text-4xl font-bold mb-4" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6 }}>Luxury Renovation in London</motion.h2>
            <p className="mb-8 text-lg text-gray-700">Where modern design meets timeless craftsmanship.</p>
            <button className="bg-teal-700 text-white px-6 py-2 rounded-xl">Explore Projects</button>
          </section>
          <section className="h-[400px]">
            <Scene />
          </section>
        </main>
      </motion.div>
    </>
  );
}
