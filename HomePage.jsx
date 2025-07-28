import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'LED Bulb 12W',
    description: 'Warm White Energy Saving LED Bulb',
    price: 'Rs. 380',
    specs: '12W – B22',
    image: '/images/bulb.jpg'
  },
  // Add more products here
];

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOrder = (product) => {
    const message = `Hello! I want to order:\n\nItem: ${product.name}\nSpecs: ${product.specs}\nPrice: ${product.price}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/94724472156?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-pink-500">vibehut.lk</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 rounded-2xl p-4 shadow-lg text-white"
          >
            {product.image && (
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-2" />
            )}
            <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
            <p className="text-sm text-gray-400">{product.specs}</p>
            <p className="text-lg mt-2">{product.price}</p>
            <button
              onClick={() => handleOrder(product)}
              className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-xl"
            >
              Order Now via WhatsApp
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t pt-4 text-sm text-gray-400">
        <p>Bank Transfer Options:</p>
        <p>Commercial Bank – 8014799361 (S C T FERNANDO)</p>
        <p>BOC – 0094742117 (S C T FERNANDO)</p>
      </div>
    </div>
  );
}
