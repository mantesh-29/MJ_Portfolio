import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["About", "Skills", "Projects", "Experience", "Qualifications","Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-gray-950 backdrop-blur-md border-b border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        {/* Logo */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl font-bold tracking-tight shrink-0"
        >
          <a href="#Hero" className="text-white hover:text-cyan-400 transition-colors duration-300 font-mono">
            MJ<span className="text-cyan-400">.</span>Portfolio
          </a>
        </motion.h3>





        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
              className="relative px-3 py-1.5 text-sm text-white/60 hover:text-white font-medium tracking-wide transition-colors duration-200 group"
            >
              {item}
              <span className="absolute bottom-0 left-3 right-3 h-px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden md:flex items-center gap-3 shrink-0"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/50 px-4 py-1.5 rounded-full transition-all duration-200 font-medium"
          >
            View Resume
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="text-sm bg-cyan-400 hover:bg-cyan-300 text-[#0a0a0f] font-semibold px-4 py-1.5 rounded-full transition-all duration-200 shadow-[0_0_16px_rgba(34,211,238,0.3)] hover:shadow-[0_0_24px_rgba(34,211,238,0.5)]"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Mobile Hamburger */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            transition={{ duration: 0.3 }}
            className="block h-0.5 w-6 bg-white origin-center"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            transition={{ duration: 0.3 }}
            className="block h-0.5 w-6 bg-white origin-center"
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-[#0a0a0f]/95"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/60 hover:text-white py-2 text-sm font-medium tracking-wide border-b border-white/5 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="flex gap-3 pt-3"
              >
                <a href="#" className="text-sm text-white/70 border border-white/20 px-4 py-1.5 rounded-full">
                  View Resume
                </a>
                <a href="#contact" className="text-sm bg-cyan-400 text-[#0a0a0f] font-semibold px-4 py-1.5 rounded-full">
                  Contact
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}