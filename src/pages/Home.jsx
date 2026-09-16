import { Link } from 'react-router-dom';
import '../styles/Shop.css';

export default function Home() {
  const heroStyle = {
    textAlign: 'center',
    padding: '100px 20px',
    maxWidth: '700px',
    margin: '0 auto'
  };

  return (
    <div style={heroStyle}>
      <span style={{ color: 'var(--accent-latte)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
        Premium Coffee House
      </span>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3.2rem', fontWeight: '700', margin: '12px 0 24px 0', color: 'var(--accent-espresso)', lineHeight: '1.1' }}>
        Awali Hari Anda dengan Secangkir Kebahagiaan
      </h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '36px' }}>
        Biji kopi pilihan yang dipanggang dengan penuh ketelitian oleh barista andalan kami. Sedia mengantar kehangatan langsung ke meja Anda.
      </p>
      <Link to="/shop" className="btn-add-cart" style={{ textDecoration: 'none', padding: '14px 36px', borderRadius: '30px' }}>
        Lihat Menu Kami
      </Link>
    </div>
  );
}