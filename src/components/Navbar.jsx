import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Reservations", path: "/reservations" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-white tracking-[0.35em] text-sm">
          GREAT EATS
        </Link>

        {/* DESKTOP */}
        <nav className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white/60 hover:text-[#d4af37] transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl leading-none"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-white/10 bg-black"
          >
            <div className="flex flex-col px-6 py-6 gap-5">

              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-[#d4af37]"
                >
                  {link.name}
                </Link>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}