import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header({ onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <span>✨ Free Delivery on Orders Above ₹1,999 | Premium Collection Live Now</span>
      </div>

      {/* Main Sticky Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner" style={{ gridTemplateColumns: 'auto 1fr auto' }}>
          {/* Mobile hamburger */}
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            id="mobileMenuToggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Brand Logo — Left Aligned */}
          <div className="header-brand" style={{ textAlign: 'left' }}>
            <Link to="/" onClick={closeMobileMenu} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <div
                className="brand-logo-badge"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(209, 173, 102, 0.2) 0%, rgba(16, 185, 129, 0.15) 100%)',
                  border: '1px solid rgba(209, 173, 102, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)',
                  color: 'var(--accent)',
                  flexShrink: 0
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                  <line x1="12" y1="22" x2="12" y2="15.5"></line>
                  <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                  <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                </svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    color: 'var(--text-primary)',
                    lineHeight: '1.1'
                  }}
                >
                  STORE <span style={{ color: 'var(--accent)' }}>FASHION</span>
                </span>
                <span
                  style={{
                    fontSize: '0.62rem',
                    letterSpacing: '2.2px',
                    fontWeight: '600',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    marginTop: '2px'
                  }}
                >
                  HAUTE MENSWEAR
                </span>
              </div>
            </Link>
          </div>

          {/* Center Nav Links */}
          <nav className="nav-left" style={{ justifyContent: 'center', gap: '32px' }}>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
            <NavLink to="/shop" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Shop</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About Us</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact Us</NavLink>
          </nav>

          {/* Right Cart */}
          <div className="nav-right">
            <button
              className="cart-btn"
              onClick={onOpenCart}
              aria-label={`Shopping Cart with ${cartCount} items`}
              id="headerCartBtn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Shop Collection
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Contact & FAQs
          </NavLink>
          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
              Operated by <strong>Nitya</strong> (Trade Name: Store Fashion)
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              GSTIN: 23DYFPN2330Q1Z7 • Bhind, Madhya Pradesh, India
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
