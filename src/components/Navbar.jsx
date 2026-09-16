import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar({ totalItems }) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">☕ Brew & Co.</Link>
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/shop" className="nav-item">Menu</Link>
        <Link to="/cart" className="nav-item cart-link">
          Orders
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
}