import React, { useState } from 'react';
import QTMascot from './QTMascot';

export interface ProductItem {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  category: 'Books' | 'Games' | 'Learning Kits' | 'Stationery' | 'QShala Merch';
  subtitle: string;
  description: string;
  imageSrc: string;
  badge?: string;
  cardColor: string;
  mascotVariant: 'idea' | 'reading' | 'holding_money' | 'trophy' | 'curious';
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    title: 'Finance Quest',
    price: 299,
    originalPrice: 399,
    category: 'Books',
    subtitle: 'Starting early with financial literacy',
    description: 'An interactive illustrated storybook introducing kids to saving, budgeting, compound interest, and smart money habits through fun scenarios.',
    imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    badge: 'Bestseller',
    cardColor: '#FFF8E1',
    mascotVariant: 'holding_money'
  },
  {
    id: 'prod-2',
    title: 'Socratic Dinner Deck',
    price: 499,
    originalPrice: 649,
    category: 'Games',
    subtitle: '100 Socratic conversation cards for families',
    description: 'Replace dinner screen time with thought-provoking questions about ethics, science, history, and imagination designed for parents and kids.',
    imageSrc: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=800&auto=format&fit=crop',
    badge: 'Family Favorite',
    cardColor: '#E8F6FD',
    mascotVariant: 'idea'
  },
  {
    id: 'prod-3',
    title: 'Science Quest Lab Kit',
    price: 799,
    originalPrice: 999,
    category: 'Learning Kits',
    subtitle: 'Hands-on physics & chemistry experiments',
    description: 'Safe, reusable laboratory kit with 25 STEM experiments that teach gravity, optics, magnetism, and chemical reactions at home.',
    imageSrc: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop',
    badge: 'STEM Certified',
    cardColor: '#EDF7E5',
    mascotVariant: 'reading'
  },
  {
    id: 'prod-4',
    title: 'Curiosity Habit Journal',
    price: 349,
    originalPrice: 449,
    category: 'Stationery',
    subtitle: 'Daily observation log & question tracker',
    description: 'Hardcover guided journal with 90 daily prompts to encourage observation, curiosity notes, mind mapping, and creative problem solving.',
    imageSrc: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    badge: 'New Release',
    cardColor: '#FFF8E1',
    mascotVariant: 'reading'
  },
  {
    id: 'prod-5',
    title: 'QT Mascot Plushie Companion',
    price: 599,
    originalPrice: 749,
    category: 'QShala Merch',
    subtitle: 'Official plush mascot for young quizzers',
    description: 'Ultra-soft, organic plush mascot QT cat holding his signature curiosity notebook. The perfect study buddy for bedtime reading and quizzes.',
    imageSrc: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=800&auto=format&fit=crop',
    badge: 'Official Merch',
    cardColor: '#E8F6FD',
    mascotVariant: 'trophy'
  },
  {
    id: 'prod-6',
    title: 'India & Global Trivia Deck',
    price: 399,
    originalPrice: 499,
    category: 'Games',
    subtitle: '300+ age-appropriate current affairs cards',
    description: 'Fast-paced trivia card game covering wildlife, space exploration, Indian heritage, sports legends, and world geography.',
    imageSrc: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
    badge: 'Top Rated',
    cardColor: '#EDF7E5',
    mascotVariant: 'curious'
  },
  {
    id: 'prod-7',
    title: 'Master Quizzer Notebook Set',
    price: 249,
    originalPrice: 329,
    category: 'Stationery',
    subtitle: '3-pack grid notebooks for note-takers',
    description: 'Set of 3 eco-friendly dot-grid notebooks designed for organizing research, trivia facts, and school project outlines.',
    imageSrc: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop',
    badge: 'Value Pack',
    cardColor: '#FFF8E1',
    mascotVariant: 'reading'
  },
  {
    id: 'prod-8',
    title: 'QShala Explorer Hoodie',
    price: 999,
    originalPrice: 1299,
    category: 'QShala Merch',
    subtitle: 'Cozy organic cotton hoodie with QT embroidery',
    description: 'Premium heavyweight cotton sweatshirt featuring embroidered QT mascot badge and "Joy of Quest" motto. Available in junior & adult sizes.',
    imageSrc: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
    badge: 'Limited Edition',
    cardColor: '#E8F6FD',
    mascotVariant: 'trophy'
  },
  {
    id: 'prod-9',
    title: 'Young Economist Book Pack',
    price: 549,
    originalPrice: 699,
    category: 'Books',
    subtitle: 'Understanding markets, money, and trade',
    description: 'Two-book bundle breaking down supply chains, ethical entrepreneurship, and global trade using colorful diagrams and real-world case studies.',
    imageSrc: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
    badge: 'Bundle Deal',
    cardColor: '#EDF7E5',
    mascotVariant: 'holding_money'
  }
];

const CATEGORIES = ['All', 'Books', 'Games', 'Learning Kits', 'Stationery', 'QShala Merch'] as const;

export default function ShopStorefront() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cart, setCart] = useState<{ product: ProductItem; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleAddToCart = (product: ProductItem) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, quantity: 1 }];
    });

    setToastMessage(`Added "${product.title}" to your cart!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: ProductItem; quantity: number }[];
    });
  };

  return (
    <div className="w-full space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl border-2 border-[#FDB913] text-sm font-black flex items-center gap-3 animate-bounce">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FDB913]"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header & Filter Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#FDB913] text-slate-950 font-black text-xs uppercase font-heading">
              Official Store
            </span>
            <QTMascot variant="holding_money" size="sm" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 font-heading tracking-tight mt-2">
            Curiosity Store
          </h1>
          <p className="text-slate-600 text-sm font-semibold pt-1">
            Hands-on books, socratic games, experiment kits, and official QShala merch.
          </p>
        </div>

        {/* Category Dropdown & Cart Trigger */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="relative">
            <label htmlFor="categoryFilter" className="sr-only">Category Filter</label>
            <select
              id="categoryFilter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none px-5 py-2.5 pr-10 rounded-full bg-white text-slate-900 font-black text-xs font-heading border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#30B2E7]"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  Category: {cat}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-900 font-black text-xs">
              ▼
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="View Cart"
            title="View Cart"
            className="w-11 h-11 rounded-full bg-[#30B2E7] hover:bg-sky-400 text-white font-black border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all flex items-center justify-center relative shrink-0 cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#FDB913] text-slate-950 font-black text-[11px] flex items-center justify-center border border-slate-900 shadow-sm animate-pulse">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Floating Sticky Cart Trigger for Mobile Mode */}
      <button
        onClick={() => setIsCartOpen(true)}
        aria-label="View Cart"
        className="fixed bottom-6 right-6 z-40 md:hidden w-14 h-14 rounded-full bg-[#30B2E7] text-white flex items-center justify-center border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:scale-95 transition-all"
      >
        <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
        {totalCartCount > 0 && (
          <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FDB913] text-slate-950 font-black text-xs flex items-center justify-center border-2 border-slate-900 shadow-md animate-bounce">
            {totalCartCount}
          </span>
        )}
      </button>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-black text-xs font-heading transition-all whitespace-nowrap border-2 ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-900'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 3-Column Products Grid (Matching Wireframe Brief Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full pt-2">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl p-6 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-5 group relative"
            style={{ backgroundColor: product.cardColor }}
          >
            {/* Mascot Badge */}
            <div className="absolute top-4 right-4 z-10 scale-90 origin-top-right">
              <QTMascot variant={product.mascotVariant} size="sm" />
            </div>

            <div className="space-y-4">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-white border-2 border-slate-900 shadow-sm">
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900 text-white font-black text-[10px] uppercase font-heading border border-white shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-black uppercase text-slate-700 tracking-wider font-heading bg-white/80 px-2.5 py-0.5 rounded-full border border-slate-900/20 inline-block">
                  {product.category}
                </span>

                <h3 className="text-xl font-black text-slate-900 font-heading leading-snug">
                  {product.title}
                </h3>

                <p className="text-slate-800 text-xs font-bold font-heading">
                  {product.subtitle}
                </p>

                <p className="text-slate-600 text-xs font-semibold leading-relaxed pt-1 line-clamp-3">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Pricing & Add to Cart Action */}
            <div className="pt-4 border-t-2 border-slate-900/10 flex items-center justify-between gap-4">
              <div>
                <span className="text-2xl font-black text-slate-900 font-heading">
                  ₹{product.price}/-
                </span>
                {product.originalPrice && (
                  <span className="text-xs font-bold text-slate-400 line-through ml-2 font-heading">
                    ₹{product.originalPrice}/-
                  </span>
                )}
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="px-5 py-2.5 rounded-full bg-[#FDB913] hover:bg-amber-400 text-slate-950 font-black text-xs uppercase font-heading border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
              >
                <span>Add to Cart</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Shopping Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#FFFDF5] h-full shadow-2xl border-l-4 border-slate-900 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-slate-900">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black font-heading text-slate-900">Your Cart</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FDB913] text-slate-950 font-black text-xs">
                    {totalCartCount} items
                  </span>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-black text-sm border border-slate-900 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="py-16 text-center space-y-4">
                  <QTMascot variant="curious" size="md" />
                  <p className="text-slate-600 font-bold text-sm">Your cart is currently empty!</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2.5 rounded-full bg-[#30B2E7] text-white font-black text-xs uppercase font-heading border-2 border-slate-900 shadow-md"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4 py-6">
                  {cart.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="p-4 rounded-2xl bg-white border-2 border-slate-900 shadow-sm flex items-center justify-between gap-3"
                    >
                      <img
                        src={product.imageSrc}
                        alt={product.title}
                        className="w-14 h-14 object-cover rounded-xl border border-slate-900 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-black text-slate-900 text-sm font-heading truncate">
                          {product.title}
                        </h4>
                        <div className="text-xs font-black text-[#30B2E7] font-heading">
                          ₹{product.price}/-
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-full border border-slate-900">
                        <button
                          onClick={() => handleUpdateQuantity(product.id, -1)}
                          className="w-6 h-6 rounded-full bg-white text-slate-900 font-black text-xs flex items-center justify-center border border-slate-900"
                        >
                          -
                        </button>
                        <span className="font-black text-xs px-1">{quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(product.id, 1)}
                          className="w-6 h-6 rounded-full bg-white text-slate-900 font-black text-xs flex items-center justify-center border border-slate-900"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-4 border-t-2 border-slate-900 space-y-4 bg-[#FFFDF5]">
                <div className="flex items-center justify-between text-lg font-black text-slate-900 font-heading">
                  <span>Subtotal:</span>
                  <span>₹{subtotalPrice}/-</span>
                </div>

                <a
                  href="/book-a-quiz"
                  className="w-full py-3.5 rounded-full bg-[#75B543] hover:bg-emerald-500 text-white font-black text-sm uppercase tracking-wider font-heading border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center block"
                >
                  Proceed to Checkout &rarr;
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
