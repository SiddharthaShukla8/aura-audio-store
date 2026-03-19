import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Over-Ear Headphones",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      link: "/collection/headphones"
    },
    {
      id: 2,
      title: "True Wireless",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      link: "/collection/earbuds"
    },
    {
      id: 3,
      title: "Premium Accessories",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
      link: "/collection/accessories"
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Shop by Category</h2>
            <p style={{ color: 'var(--color-secondary-text)' }}>Find the perfect sound for your lifestyle.</p>
          </div>
          <Link to="#" className="btn-outline" style={{ display: 'none' }}>View All</Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {collections.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                aspectRatio: '4/5',
                cursor: 'pointer',
                group: 'true'
              }}
              className="collection-card"
            >
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.5s ease',
              }} className="collection-bg" />
              
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to top, rgba(11,11,12,0.95) 0%, rgba(11,11,12,0.2) 60%)'
              }} />

              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                height: '100%'
              }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1rem' }}>{item.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {item.id === 1 && (
                    <>
                      <li><Link to="/collection/headphones" style={{ color: 'var(--color-secondary-text)', transition: 'color 0.2s', '&:hover': { color: 'white' } }}>Studio Monitors</Link></li>
                      <li><Link to="/collection/headphones" style={{ color: 'var(--color-secondary-text)', transition: 'color 0.2s' }}>Noise Cancelling</Link></li>
                      <li><Link to="/collection/headphones" style={{ color: 'var(--color-secondary-text)', transition: 'color 0.2s' }}>Audiophile Grade</Link></li>
                    </>
                  )}
                  {item.id === 2 && (
                    <>
                      <li><Link to="/collection/earbuds" style={{ color: 'var(--color-secondary-text)', transition: 'color 0.2s' }}>Active Fit</Link></li>
                      <li><Link to="/collection/earbuds" style={{ color: 'var(--color-secondary-text)', transition: 'color 0.2s' }}>Everyday Carry</Link></li>
                    </>
                  )}
                  {item.id === 3 && (
                    <>
                      <li><Link to="/collection/accessories" style={{ color: 'var(--color-secondary-text)', transition: 'color 0.2s' }}>Stands & Mounts</Link></li>
                      <li><Link to="/collection/accessories" style={{ color: 'var(--color-secondary-text)', transition: 'color 0.2s' }}>Replacement Cables</Link></li>
                      <li><Link to="/collection/accessories" style={{ color: 'var(--color-secondary-text)', transition: 'color 0.2s' }}>Memory Foam Pads</Link></li>
                    </>
                  )}
                </ul>

                <Link to={item.link} className="btn-primary" style={{ alignSelf: 'flex-start', padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>
                  Shop {item.title} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .collection-card:hover .collection-bg {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Collections;
