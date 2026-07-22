import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { PRODUCTS_DATA } from "@/lib/sanity.client";
import { ShoppingBag, Star, Sparkles, Filter } from "lucide-react";

export const metadata = {
  title: "QShala Curiosity Store | Books, Games & Learning Kits",
  description: "Shop QShala's handcrafted trivia card decks, science books, money kits, and QT mascot plushies."
};

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFF]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-[#FDB913]/20 text-amber-900 font-black text-xs uppercase tracking-wider">
              🛍️ Official Curiosity Merch & Games
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mt-3">
              The QShala <span className="text-[#FDB913]">Store.</span>
            </h1>
            <p className="text-slate-600 text-lg mt-4">
              Bring screen-free curiosity home with our award-winning card decks, books, and interactive activity kits.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS_DATA.map((product) => (
              <div key={product.id} className="glass-panel rounded-3xl p-6 border border-slate-200 shadow-playful hover:-translate-y-2 transition-all flex flex-col justify-between group">
                <div>
                  <div className={`h-48 rounded-2xl ${product.imageColor} flex items-center justify-center text-white font-black text-2xl p-6 shadow-inner mb-4 relative overflow-hidden`}>
                    {product.isPopular && (
                      <span className="absolute top-3 right-3 px-3 py-1 bg-white text-slate-900 font-black text-xs rounded-full shadow-md">
                        BESTSELLER
                      </span>
                    )}
                    <span className="group-hover:scale-110 transition-transform">{product.title.split(' ')[0]}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-1">
                    <span className="uppercase text-[#30B2E7]">{product.category}</span>
                    <span className="flex items-center gap-1 text-amber-500"><Star className="w-3.5 h-3.5 fill-amber-400" /> {product.rating}</span>
                  </div>

                  <h2 className="text-xl font-black text-slate-900 mb-2">{product.title}</h2>
                  <p className="text-slate-500 text-xs leading-relaxed">{product.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-2xl font-black text-slate-900">{product.price}</span>
                  <button className="px-5 py-2.5 rounded-full bg-[#30B2E7] hover:bg-[#1C8CBF] text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-1">
                    <ShoppingBag className="w-3.5 h-3.5" /> Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
