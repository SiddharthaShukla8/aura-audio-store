import React from 'react';

const Contact = () => {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Contact Us</h1>
      <p style={{ color: 'var(--color-secondary-text)', lineHeight: '1.6', maxWidth: '600px', marginBottom: '2rem' }}>
        Have a question about your order, our products, or just want to talk about sound? Drop us a line.
      </p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <input type="text" placeholder="Name" style={{ padding: '1rem', backgroundColor: 'var(--color-secondary)', border: '1px solid var(--color-secondary-border)', color: 'white' }} />
        <input type="email" placeholder="Email" style={{ padding: '1rem', backgroundColor: 'var(--color-secondary)', border: '1px solid var(--color-secondary-border)', color: 'white' }} />
        <textarea placeholder="Message" rows="5" style={{ padding: '1rem', backgroundColor: 'var(--color-secondary)', border: '1px solid var(--color-secondary-border)', color: 'white' }}></textarea>
        <button type="button" className="btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
