import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#050505] text-white">

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl">

          <p className="text-[#d4af37] tracking-[0.35em] uppercase text-xs sm:text-sm mb-6">
            Michelin Inspired Dining
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-light leading-tight break-words">
            Great Eats
          </h1>

          <div className="w-24 h-[1px] bg-[#d4af37] mx-auto my-8" />

          <p className="text-white/70 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            A curated culinary journey where every dish is designed with precision,
            emotion, and intention.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/reservations"
              className="bg-[#d4af37] text-black px-8 py-4 min-h-[44px] rounded-full font-medium hover:scale-105 transition"
            >
              Reserve Experience
            </Link>

            <Link
              to="/menu"
              className="border border-white/20 px-8 py-4 min-h-[44px] rounded-full hover:border-[#d4af37] transition"
            >
              Explore Menu
            </Link>

          </div>

        </div>
      </section>

      {/* INTRO STORY */}
      <section className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-[#d4af37] tracking-[0.35em] uppercase text-xs mb-6">
            Philosophy
          </p>

          <h2 className="text-4xl md:text-6xl font-light mb-8">
            Dining as an Experience, Not a Service
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
            At Great Eats, we approach cuisine as composition. Each plate is
            intentionally structured to evoke memory, balance, and emotion.
          </p>

        </div>
      </section>

      {/* FEATURED EXPERIENCE */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-[#d4af37] tracking-[0.35em] uppercase text-xs mb-4">
              Signature Experience
            </p>

            <h2 className="text-4xl md:text-6xl font-light">
              The Chef’s Selection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: "Oyster & Caviar",
                desc: "A refined opening course designed for sensory awakening.",
              },
              {
                title: "Wagyu Selection",
                desc: "Precision-cooked Japanese A5 beef with truffle essence.",
              },
              {
                title: "Chocolate Finale",
                desc: "A layered dessert experience with tableside presentation.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-light mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CHEF STORY TEASER */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400"
            className="rounded-3xl border border-white/10 w-full object-cover"
            alt="Chef"
          />

          <div>
            <p className="text-[#d4af37] tracking-[0.35em] uppercase text-xs mb-6">
              The Chef
            </p>

            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Precision. Discipline. Emotion.
            </h2>

            <p className="text-white/60 leading-relaxed mb-8">
              Every dish is built with restraint and purpose. Nothing is accidental —
              everything has meaning.
            </p>

            <Link
              to="/about"
              className="text-[#d4af37] border border-[#d4af37] px-6 py-3 min-h-[44px] rounded-full hover:bg-[#d4af37] hover:text-black transition"
            >
              Our Philosophy
            </Link>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 text-center border-t border-white/10">

        <h2 className="text-4xl md:text-6xl font-light mb-6">
          Reserve Your Experience
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto mb-10">
          Every evening at Great Eats is a limited, curated experience.
        </p>

        <Link
          to="/reservations"
          className="bg-[#d4af37] text-black px-10 py-4 min-h-[44px] rounded-full hover:scale-105 transition"
        >
          Book Now
        </Link>

      </section>

    </div>
  );
}