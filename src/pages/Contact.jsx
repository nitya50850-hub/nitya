import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaqTab, setActiveFaqTab] = useState('all'); // 'all' | 'orders' | 'legal'
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const faqs = [
    {
      id: 1,
      category: 'orders',
      question: 'What is the price range of garments at Store Fashion?',
      answer:
        'All garments in our curated collection are competitively priced. All displayed prices are inclusive of GST under GSTIN 23DYFPN2330Q1Z7 with no hidden charges at checkout.',
    },
    {
      id: 2,
      category: 'orders',
      question: 'What are your delivery charges and free shipping threshold?',
      answer:
        'We offer FREE standard express delivery on all orders above ₹1,999 across India. For orders below ₹1,999, a nominal flat shipping fee of ₹99 is applied at checkout.',
    },
    {
      id: 3,
      category: 'orders',
      question: 'How long does dispatch and delivery take?',
      answer:
        'Orders are prepared and dispatched within 1–2 business days from our Bhind fulfillment hub. Standard courier delivery takes between 5–7 business days depending on your destination PIN code.',
    },
    {
      id: 4,
      category: 'orders',
      question: 'What is your return and refund policy?',
      answer:
        'We offer a 7-day hassle-free return window from the date of delivery. Items must be unworn, unwashed, with original tags intact. Once inspected, refunds are credited back to your original payment mode within 7–10 business days.',
    },
    {
      id: 5,
      category: 'legal',
      question: 'Who is the legal operating entity behind Store Fashion?',
      answer:
        'Store Fashion is the registered commercial trade name of Nitya (Proprietorship), officially registered in Madhya Pradesh under GSTIN 23DYFPN2330Q1Z7 with principal operating premises at Building No. 57, Bhind Road, Pachera, District: Bhind, Madhya Pradesh — 477557.',
    },
    {
      id: 6,
      category: 'orders',
      question: 'Which payment methods do you accept?',
      answer:
        'We accept all major domestic credit & debit cards (Visa, MasterCard, RuPay), UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking across 50+ Indian banks, and Cash on Delivery (COD) for eligible PIN codes.',
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    if (activeFaqTab === 'all') return true;
    return faq.category === activeFaqTab;
  });

  return (
    <div className="page contact-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="section-label">Concierge & Inquiries</span>
          <h1 className="section-title">We're Here to Assist You</h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a query regarding your order, sizing advice, or wholesale partnerships? Reach out directly to Nitya and our support team.
          </p>
        </div>

        {/* Contact Layout: Form Left, Info Cards Right */}
        <div className="contact-layout">
          {/* Contact Form Card */}
          <div className="contact-form-card glass-card">
            <h3>Send Us a Message</h3>
            <p>We typically respond within 2 to 4 business hours.</p>

            {submitted ? (
              <div className="form-success">
                <div className="icon">✉️</div>
                <h3>Message Received!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Our customer concierge team will reply to{' '}
                  <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  style={{ marginTop: '20px' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contactName">Full Name *</label>
                  <input
                    id="contactName"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contactEmail">Email Address *</label>
                  <input
                    id="contactEmail"
                    type="email"
                    className="form-input"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contactSubject">Subject</label>
                  <input
                    id="contactSubject"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Order Status, Sizing Advice, Exchange"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contactMessage">Your Message *</label>
                  <textarea
                    id="contactMessage"
                    className="form-input"
                    placeholder="Please include order number if applicable..."
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} id="contactSubmitBtn">
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Cards */}
          <div className="contact-info-grid">
            <div className="contact-info-card glass-card">
              <div className="icon">📍</div>
              <h4>Operating Address</h4>
              <p>
                <strong>Nitya (Trade Name: Store Fashion)</strong><br />
                Building No. 57, Bhind Road, Pachera,<br />
                District: Bhind, Madhya Pradesh — 477557<br />
                <span style={{ fontSize: '0.8rem', color: 'var(--accent)' }}>GSTIN: 23DYFPN2330Q1Z7</span>
              </p>
            </div>

            <div className="contact-info-card glass-card">
              <div className="icon">📞</div>
              <h4>Direct Telephone</h4>
              <p>
                Customer Support: <a href="tel:+919981782579">+91 99817 82579</a><br />
                Mon – Sat: 10:00 AM – 7:00 PM IST<br />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Sunday: Closed</span>
              </p>
            </div>

            <div className="contact-info-card glass-card">
              <div className="icon">✉️</div>
              <h4>Official Email Desks</h4>
              <p>
                Support: <a href="mailto:support@storefashion.in">support@storefashion.in</a><br />
                General Inquiries: <a href="mailto:info@storefashion.in">info@storefashion.in</a><br />
                Privacy & Legal: <a href="mailto:privacy@storefashion.in">privacy@storefashion.in</a>
              </p>
            </div>
          </div>
        </div>

        {/* Embedded Google Maps Placeholder Showing Delhi Location */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ marginBottom: '16px' }}>
            <span className="section-label">Atelier Location</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem' }}>Find Our Central Hub</h3>
          </div>
          <div className="map-placeholder">
            <iframe
              title="Store Fashion Office Location Map"
              src="https://maps.google.com/maps?q=Bhind%20Road,%20Pachera,%20Bhind,%20Madhya%20Pradesh%20477557&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Tabbed / Accordion FAQ Section */}
        <section className="faq-section">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="section-label">Common Queries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          {/* FAQ Category Tabs */}
          <div className="faq-tabs" style={{ justifyContent: 'center' }}>
            <button
              className={`faq-tab ${activeFaqTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFaqTab('all')}
            >
              All Inquiries (6)
            </button>
            <button
              className={`faq-tab ${activeFaqTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveFaqTab('orders')}
            >
              Orders & Shipping (5)
            </button>
            <button
              className={`faq-tab ${activeFaqTab === 'legal' ? 'active' : ''}`}
              onClick={() => setActiveFaqTab('legal')}
            >
              Legal & Entity (1)
            </button>
          </div>

          {/* FAQ Accordion List */}
          <div className="faq-accordion" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.id} className={`faq-item ${isOpen ? 'open' : ''} glass-card`}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="icon">▼</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
