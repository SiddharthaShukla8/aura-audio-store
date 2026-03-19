import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Policies from './pages/Policies';
import Collection from './pages/Collection';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="collection/:categoryId" element={<Collection />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="policies" element={<Policies />} />
        </Route>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
