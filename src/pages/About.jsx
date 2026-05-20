import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="pt-28 pb-24 px-4 sm:px-6 bg-[#050505] text-white min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* HERO HEADER */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#d4af37] tracking-[0.35em] uppercase text-xs mb-6"
          >
            The Philosophy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-light leading-tight"
          >
            Crafting Moments, Not Just Meals
          </motion.h1>

          <div className="w-24 h-[1px] bg-[#d4af37] mx-auto mt-8" />

          <p className="text-white/60 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            At Great Eats, we believe dining is not consumption — it is an experience
            shaped by emotion, detail, and intention.
          </p>
        </div>

        {/* MAIN STORY SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400"
              alt="Chef preparing food"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </motion.div>

          {/* STORY TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-light">
              A Pursuit of Excellence
            </h2>

            <p className="text-white/60 leading-relaxed">
              Every dish begins with intention — not ingredients. Our chefs design
              each plate as a composition of texture, balance, and emotion.
            </p>

            <p className="text-white/60 leading-relaxed">
              Inspired by Michelin-level discipline, we focus on restraint rather
              than excess. Simplicity becomes luxury when executed with precision.
            </p>

            <p className="text-white/60 leading-relaxed">
              From sourcing to plating, every detail is refined until nothing is
              unnecessary — and everything has meaning.
            </p>

            <div className="pt-4">
              <p className="text-[#d4af37] tracking-[0.25em] uppercase text-xs">
                Est. 2026 • Fine Dining Experience
              </p>
            </div>
          </motion.div>
        </div>

        {/* VALUES SECTION */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">

          {[
            {
              title: "Precision",
              desc: "Every plate is executed with exacting detail and balance.",
            },
            {
              title: "Restraint",
              desc: "We believe true luxury is knowing what NOT to add.",
            },
            {
              title: "Emotion",
              desc: "Food should not only taste — it should be remembered.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-light mb-3 group-hover:text-[#d4af37]">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}