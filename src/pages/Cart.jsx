import CartItem from '../components/CartItem';
import '../styles/Cart.css';

export default function Cart({ cart, updateQuantity }) {
  // Menghitung total harga seluruh pesanan kopi/snack
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Tampilan jika keranjang belanja atau pesanan masih kosong
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
      
      {/* List item yang ada di dalam keranjang */}
      <div className="cart-items-list">
        {cart.map((item) => (
          <CartItem 
            key={item.id} 
            item={item} 
            onUpdateQuantity={updateQuantity} 
          />
        ))}
      </div>
      
      {/* Ringkasan total pembayaran dan konfirmasi */}
      <div className="cart-summary">
        <div className="total-row">Total Pembayaran: ${totalPrice.toFixed(2)}</div>
        <button 
          className="btn-checkout" 
          onClick={() => alert('Pesanan Anda telah diterima! Barista kami sedang menyiapkan kopi terbaik untuk Anda. ☕')}
        >
          Konfirmasi Pesanan
        </button>
      </div>
    </div>
  );
}