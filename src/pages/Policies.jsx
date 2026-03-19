import React from 'react';

const Policies = () => {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Store Policies</h1>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--color-secondary-border)', paddingBottom: '0.5rem' }}>Shipping & Returns</h2>
        <p style={{ color: 'var(--color-secondary-text)', lineHeight: '1.6' }}>All orders process within 24-48 hours. Returns are accepted within 30 days of delivery. Items must be in original condition.</p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--color-secondary-border)', paddingBottom: '0.5rem' }}>Privacy Policy</h2>
        <p style={{ color: 'var(--color-secondary-text)', lineHeight: '1.6' }}>We do not sell your data. Your information is securely encrypted and used solely for the purpose of order fulfillment and customer experience.</p>
      </section>

      <section>
        <h2 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--color-secondary-border)', paddingBottom: '0.5rem' }}>Terms of Service</h2>
        <p style={{ color: 'var(--color-secondary-text)', lineHeight: '1.6' }}>By using this website, you agree to our terms of service which govern the purchase and use of Aura Audio products.</p>
      </section>
    </div>
  );
};

export default Policies;
