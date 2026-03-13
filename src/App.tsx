import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import ShippingEstimator from './components/ShippingEstimator';
import AdminTable from './components/AdminTable';
import { Product } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Settings } from 'lucide-react';

// Dummy Data - In a real app, this would come from an API
const DUMMY_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Silk Wrap Dress',
    price: 1850000,
    description: 'A timeless silhouette crafted from 100% mulberry silk. This wrap dress features a subtle sheen and a fluid drape that moves beautifully with you.',
    category: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539109132382-381bb3f1c2b3?q=80&w=1000&auto=format&fit=crop',
    ],
    stock: { jakarta: 12, papua: 5 }
  },
  {
    id: '2',
    name: 'Cashmere Blend Knit',
    price: 1250000,
    description: 'Ultra-soft cashmere blend sweater with a relaxed fit. Perfect for layering during cooler evenings or air-conditioned spaces.',
    category: 'Knitwear',
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop',
    ],
    stock: { jakarta: 0, papua: 8 }
  },
  {
    id: '3',
    name: 'Tailored Linen Trousers',
    price: 950000,
    description: 'High-waisted trousers made from premium European linen. Breathable, structured, and effortlessly chic for any occasion.',
    category: 'Bottoms',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=1000&auto=format&fit=crop',
    ],
    stock: { jakarta: 20, papua: 0 }
  },
  {
    id: '4',
    name: 'Minimalist Leather Tote',
    price: 2450000,
    description: 'Handcrafted Italian leather tote with a spacious interior. Features a clean design with no visible hardware for a truly minimalist aesthetic.',
    category: 'Accessories',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop',
    ],
    stock: { jakarta: 4, papua: 2 }
  }
];

type View = 'home' | 'detail' | 'admin';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigateToDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-24 pb-24"
            >
              {/* Hero Section */}
              <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop" 
                    alt="Hero"
                    className="w-full h-full object-cover opacity-40"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-floral-white/20 via-transparent to-floral-white"></div>
                </div>
                
                <div className="relative z-10 text-center space-y-8 px-6">
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm uppercase tracking-[0.4em] font-medium text-primary"
                  >
                    New Collection 2024
                  </motion.h3>
                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-6xl md:text-8xl font-serif italic text-stone-900 leading-tight"
                  >
                    Effortless <br /> Elegance
                  </motion.h1>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <button className="bg-primary text-white px-10 py-4 rounded-sm text-sm uppercase tracking-widest hover:bg-stone-700 transition-all shadow-lg shadow-primary/20">
                      Shop the Collection
                    </button>
                  </motion.div>
                </div>
              </section>

              {/* Product Grid */}
              <section className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-serif italic text-stone-900">Featured Pieces</h2>
                    <p className="text-stone-500 text-sm">Hand-picked essentials for your wardrobe.</p>
                  </div>
                  <button className="text-xs uppercase tracking-widest font-bold border-b border-stone-300 pb-1 hover:border-primary transition-colors">
                    View All
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                  {DUMMY_PRODUCTS.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onClick={navigateToDetail}
                    />
                  ))}
                </div>
              </section>

              {/* Shipping Estimator Section */}
              <section className="bg-secondary/10 py-24">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-serif italic text-stone-900">Nationwide Delivery</h2>
                    <p className="text-stone-600 leading-relaxed">
                      We ship from our dual warehouses in Jakarta and Papua to ensure faster delivery and lower shipping costs for our customers across Indonesia. Use our estimator to check the rates to your city.
                    </p>
                    <div className="flex gap-8 pt-4">
                      <div className="space-y-1">
                        <p className="text-2xl font-serif italic text-primary">24h</p>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Processing</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-serif italic text-primary">100%</p>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Insured</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-serif italic text-primary">Free</p>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Returns</p>
                      </div>
                    </div>
                  </div>
                  <ShippingEstimator />
                </div>
              </section>
            </motion.div>
          )}

          {currentView === 'detail' && selectedProduct && (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ProductDetail 
                product={selectedProduct} 
                onBack={navigateToHome} 
              />
            </motion.div>
          )}

          {currentView === 'admin' && (
            <motion.div
              key="admin"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-6 py-32 space-y-12"
            >
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-serif italic text-stone-900">Admin Dashboard</h1>
                <button 
                  onClick={navigateToHome}
                  className="text-xs uppercase tracking-widest font-bold text-stone-500 hover:text-primary transition-colors"
                >
                  Exit Admin
                </button>
              </div>
              <AdminTable products={DUMMY_PRODUCTS} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Admin Toggle (For Demo Purposes) */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
        <button 
          onClick={() => setCurrentView(currentView === 'admin' ? 'home' : 'admin')}
          className="bg-stone-900 text-white p-4 rounded-full shadow-xl hover:bg-primary transition-all group"
          title="Toggle Admin View"
        >
          {currentView === 'admin' ? <LayoutGrid className="w-6 h-6" /> : <Settings className="w-6 h-6" />}
        </button>
      </div>

      <Footer />
    </div>
  );
}
