export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center text-white/60">
        <p className="text-lg font-semibold text-white mb-2">Great Eats</p>
        <p className="text-sm">
          Fine dining experience crafted with passion.
        </p>
        <p className="text-xs mt-4 text-white/40">
          © {new Date().getFullYear()} Great Eats. All rights reserved.
        </p>
      </div>
    </footer>
  );
}