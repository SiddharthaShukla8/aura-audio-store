import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Truck, ShieldCheck, ShoppingCart, Info, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('Matte Black');
  const [activeTab, setActiveTab] = useState('description');
  const [mainImage, setMainImage] = useState("https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80");

  const product = {
    title: "Aura Sync Pro Wireless Headphones",
    price: "$299.99",
    compareAt: "$349.99",
    rating: 4.9,
    reviews: 1248,
    description: "Experience the ultimate in sound clarity with our next-generation Active Noise Cancelling technology. The Aura Sync Pro features 50mm beryllium drivers, 40 hours of battery life, and a supremely comfortable memory foam fit designed for all-day listening.",
    colors: [
      { name: 'Matte Black', hex: '#111111', img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
      { name: 'Lunar White', hex: '#F5F5F7', img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
      { name: 'Midnight Blue', hex: '#1A233A', img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ],
    features: [
      "Industry-Leading Active Noise Cancellation",
      "Up to 40 Hours Battery Life",
      "High-Res Audio Certified",
      "Multipoint Bluetooth 5.3",
      "Custom EQ via Aura App"
    ]
  };

  const galleryImages = [
    product.colors[0].img,
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="product-page" style={{ padding: '4rem 0' }}>
      <div className="container">
        
        {/* Breadcrumbs */}
        <div style={{ marginBottom: '2rem', fontSize: '0.875rem', color: 'var(--color-secondary-text)' }}>
          <Link to="/">Home</Link> &gt; <Link to="/catalog">Headphones</Link> &gt; <span style={{ color: 'white' }}>{product.title}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left: Image Gallery */}
          <div className="product-gallery" style={{ position: 'sticky', top: '6rem' }}>
            <div style={{ 
              backgroundColor: 'var(--color-secondary)', 
              borderRadius: '8px', 
              aspectRatio: '1', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: '1px solid var(--color-secondary-border)',
              marginBottom: '1rem',
              overflow: 'hidden'
            }}>
              <AnimatePresence mode="wait">
                <motion.img 
                  key={mainImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={mainImage} 
                  alt={product.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </AnimatePresence>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
              {galleryImages.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setMainImage(img)}
                  style={{
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '4px',
                    border: mainImage === img ? '2px solid var(--color-accent)' : '2px solid var(--color-secondary-border)',
                    overflow: 'hidden',
                    flexShrink: 0
                  }}
                >
                  <img src={img} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="product-info">
            <span className="badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Best Seller</span>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.title}</h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.2rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" />
                ))}
              </div>
              <span style={{ color: 'var(--color-secondary-text)', fontSize: '0.875rem' }}>{product.rating} / 5 ({product.reviews} Reviews)</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'baseline', marginBottom: '2rem' }}>
              <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-accent)' }}>{product.price}</span>
              <span style={{ fontSize: '1.25rem', textDecoration: 'line-through', color: 'var(--color-secondary-text)' }}>{product.compareAt}</span>
            </div>

            <p style={{ color: 'var(--color-secondary-text)', lineHeight: '1.6', marginBottom: '2rem' }}>
              {product.description}
            </p>

            {/* Variant Selector */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Color: <span style={{ color: 'var(--color-secondary-text)', fontWeight: '400' }}>{selectedColor}</span></h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => {
                      setSelectedColor(color.name);
                      setMainImage(color.img);
                    }}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: color.hex,
                      border: selectedColor === color.name ? '2px solid var(--color-accent)' : '2px solid transparent',
                      outline: selectedColor === color.name ? '2px solid var(--color-primary)' : 'none',
                      outlineOffset: '-4px',
                      boxShadow: selectedColor === color.name ? '0 0 0 2px var(--color-accent)' : '0 0 0 1px var(--color-secondary-border)'
                    }}
                    aria-label={`Select ${color.name}`}
                  />
                ))}
              </div>
            </div>

            {/* Sticky Add to Cart Container (simulated sticky effect in normal flow here, can be made sticky on mobile) */}
            <div style={{ 
              backgroundColor: 'var(--color-secondary)', 
              padding: '1.5rem', 
              borderRadius: '8px',
              border: '1px solid var(--color-secondary-border)',
              marginBottom: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              position: 'sticky',
              bottom: '2rem',
              zIndex: 40
            }}>
              <button 
                className="btn-primary" 
                style={{ width: '100%', fontSize: '1.125rem', padding: '1.25rem' }}
                onClick={() => addToCart({ 
                  id: 'aura-sync-pro', 
                  title: product.title, 
                  variant: selectedColor, 
                  price: 299.99, 
                  image: mainImage, 
                  quantity: 1 
                })}
              >
                <ShoppingCart size={20} /> Add to Cart — {product.price}
              </button>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center', color: 'var(--color-secondary-text)', fontSize: '0.875rem' }}>
                <ShieldCheck size={16} color="var(--color-accent)" /> 
                <span>Secure Checkout. 1-Year Warranty Included.</span>
              </div>
            </div>

            {/* Trust Badges / Upsell Area */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem' }}>
                <Truck size={20} color="var(--color-accent)" />
                <div>
                  <div style={{ fontWeight: '600' }}>Free Shipping</div>
                  <div style={{ color: 'var(--color-secondary-text)' }}>2-3 Business Days</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem' }}>
                <RotateCcw size={20} color="var(--color-accent)" />
                <div>
                  <div style={{ fontWeight: '600' }}>Free Returns</div>
                  <div style={{ color: 'var(--color-secondary-text)' }}>Within 30 Days</div>
                </div>
              </div>
            </div>

            {/* Product Tabs */}
            <div style={{ borderTop: '1px solid var(--color-secondary-border)', paddingTop: '2rem' }}>
              <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-secondary-border)' }}>
                {['description', 'features', 'shipping'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      paddingBottom: '1rem',
                      fontWeight: activeTab === tab ? '600' : '400',
                      color: activeTab === tab ? 'var(--color-accent)' : 'var(--color-secondary-text)',
                      borderBottom: activeTab === tab ? '2px solid var(--color-accent)' : '2px solid transparent',
                      textTransform: 'capitalize'
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              {activeTab === 'description' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p style={{ color: 'var(--color-secondary-text)', lineHeight: '1.6' }}>{product.description}</p>
                </motion.div>
              )}
              {activeTab === 'features' && (
                <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'var(--color-secondary-text)', lineHeight: '2', paddingLeft: '1.5rem' }}>
                  {product.features.map((feat, i) => <li key={i}>{feat}</li>)}
                </motion.ul>
              )}
              {activeTab === 'shipping' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p style={{ color: 'var(--color-secondary-text)', lineHeight: '1.6' }}>Orders placed before 2PM EST ship same day. Express delivery takes 2-3 business days. International shipping takes 7-14 business days. All packages are fully insured.</p>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
