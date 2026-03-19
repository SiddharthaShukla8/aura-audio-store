import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const BestSellers = () => {
  const { addToCart } = useCart();
  const products = [
    {
      id: "aura-sync-pro",
      title: "Aura Sync Pro",
      price: "$299.99",
      compareAt: "$349.99",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Best Seller"
    },
    {
      id: "aura-buds-elite",
      title: "Aura Buds Elite",
      price: "$149.99",
      compareAt: "",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: ""
    },
    {
      id: "aura-studios",
      title: "Aura Studio Headphones",
      price: "$199.99",
      compareAt: "$249.99",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Sale"
    },
    {
      id: "aura-stand",
      title: "Premium Metal Stand",
      price: "$49.99",
      compareAt: "",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: ""
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Best Sellers</h2>
          <p style={{ color: 'var(--color-secondary-text)' }}>Audiophile-approved gear, crafted for perfection.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="product-card"
              style={{
                backgroundColor: 'var(--color-secondary)',
                borderRadius: '8px',
                padding: '1rem',
                border: '1px solid var(--color-secondary-border)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
            >
              {product.badge && (
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2 }}>
                  <span className="badge">{product.badge}</span>
                </div>
              )}
              
              <Link to={`/product/${product.id}`} style={{ display: 'block', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '4px', padding: '2rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', aspectRatio: '1' }}>
                <img src={product.image} alt={product.title} style={{ mixBlendMode: 'screen', objectFit: 'contain', width: '100%', height: '100%', filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.5))' }} />
              </Link>

              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                  </h3>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontWeight: '600', color: 'var(--color-accent)' }}>{product.price}</span>
                    {product.compareAt && (
                      <span style={{ textDecoration: 'line-through', color: 'var(--color-secondary-text)', fontSize: '0.875rem' }}>{product.compareAt}</span>
                    )}
                  </div>
                </div>
                
                <button 
                  className="btn-outline" 
                  style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                  onClick={() => addToCart({ id: product.id, title: product.title, variant: 'Standard', price: parseFloat(product.price.replace('$', '')), image: product.image, quantity: 1 })}
                >
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .product-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent);
        }
      `}</style>
    </section>
  );
};

export default BestSellers;
