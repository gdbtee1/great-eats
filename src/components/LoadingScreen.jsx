import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#050505] flex items-center justify-center z-[999]">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.h1
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-light tracking-[0.3em]"
        >
          GREAT EATS
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1 }}
          className="h-[1px] bg-[#d4af37] mx-auto mt-6"
        />

        <p className="text-white/40 mt-6 text-sm tracking-widest">
          CURATED DINING EXPERIENCE
        </p>
      </motion.div>

    </div>
  );
}