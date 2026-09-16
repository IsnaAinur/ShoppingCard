import '../styles/Cart.css';

export default function CartItem({ item, onUpdateQuantity }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-img" />
      <div className="cart-item-details">
        <h4>{item.title}</h4>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button className="btn-qty" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
          <span className="cart-qty-display">{item.quantity}</span>
          <button className="btn-qty" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
        <button className="btn-remove" onClick={() => onUpdateQuantity(item.id, 0)}>Remove</button>
      </div>
    </div>
  );
}