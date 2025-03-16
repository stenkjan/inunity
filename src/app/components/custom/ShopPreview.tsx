
// No client-side features used, so no 'use client' directive needed
import React from 'react';

interface ShopPreviewProps {
  title: string;
  subtitle: string;
}

const ShopPreview: React.FC<ShopPreviewProps> = ({ title, subtitle }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
        <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
            <p className="text-gray-300 mb-6">
              Our online shop is currently under development. Stay tuned for our collection of custom-designed products.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-slate-700 rounded-lg p-4 aspect-square flex items-center justify-center">
                  <div className="text-gray-500">Product {item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPreview;