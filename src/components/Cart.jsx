import CartItem from '../components/CartItem';
import '../styles/Cart.css';

export default function Cart({ cart, updateQuantity }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Daftar Pesanan Kosong</h2>
          <p>Anda belum memesan apapun. Silakan pilih racikan kopi terbaik kami di menu.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Pesanan Anda</h2>
      <div className="cart-items-list">
        {cart.map((item) => (
          <CartItem 
            key={item.id} 
            item={item} 
            onUpdateQuantity={updateQuantity} 
          />
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="total-row">Total Pembayaran: ${totalPrice.toFixed(2)}</div>
        <button className="btn-checkout" onClick={() => alert('Pesanan Anda sedang diproses oleh Barista!')}>
          Konfirmasi Pesanan
        </button>
      </div>
    </div>
  );
}