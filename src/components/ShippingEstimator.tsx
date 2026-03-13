import React, { useState } from 'react';
import { Search, Package, TrendingUp, Clock } from 'lucide-react';
import { ShippingResult, Origin } from '../types';

export default function ShippingEstimator() {
  const [origin, setOrigin] = useState<Origin>('Jakarta');
  const [destination, setDestination] = useState('');
  const [results, setResults] = useState<ShippingResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleEstimate = () => {
    if (!destination) return;
    setIsLoading(true);
    
    // Mock API call
    setTimeout(() => {
      setResults([
        { courier: 'J&T Express', service: 'EZ', cost: 12000, etd: '2-3 Days' },
        { courier: 'JNE', service: 'REG', cost: 15000, etd: '1-2 Days' },
        { courier: 'SPX Express', service: 'Standard', cost: 10000, etd: '3-4 Days' },
      ]);
      setIsLoading(false);
    }, 800);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 space-y-8">
      <div className="space-y-2">
        <h3 className="text-xl font-serif italic text-stone-900">Shipping Estimator</h3>
        <p className="text-sm text-stone-500">Check delivery rates from our warehouses to your location.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Origin</label>
          <select 
            value={origin}
            onChange={(e) => setOrigin(e.target.value as Origin)}
            className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
          >
            <option value="Jakarta">Jakarta Warehouse</option>
            <option value="Papua">Papua Warehouse</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Destination City</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="e.g. Surabaya, Bandung..."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          </div>
        </div>
      </div>

      <button 
        onClick={handleEstimate}
        disabled={isLoading || !destination}
        className="w-full bg-stone-900 text-white py-4 rounded-sm text-sm uppercase tracking-widest font-medium hover:bg-primary transition-all disabled:opacity-50"
      >
        {isLoading ? 'Calculating...' : 'Check Rates'}
      </button>

      {results.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-stone-100">
          {results.map((res, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-stone-50 rounded-sm border border-stone-100 hover:border-secondary transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded-sm shadow-sm">
                  <Package className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-800">{res.courier}</h4>
                  <p className="text-[10px] text-stone-500 uppercase tracking-tighter">{res.service}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-primary">{formatPrice(res.cost)}</p>
                <div className="flex items-center gap-1 justify-end text-[10px] text-stone-400">
                  <Clock className="w-3 h-3" /> {res.etd}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
