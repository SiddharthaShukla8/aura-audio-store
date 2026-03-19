import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { items, addToCart, updateQuantity, removeItem } = useCart();

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15.00;
  const total = subtotal + shipping;

  const freeItem = {
    id: "aura-stand-free",
    title: "Headphone Stand (Free Gift)",
    price: 0,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  };

  const hasFreeGift = items.some(i => i.id === 'aura-stand-free');

  useEffect(() => {
    if (subtotal <= 200 && hasFreeGift) {
      removeItem('aura-stand-free');
    }
  }, [subtotal, hasFreeGift, removeItem]);

  const upsellProduct = {
    id: "premium-case",
    title: "Hard-Shell Carry Case",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  };

  const addUpsell = () => {
    addToCart({ ...upsellProduct, variant: 'Standard', quantity: 1 });
  };

  const addFreeGift = () => {
    addToCart({ ...freeItem, variant: 'Standard', quantity: 1 });
  };

  if (items.length === 0) {
    return (
      <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Your Cart is Empty</h1>
        <p style={{ color: 'var(--color-secondary-text)', marginBottom: '2.5rem' }}>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="btn-primary" style={{ padding: '1rem 2rem' }}>Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="page-cart" style={{ padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Your Cart</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 2fr) minmax(300px, 1fr)', gap: '4rem', alignItems: 'start' }}>
          
          {/* Cart Items */}
          <div>
            <AnimatePresence>
              {items.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    padding: '1.5rem 0',
                    borderBottom: '1px solid var(--color-secondary-border)'
                  }}
                >
                  <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--color-secondary)', borderRadius: '8px', padding: '0.5rem', flexShrink: 0 }}>
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  
                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>
                          <Link to={`/product/${item.id}`}>{item.title}</Link>
                        </h3>
                        <p style={{ color: 'var(--color-secondary-text)', fontSize: '0.875rem' }}>Variant: {item.variant}</p>
                      </div>
                      <button onClick={() => removeItem(item.id)} style={{ color: 'var(--color-secondary-text)' }}>
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-secondary-border)', borderRadius: '4px', overflow: 'hidden' }}>
                        <button onClick={() => updateQuantity(item.id, -1)} style={{ padding: '0.5rem', color: 'white', backgroundColor: 'var(--color-secondary)' }}><Minus size={14} /></button>
                        <span style={{ padding: '0 1rem', fontSize: '0.875rem' }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} style={{ padding: '0.5rem', color: 'white', backgroundColor: 'var(--color-secondary)' }}><Plus size={14} /></button>
                      </div>
                      <span style={{ fontWeight: '600' }}>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Smart Upsell (AI Feature Simulation) */}
            {!items.find(i => i.id === upsellProduct.id) && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: '3rem',
                  padding: '1.5rem',
                  backgroundColor: 'var(--color-secondary)',
                  borderRadius: '8px',
                  border: '1px dashed var(--color-secondary-border)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>✨ Frequently Bought Together</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '4px', backgroundColor: 'var(--color-primary)', padding: '0.25rem' }}>
                    <img src={upsellProduct.image} alt="upsell" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{upsellProduct.title}</h4>
                    <span style={{ color: 'var(--color-secondary-text)', fontSize: '0.875rem' }}>${upsellProduct.price}</span>
                  </div>
                  <button onClick={addUpsell} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Add</button>
                </div>
              </motion.div>
            )}

            {/* Free Gift Option */}
            {subtotal > 200 && !hasFreeGift && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: '1.5rem',
                  padding: '1.5rem',
                  backgroundColor: 'rgba(0, 229, 255, 0.05)',
                  borderRadius: '8px',
                  border: '1px solid var(--color-accent)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>🎁 Free Gift Unlocked</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '4px', backgroundColor: 'var(--color-primary)', padding: '0.25rem' }}>
                    <img src={freeItem.image} alt="free gift" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{freeItem.title}</h4>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.875rem', fontWeight: '700' }}>$0.00</span>
                  </div>
                  <button onClick={addFreeGift} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Claim Gift</button>
                </div>
              </motion.div>
            )}
            
          </div>

          {/* Cart Summary */}
          <div style={{ backgroundColor: 'var(--color-secondary)', padding: '2rem', borderRadius: '8px', position: 'sticky', top: '6rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Order Summary</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderBottom: '1px solid var(--color-secondary-border)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-secondary-text)' }}>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-secondary-text)' }}>Estimated Shipping</span>
                <span>{shipping === 0 ? <span style={{ color: 'var(--color-accent)' }}>Free</span> : `$${shipping.toFixed(2)}`}</span>
              </div>
              {shipping > 0 && (
                <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary-text)', textAlign: 'right' }}>
                  Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                </div>
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>Total</span>
              <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>${total.toFixed(2)}</span>
            </div>

            <button 
              className="btn-primary" 
              style={{ width: '100%', padding: '1rem', marginBottom: '1rem', justifyContent: 'space-between' }}
              onClick={() => navigate('/checkout')}
            >
              <span>Checkout</span>
              <ArrowRight size={18} />
            </button>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center', color: 'var(--color-secondary-text)', fontSize: '0.75rem' }}>
              <ShieldCheck size={14} color="var(--color-accent)" /> 
              <span>Secure checkout. SSL Encrypted.</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
