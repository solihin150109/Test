import React from 'react';
import { Edit2, Trash2, Plus, ExternalLink, MoreVertical } from 'lucide-react';
import { Product } from '../types';

interface AdminTableProps {
  products: Product[];
}

export default function AdminTable({ products }: AdminTableProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-sm shadow-sm border border-stone-100 overflow-hidden">
      <div className="p-6 border-b border-stone-100 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-serif italic text-stone-900">Product Management</h3>
          <p className="text-xs text-stone-500">Manage your boutique inventory and stock locations.</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-sm text-xs font-medium flex items-center gap-2 hover:bg-stone-700 transition-colors">
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-stone-50 text-[10px] uppercase tracking-widest font-bold text-stone-400">
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Stock (JKT/PAP)</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-stone-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={product.images[0]} 
                      alt="" 
                      className="w-10 h-10 object-cover rounded-sm"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-sm font-medium text-stone-800">{product.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-full">{product.category}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-primary">{formatPrice(product.price)}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded-sm ${product.stock.jakarta > 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                      JKT: {product.stock.jakarta}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-sm ${product.stock.papua > 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                      PAP: {product.stock.papua}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-stone-400 hover:text-primary transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-stone-400 hover:text-rose-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-stone-400 hover:text-stone-900 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
