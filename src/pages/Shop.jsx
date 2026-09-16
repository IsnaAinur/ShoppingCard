import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Shop.css';

export default function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then((res) => res.json())
      .then((data) => {
        // Mengubah data API agar setiap kopi punya harga yang berbeda-beda
        const formattedData = data.map((item, index) => {
          const id = item.id || index + 1;
          
          // Rumus generate harga beda-beda (kisaran Rp 18.000 - Rp 38.000)
          const generatedPrice = 18000 + ((id * 3700) % 21000);

          return {
            id: id,
            title: item.title,
            description: item.description,
            image: item.image,
            price: generatedPrice // Harga otomatis beda tiap item
          };
        });

        setProducts(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat menu kopi:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Menyeduh Menu Istimewa...</div>;

  return (
    <div className="shop-container">
      <h2 className="shop-title">Katalog Menu Kopi</h2>
      <p className="shop-subtitle">Pilih minuman favoritmu hari ini.</p>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
}