import { useState } from 'react';
import '../styles/Shop.css';

export default function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val > 0) {
      setQuantity(val);
    }
  };

  return (
    <div className="product-card">
      <div>
        <div className="product-image-wrapper">
          <img src={product.image} alt={product.title} className="product-image" />
        </div>
        <div className="product-info">
          <h3>{product.title}</h3>
          <p className="product-desc">{product.description}</p>
        </div>
      </div>
      <div>
        <p className="product-price">${product.price.toFixed(2)}</p>
        
        <div className="quantity-controls">
          <button className="btn-qty" onClick={handleDecrement}>-</button>
          <input 
            type="number" 
            className="input-qty" 
            value={quantity} 
            onChange={handleInputChange}
            min="1"
          />
          <button className="btn-qty" onClick={handleIncrement}>+</button>
        </div>
        
        <button className="btn-add-cart" onClick={() => onAddToCart(product, quantity)}>
          Add to Order
        </button>
      </div>
    </div>
  );
}