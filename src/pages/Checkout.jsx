import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, CheckCircle } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'Test@123') {
      setStep(2);
      setError('');
    } else {
      setError('Incorrect store password. Hint: Test@123');
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="page-checkout" style={{ minHeight: '80vh', backgroundColor: 'var(--color-primary)', display: 'flex', flexDirection: 'column' }}>
      
      {/* Checkout Navbar Mini */}
      <div style={{ borderBottom: '1px solid var(--color-secondary-border)', padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700' }}>
            AURA <span style={{ color: 'var(--color-accent)' }}>AUDIO</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-secondary-text)', fontSize: '0.875rem' }}>
            <Lock size={16} /> Secure Checkout
          </div>
        </div>
      </div>

      <div className="container" style={{ flexGrow: 1, padding: '4rem 2rem', maxWidth: '600px' }}>
        
        {step === 1 && (
          <div style={{ backgroundColor: 'var(--color-secondary)', padding: '3rem', borderRadius: '8px', border: '1px solid var(--color-secondary-border)' }}>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>Store Access Required</h1>
            <p style={{ color: 'var(--color-secondary-text)', marginBottom: '2rem', textAlign: 'center', fontSize: '0.875rem' }}>
              Please enter the development store password to proceed with checkout.
            </p>
            <form onSubmit={handlePasswordSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter store password" 
                  style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: 'var(--color-primary)',
                    border: '1px solid var(--color-secondary-border)',
                    borderRadius: '4px',
                    color: 'white',
                    outline: 'none'
                  }}
                />
                {error && <p style={{ color: '#ff4d4d', fontSize: '0.875rem', marginTop: '0.5rem' }}>{error}</p>}
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem' }}>Enter Store</button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div style={{ backgroundColor: 'var(--color-secondary)', padding: '3rem', borderRadius: '8px', border: '1px solid var(--color-secondary-border)' }}>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>1</span>
              Shipping Information
            </h1>
            <form onSubmit={handlePlaceOrder}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input required type="text" placeholder="First Name" style={{ padding: '1rem', backgroundColor: 'var(--color-primary)', border: '1px solid var(--color-secondary-border)', borderRadius: '4px', color: 'white' }} />
                <input required type="text" placeholder="Last Name" style={{ padding: '1rem', backgroundColor: 'var(--color-primary)', border: '1px solid var(--color-secondary-border)', borderRadius: '4px', color: 'white' }} />
              </div>
              <input required type="text" placeholder="Address" style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--color-primary)', border: '1px solid var(--color-secondary-border)', borderRadius: '4px', color: 'white', marginBottom: '2rem' }} />
              
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderTop: '1px solid var(--color-secondary-border)', paddingTop: '2rem' }}>Payment</h2>
              <div style={{ padding: '1rem', border: '1px solid var(--color-secondary-border)', borderRadius: '4px', marginBottom: '2rem', backgroundColor: 'var(--color-primary)' }}>
                <p style={{ color: 'var(--color-secondary-text)', fontSize: '0.875rem', textAlign: 'center' }}>Test Gateway - No real payment required</p>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem' }}>Place Order</button>
            </form>
            <button onClick={() => setStep(1)} style={{ color: 'var(--color-secondary-text)', fontSize: '0.875rem', marginTop: '1.5rem', textDecoration: 'underline' }}>&lt; Back</button>
          </div>
        )}

        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <CheckCircle size={80} color="var(--color-accent)" style={{ margin: '0 auto 2rem' }} />
            </motion.div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Thank You!</h1>
            <p style={{ color: 'var(--color-secondary-text)', marginBottom: '2rem' }}>Your test order has been successfully placed.</p>
            <button className="btn-outline" onClick={() => navigate('/')}>Return to Home</button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Checkout;
