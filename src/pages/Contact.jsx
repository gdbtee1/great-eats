import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    type: "General Inquiry",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted — we will respond shortly.");
  };

  return (
    <section className="pt-24 sm:pt-28 pb-20 px-4 sm:px-6 bg-[#050505] text-white min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-[#d4af37] tracking-[0.35em] uppercase text-xs mb-6">
            Contact & Support
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light leading-tight">
            Get in Touch
          </h1>

          <p className="text-white/60 max-w-2xl mx-auto mt-6 text-sm sm:text-base">
            For reservations, private dining, partnerships, or general inquiries,
            our team responds within 24–48 hours.
          </p>

          <div className="w-24 h-[1px] bg-[#d4af37] mx-auto mt-10" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT INFO PANEL */}
          <div className="space-y-6">

            <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
              <h2 className="text-xl font-light mb-2">Reservations</h2>
              <p className="text-white/60 text-sm">
                Book your dining experience or private chef table.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
              <h2 className="text-xl font-light mb-2">Private Dining</h2>
              <p className="text-white/60 text-sm">
                Exclusive tasting menus for events and private groups.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
              <h2 className="text-xl font-light mb-2">Partnerships</h2>
              <p className="text-white/60 text-sm">
                Collaborations, press, and culinary partnerships.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
              <h2 className="text-xl font-light mb-2">Response Time</h2>
              <p className="text-white/60 text-sm">
                Typically within 24–48 hours depending on request type.
              </p>
            </div>

          </div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-white/10 rounded-2xl p-6 sm:p-8 bg-white/5 space-y-5"
          >

            {/* TYPE */}
            <div>
              <label className="text-xs text-white/50">Request Type</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full mt-2 bg-black border border-white/10 rounded-xl px-4 py-3 text-white"
              >
                <option>General Inquiry</option>
                <option>Reservation</option>
                <option>Private Dining</option>
                <option>Partnership</option>
              </select>
            </div>

            {/* NAME */}
            <div>
              <label className="text-xs text-white/50">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-2 bg-black border border-white/10 rounded-xl px-4 py-3 text-white"
                placeholder="Your name"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-xs text-white/50">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 bg-black border border-white/10 rounded-xl px-4 py-3 text-white"
                placeholder="you@email.com"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-xs text-white/50">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="w-full mt-2 bg-black border border-white/10 rounded-xl px-4 py-3 text-white resize-none"
                placeholder="Tell us about your request..."
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#d4af37] text-black py-4 rounded-xl font-medium hover:scale-[1.02] transition min-h-[44px]"
            >
              Submit Request
            </button>

            <p className="text-xs text-white/40 text-center">
              Secure message submission • Response within 48 hours
            </p>

          </motion.form>

        </div>
      </div>
    </section>
  );
}