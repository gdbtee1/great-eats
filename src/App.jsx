import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>

      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />
          <AnimatedRoutes />
        </>
      )}

    </Router>
  );
}