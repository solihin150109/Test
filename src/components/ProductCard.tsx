import React from 'react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  key?: React.Key;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 rounded-sm">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Stock Badges */}
        <div className="absolute bottom-3 left-3 flex flex-col gap-1">
          <div className={`text-[9px] px-2 py-0.5 rounded-full backdrop-blur-md border ${
            product.stock.jakarta > 0 
              ? 'bg-white/80 border-primary/20 text-primary' 
              : 'bg-stone-200/80 border-stone-300 text-stone-500'
          }`}>
            JKT: {product.stock.jakarta > 0 ? 'Available' : 'Empty'}
          </div>
          <div className={`text-[9px] px-2 py-0.5 rounded-full backdrop-blur-md border ${
            product.stock.papua > 0 
              ? 'bg-white/80 border-primary/20 text-primary' 
              : 'bg-stone-200/80 border-stone-300 text-stone-500'
          }`}>
            PAPUA: {product.stock.papua > 0 ? 'Available' : 'Empty'}
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium text-stone-600 uppercase tracking-wider">{product.category}</h3>
        <h2 className="text-lg font-serif italic text-stone-900">{product.name}</h2>
        <p className="text-primary font-medium">{formatPrice(product.price)}</p>
      </div>
    </motion.div>
  );
}
