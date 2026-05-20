import { useState } from "react";
import { motion } from "framer-motion";

const menuData = {
  Starters: [
    "Truffle Arancini",
    "Tuna Tartare",
    "Oyster Selection",
    "Burrata & Heirloom Tomatoes",
    "Foie Gras Torchon",
    "Crispy Calamari",
    "Beef Carpaccio",
    "Lobster Bisque",
    "Smoked Salmon Blinis",
    "Wild Mushroom Velouté",
    "Grilled Octopus",
    "Duck Liver Parfait",
    "Stuffed Zucchini Blossoms",
    "Seared Scallops",
    "Crab Cakes",
    "Prosciutto & Melon",
    "Tempura Shrimp",
    "French Onion Soup",
    "Escargot Butter",
    "Chilled Gazpacho",
    "Caviar Service",
    "Charcuterie Board",
    "Baked Brie",
    "Spicy Tuna Crisps",
    "Lemon Herb Prawns",
  ],

  Mains: [
    "A5 Wagyu Ribeye",
    "Filet Mignon",
    "Lobster Thermidor",
    "Duck à l’Orange",
    "Pan Seared Halibut",
    "Herb Crusted Lamb Rack",
    "Truffle Risotto",
    "Wild Salmon",
    "Short Rib Bourguignon",
    "Chicken Supreme",
    "Sea Bass en Papillote",
    "Veal Milanese",
    "Pasta Carbonara",
    "Pappardelle Bolognese",
    "Grilled Swordfish",
    "Roasted Cornish Hen",
    "Black Cod Miso",
    "Braised Lamb Shank",
    "Vegetable Wellington",
    "Stuffed Bell Peppers",
    "Prime Rib Roast",
    "Duck Breast with Cherry Glaze",
    "Seafood Paella",
    "Butternut Squash Ravioli",
    "Miso Glazed Eggplant",
  ],

  Desserts: [
    "Chocolate Lava Cake",
    "Crème Brûlée",
    "Tiramisu",
    "Panna Cotta",
    "Lemon Tart",
    "New York Cheesecake",
    "Molten Brownie",
    "Vanilla Bean Gelato",
    "Dark Chocolate Mousse",
    "Apple Tarte Tatin",
    "Raspberry Soufflé",
    "Sticky Toffee Pudding",
    "Matcha Cheesecake",
    "Cannoli",
    "Poached Pear",
    "Baklava",
    "Profiteroles",
    "Ice Cream Trio",
    "Strawberry Mille-Feuille",
    "Caramel Flan",
    "Banoffee Pie",
    "Sorbet Selection",
    "Chocolate Sphere",
    "Coconut Panna Cotta",
    "Honey Almond Tart",
  ],
};

function generateItems(category) {
  return Array.from({ length: 34 }).map((_, i) => {
    const base = menuData[category];
    const name = base[i % base.length];

    return {
      name,
      price: `$${(18 + (i % 12) * 3).toFixed(0)}`,
      desc: "Seasonally curated dish prepared with premium ingredients and Michelin-level technique.",
    };
  });
}

export default function Menu() {
  const categories = Object.keys(menuData);
  const [active, setActive] = useState("Mains");

  const items = generateItems(active);

  return (
    <section className="pt-24 sm:pt-28 pb-20 sm:pb-24 px-4 sm:px-6 bg-[#050505] text-white min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-[#d4af37] tracking-[0.35em] uppercase text-xs mb-6">
            Full Dining Menu
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light leading-tight">
            Culinary Selection
          </h1>

          <p className="text-white/60 max-w-2xl mx-auto mt-6 text-sm sm:text-base">
            A comprehensive selection of over 100 seasonal dishes crafted with precision,
            balance, and intention.
          </p>

          <div className="w-24 h-[1px] bg-[#d4af37] mx-auto mt-10" />
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm border transition min-h-[40px] sm:min-h-[44px] ${
                active === cat
                  ? "bg-[#d4af37] text-black border-[#d4af37]"
                  : "border-white/10 text-white/60 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MENU LIST */}
        <div className="space-y-4">

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.01 }}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-b border-white/10 pb-4"
            >

              <div className="pr-2">
                <h3 className="text-base sm:text-lg font-light">
                  {item.name}
                </h3>

                <p className="text-white/40 text-xs sm:text-sm mt-1">
                  {item.desc}
                </p>
              </div>

              <div className="text-[#d4af37] whitespace-nowrap sm:ml-6 text-sm sm:text-base">
                {item.price}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}