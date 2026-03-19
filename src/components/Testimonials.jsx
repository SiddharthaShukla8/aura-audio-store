import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    {
      name: "Alex R.",
      role: "Audio Engineer",
      text: "The Aura Sync Pro offers an incredibly flat frequency response out of the box. Absolutely stunning clarity for this price point.",
      rating: 5
    },
    {
      name: "Jamie L.",
      role: "Daily Commuter",
      text: "The ANC on these is black magic. It completely drowns out the train noise, and the battery lasts me all week.",
      rating: 5
    },
    {
      name: "Sam T.",
      role: "Music Producer",
      text: "Premium build quality and a highly comfortable fit. I can wear these for 8 hours in the studio without any fatigue.",
      rating: 5
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Hear From Experts</h2>
          <p style={{ color: 'var(--color-secondary-text)' }}>Over 10,000+ 5-star reviews globally.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: 'var(--color-secondary)',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid var(--color-secondary-border)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--color-accent)" color="var(--color-accent)" />
                ))}
              </div>
              <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                "{review.text}"
              </p>
              <div>
                <h4 style={{ fontWeight: '600' }}>{review.name}</h4>
                <p style={{ color: 'var(--color-secondary-text)', fontSize: '0.875rem' }}>{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
