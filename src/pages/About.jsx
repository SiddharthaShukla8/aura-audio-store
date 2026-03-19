import React from 'react';

const About = () => {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Aura Audio</h1>
      <p style={{ color: 'var(--color-secondary-text)', lineHeight: '1.6', maxWidth: '600px' }}>
        Aura Audio was born out of a simple pursuit: uncompromising sound. 
        We build premium audio equipment for audiophiles, commuters, and creators alike. 
        Everything we do is focused on acoustic perfection and minimalist design.
      </p>
    </div>
  );
};

export default About;
