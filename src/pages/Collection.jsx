import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Collection = () => {
  const { categoryId } = useParams();
  const { addToCart } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  const allProducts = {
    'headphones': {
      title: "Over-Ear Headphones",
      description: "Immerse yourself in studio-quality sound with our premium over-ear headphones.",
      items: [
        {
          id: "aura-sync-pro",
          title: "Aura Sync Pro",
          price: 299.99,
          image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          badge: "Best Seller"
        },
        {
          id: "aura-studios",
          title: "Aura Studio Headphones",
          price: 199.99,
          compareAt: "$249.99",
          image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          badge: "Sale"
        },
        {
          id: "aura-monitors-x",
          title: "Aura Monitors X Series",
          price: 349.99,
          image: "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          badge: "Audiophile"
        }
      ]
    },
    'earbuds': {
      title: "True Wireless Earbuds",
      description: "Compact, powerful, and truly wireless. Take your music anywhere.",
      items: [
        {
          id: "aura-buds-elite",
          title: "Aura Buds Elite",
          price: 149.99,
          image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "aura-buds-sport",
          title: "Aura Buds Sport",
          price: 99.99,
          image: "https://images.unsplash.com/photo-1628205263677-4467aa70c1d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          badge: "New"
        }
      ]
    },
    'accessories': {
      title: "Premium Accessories",
      description: "Enhance your audio setup with our curated premium accessories.",
      items: [
        {
          id: "aura-stand",
          title: "Premium Metal Stand",
          price: 49.99,
          image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "aura-cable-pro",
          title: "Braided Audio Cable (2m)",
          price: 29.99,
          image: "https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "aura-pads",
          title: "Memory Foam Replacement Pads",
          price: 19.99,
          image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
      ]
    }
  };

  const currentCategory = allProducts[categoryId];

  if (!currentCategory) {
    return (
      <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Category Not Found</h1>
        <Link to="/" className="btn-primary" style={{ padding: '1rem 2rem' }}>Return Home</Link>
      </div>
    );
  }

  return (
    <div className="page-collection" style={{ padding: '4rem 0', minHeight: '80vh' }}>
      <div className="container">
        <div style={{ marginBottom: '2rem', fontSize: '0.875rem', color: 'var(--color-secondary-text)' }}>
          <Link to="/">Home</Link> &gt; <span style={{ color: 'white' }}>{currentCategory.title}</span>
        </div>

        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{currentCategory.title}</h1>
          <p style={{ color: 'var(--color-secondary-text)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            {currentCategory.description}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {currentCategory.items.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="product-card"
              style={{
                backgroundColor: 'var(--color-secondary)',
                borderRadius: '8px',
                padding: '1.5rem',
                border: '1px solid var(--color-secondary-border)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
            >
              {product.badge && (
                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', zIndex: 2 }}>
                  <span className="badge">{product.badge}</span>
                </div>
              )}
              
              <Link to={`/product/${product.id}`} style={{ display: 'flex', backgroundColor: 'var(--color-primary)', borderRadius: '8px', marginBottom: '1.5rem', justifyContent: 'center', alignItems: 'center', aspectRatio: '1', overflow: 'hidden' }}>
                <img src={product.image} alt={product.title} style={{ objectFit: 'cover', width: '100%', height: '100%', transition: 'transform 0.5s ease' }} className="collection-img" />
              </Link>

              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                  </h3>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{ fontWeight: '600', color: 'var(--color-accent)', fontSize: '1.125rem' }}>${product.price}</span>
                    {product.compareAt && (
                      <span style={{ textDecoration: 'line-through', color: 'var(--color-secondary-text)', fontSize: '0.875rem' }}>{product.compareAt}</span>
                    )}
                  </div>
                </div>
                
                <button 
                  className="btn-outline" 
                  style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '0.75rem' }}
                  onClick={() => addToCart({ id: product.id, title: product.title, variant: 'Standard', price: product.price, image: product.image, quantity: 1 })}
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
        .collection-img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Collection;
