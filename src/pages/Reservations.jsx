import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Reservations() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 2,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation request submitted!");
    console.log(form);
  };

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold">
            Reserve a Table
          </h1>
          <p className="text-white/60 mt-4">
            Book your unforgettable dining experience at Great Eats
          </p>
        </div>

        {/* FORM CARD */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 space-y-6"
        >
          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-4 rounded-xl bg-black border border-white/10 focus:outline-none focus:border-amber-400"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-4 rounded-xl bg-black border border-white/10 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* DATE + TIME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black border border-white/10 focus:outline-none focus:border-amber-400"
            />

            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black border border-white/10 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* GUESTS */}
          <input
            type="number"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            min="1"
            max="20"
            placeholder="Number of Guests"
            className="w-full p-4 rounded-xl bg-black border border-white/10 focus:outline-none focus:border-amber-400"
          />

          {/* BUTTON */}
          <Button
            type="submit"
            className="w-full py-6 text-lg rounded-2xl"
          >
            Confirm Reservation
          </Button>
        </motion.form>

        {/* INFO SECTION */}
        <div className="text-center mt-10 text-white/50 text-sm">
          <p>We typically respond within 1–2 hours.</p>
          <p>For large groups, please call us directly.</p>
        </div>

      </div>
    </section>
  );
}