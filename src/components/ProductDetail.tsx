import React, { useState } from 'react';
import { MapPin, MessageCircle, ChevronRight, Truck } from 'lucide-react';
import { Product, Origin } from '../types';
import { motion } from 'motion/react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  const [selectedOrigin, setSelectedOrigin] = useState<Origin>('Jakarta');
  const [mainImage, setMainImage] = useState(product.images[0]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleWhatsApp = () => {
    const message = `Halo Luxe Boutique, saya tertarik dengan produk:\n\n*${product.name}*\nHarga: ${formatPrice(product.price)}\nPengiriman dari: ${selectedOrigin}\n\nApakah stok masih tersedia?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/628123456789?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm uppercase tracking-widest text-stone-500 hover:text-primary transition-colors mb-8"
      >
        <ChevronRight className="w-4 h-4 rotate-180" />
        Back to Collection
      </button>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Gallery */}
        <div className="space-y-4">
          <motion.div 
            key={mainImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-[3/4] overflow-hidden bg-stone-100 rounded-sm"
          >
            <img 
              src={mainImage} 
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setMainImage(img)}
                className={`aspect-square overflow-hidden rounded-sm border-2 transition-all ${
                  mainImage === img ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={img} 
                  alt={`${product.name} ${idx}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="space-y-6 pb-8 border-bottom border-stone-200">
            <h3 className="text-sm font-medium text-stone-500 uppercase tracking-[0.2em]">{product.category}</h3>
            <h1 className="text-4xl lg:text-5xl font-serif italic text-stone-900">{product.name}</h1>
            <p className="text-2xl text-primary font-medium">{formatPrice(product.price)}</p>
            <p className="text-stone-600 leading-relaxed text-lg">
              {product.description}
            </p>
          </div>

          <div className="py-8 space-y-8">
            {/* Origin Selector */}
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest font-bold text-stone-400 flex items-center gap-2">
                <MapPin className="w-3 h-3" /> Select Shipping Origin
              </label>
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedOrigin('Jakarta')}
                  className={`flex-1 py-4 px-6 rounded-sm border text-sm transition-all flex flex-col items-center gap-1 ${
                    selectedOrigin === 'Jakarta' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-stone-200 text-stone-500 hover:border-stone-300'
                  }`}
                >
                  <span className="font-medium">Jakarta</span>
                  <span className="text-[10px] opacity-70">
                    {product.stock.jakarta > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </button>
                <button 
                  onClick={() => setSelectedOrigin('Papua')}
                  className={`flex-1 py-4 px-6 rounded-sm border text-sm transition-all flex flex-col items-center gap-1 ${
                    selectedOrigin === 'Papua' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-stone-200 text-stone-500 hover:border-stone-300'
                  }`}
                >
                  <span className="font-medium">Papua</span>
                  <span className="text-[10px] opacity-70">
                    {product.stock.papua > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </button>
              </div>
            </div>

            {/* CTA */}
            <button 
              onClick={handleWhatsApp}
              disabled={selectedOrigin === 'Jakarta' ? product.stock.jakarta === 0 : product.stock.papua === 0}
              className="w-full bg-primary text-white py-5 rounded-sm flex items-center justify-center gap-3 hover:bg-stone-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="uppercase tracking-[0.2em] text-sm font-medium">Order via WhatsApp</span>
            </button>

            {/* Shipping Info Card */}
            <div className="bg-secondary/20 p-6 rounded-sm border border-secondary/30 flex items-start gap-4">
              <div className="bg-white p-2 rounded-full text-primary shadow-sm">
                <Truck className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-stone-800">Shipping Information</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Orders from {selectedOrigin} are processed within 24 hours. We use J&T, JNE, and SPX for reliable delivery across Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
