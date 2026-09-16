import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);

  // Fungsi lifting state up untuk menambahkan item ke keranjang belanja
  const handleAddToCart = (product, quantity) => {
    setCart((prevCart) => {
      const isExist = prevCart.find((item) => item.id === product.id);
      if (isExist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Fungsi lifting state up untuk mengubah kuantitas atau menghapus item dari keranjang
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Kalkulasi total item real-time untuk badge di navbar
  const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter basename="/ShoppingCard">
      <Navbar totalItems={totalItemsCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={handleUpdateQuantity} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;