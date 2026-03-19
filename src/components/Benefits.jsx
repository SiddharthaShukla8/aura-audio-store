import React from 'react';
import { Truck, ShieldCheck, Headphones, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    {
      icon: <Truck size={32} color="var(--color-accent)" />,
      title: "Free Express Shipping",
      desc: "On all orders over $100."
    },
    {
      icon: <ShieldCheck size={32} color="var(--color-accent)" />,
      title: "1-Year Warranty",
      desc: "Guaranteed premium quality."
    },
    {
      icon: <Headphones size={32} color="var(--color-accent)" />,
      title: "24/7 Support",
      desc: "Audio experts ready to help."
    },
    {
      icon: <RotateCcw size={32} color="var(--color-accent)" />,
      title: "30-Day Returns",
      desc: "Not satisfied? Send it back."
    }
  ];

  return (
    <section className="section" style={{ borderTop: '1px solid var(--color-secondary-border)', borderBottom: '1px solid var(--color-secondary-border)', backgroundColor: 'rgba(22, 22, 24, 0.5)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {benefits.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem' }}
            >
              <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: 'rgba(0, 229, 255, 0.1)', borderRadius: '50%' }}>
                {item.icon}
              </div>
              <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{item.title}</h4>
              <p style={{ color: 'var(--color-secondary-text)', fontSize: '0.875rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
