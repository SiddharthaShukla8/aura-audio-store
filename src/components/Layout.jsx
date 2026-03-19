import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Layout = () => {
  const { cartCount, toast } = useCart();
  return (
    <div className="layout">
      {toast && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-primary)',
          padding: '1rem 2rem',
          borderRadius: '4px',
          fontWeight: '600',
          zIndex: 100,
          boxShadow: '0 10px 30px rgba(0, 229, 255, 0.2)',
          transition: 'all 0.3s ease',
          animation: 'slideIn 0.3s ease forwards'
        }}>
          {toast}
        </div>
      )}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
      {/* Announcement Bar */}
      <div className="announcement-bar" style={{
        backgroundColor: 'var(--color-accent)',
        color: 'var(--color-primary)',
        textAlign: 'center',
        padding: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: '600'
      }}>
        Free Headphone Stand with Orders Over $200!
      </div>

      {/* Navbar */}
      <header className="navbar" style={{
        backgroundColor: 'rgba(11, 11, 12, 0.8)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid var(--color-secondary-border)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem'
        }}>
          {/* Mobile Menu */}
          <button className="mobile-menu-btn" style={{ color: 'white', display: 'none' }}>
            <Menu />
          </button>
          
          {/* Logo */}
          <Link to="/" className="logo" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem',
            fontWeight: '700',
            letterSpacing: '1px'
          }}>
            AURA <span style={{ color: 'var(--color-accent)' }}>AUDIO</span>
          </Link>

          {/* Nav Links */}
          <nav className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
            <Link to="/" style={{ fontWeight: '500', transition: 'color 0.2s' }}>Home</Link>
            <Link to="/about" style={{ fontWeight: '500', transition: 'color 0.2s' }}>About</Link>
            <Link to="/contact" style={{ fontWeight: '500', transition: 'color 0.2s' }}>Contact</Link>
          </nav>

          {/* Icons */}
          <div className="nav-icons" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button style={{ color: 'white' }}><Search size={20} /></button>
            <Link to="/cart" style={{ color: 'white', position: 'relative' }}>
              <ShoppingCart size={20} />
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-primary)',
                fontSize: '0.65rem',
                fontWeight: '700',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>{cartCount}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--color-secondary)',
        padding: '4rem 0 2rem',
        borderTop: '1px solid var(--color-secondary-border)',
        marginTop: '4rem'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{ marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>AURA AUDIO</h3>
            <p style={{ color: 'var(--color-secondary-text)', fontSize: '0.875rem' }}>Premium sound, uncompromising design.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', color: 'white' }}>Shop</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-secondary-text)', fontSize: '0.875rem' }}>
              <li><Link to="/">Headphones</Link></li>
              <li><Link to="/">Earbuds</Link></li>
              <li><Link to="/">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', color: 'white' }}>Support</h4>
             <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-secondary-text)', fontSize: '0.875rem' }}>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/policies">Shipping & Returns</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', color: 'white' }}>Newsletter</h4>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="email" placeholder="Email address" style={{
                background: 'var(--color-primary)',
                border: '1px solid var(--color-secondary-border)',
                padding: '0.5rem',
                color: 'white',
                borderRadius: '4px',
                width: '100%'
              }}/>
              <button className="btn-primary" style={{ padding: '0.5rem 1rem' }}>→</button>
            </div>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', color: 'var(--color-secondary-text)', fontSize: '0.75rem', borderTop: '1px solid var(--color-secondary-border)', paddingTop: '2rem' }}>
          &copy; 2026 Aura Audio. All rights reserved. (Demo Project)
        </div>
      </footer>
    </div>
  );
};

export default Layout;
