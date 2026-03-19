import React from 'react';

const FAQ = () => {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Frequently Asked Questions</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
        <div>
          <h3 style={{ marginBottom: '0.5rem' }}>Do you ship internationally?</h3>
          <p style={{ color: 'var(--color-secondary-text)' }}>Yes, we ship to most countries worldwide. International shipping usually takes 7-14 business days.</p>
        </div>
        <div>
          <h3 style={{ marginBottom: '0.5rem' }}>What is your return policy?</h3>
          <p style={{ color: 'var(--color-secondary-text)' }}>We offer a 30-day money back guarantee if you are not fully satisfied with your purchase.</p>
        </div>
        <div>
          <h3 style={{ marginBottom: '0.5rem' }}>Are your products covered by warranty?</h3>
          <p style={{ color: 'var(--color-secondary-text)' }}>All Aura Audio products come with a 1-year limited warranty against manufacturing defects.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
