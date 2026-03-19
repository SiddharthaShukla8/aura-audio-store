import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero" style={{
      position: 'relative',
      height: '80vh',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: 'var(--color-primary)'
    }}>
      {/* Background with subtle gradient/blur */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 70% 50%, rgba(0, 229, 255, 0.15) 0%, rgba(11, 11, 12, 1) 50%)',
        zIndex: 1
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <span className="badge" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>New Release</span>
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
            Hear the Unheard. <br />
            <span style={{ color: 'var(--color-accent)' }}>Aura Sync Pro.</span>
          </h1>
          <p style={{ color: 'var(--color-secondary-text)', fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '500px' }}>
            Experience audiophile-grade sound with industry-leading active noise cancellation and a refined, premium design.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/product/aura-sync-pro" className="btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
              Shop Now
            </Link>
            <Link to="#" className="btn-outline" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          {/* Placeholder for Hero Image - utilizing a nice tech aesthetic image from unsplash via source.unsplash or standard placeholder */}
          <div style={{
            width: '100%',
            aspectRatio: '1',
            borderRadius: '50%',
            background: 'var(--color-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 100px rgba(0, 229, 255, 0.1)',
            border: '1px solid var(--color-secondary-border)'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Aura Sync Pro Headphones" 
              style={{ width: '80%', height: 'auto', objectFit: 'contain', transform: 'rotate(-15deg)', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
