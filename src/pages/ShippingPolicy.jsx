import { Link } from 'react-router-dom';

export default function ShippingPolicy() {
  return (
    <div className="page legal-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header" style={{ paddingBottom: '20px' }}>
          <span className="section-label">Logistics & Fulfilment</span>
          <h1 className="section-title">Shipping & Delivery Policy</h1>
        </div>

        {/* Legal Meta Line */}
        <div className="legal-meta">
          <strong>Last updated:</strong> November 2026 · <strong>Operating Entity:</strong> Nitya (Trade Name: Store Fashion) · <strong>GSTIN:</strong> 23DYFPN2330Q1Z7 · <strong>Origin:</strong> Bhind, Madhya Pradesh, India
        </div>

        {/* Section 1: Coverage */}
        <div className="legal-section glass-card" style={{ padding: '28px' }}>
          <h2>1. Geographic Shipping Coverage</h2>
          <p>
            Store Fashion delivers to over 27,000+ serviceable postal PIN codes across the Republic of India. We partner with Tier-1 logistics networks (including Delhivery, Blue Dart, Xpressbees, and DTDC) to guarantee safe and insured package delivery.
          </p>
          <p>
            Currently, we do not ship internationally outside India.
          </p>
        </div>

        {/* Section 2: Shipping Charges */}
        <div className="legal-section glass-card" style={{ padding: '28px' }}>
          <h2>2. Shipping Charges & Free Delivery Threshold</h2>
          <ul>
            <li>
              <strong>FREE Standard Delivery:</strong> All orders valued at <strong>₹1,999 or more</strong> qualify for automatic FREE shipping nationwide.
            </li>
            <li>
              <strong>Standard Shipping Fee:</strong> For orders under ₹1,999, a nominal flat shipping fee of <strong>₹99</strong> is added at checkout to cover insured handling and transit.
            </li>
            <li>
              <strong>No Hidden Charges:</strong> All garment prices displayed on our website are inclusive of applicable GST (GSTIN: 23DYFPN2330Q1Z7). The order summary displayed at checkout reflects the complete and final payable amount.
            </li>
          </ul>
        </div>

        {/* Section 3: Processing & Dispatch Timeline */}
        <div className="legal-section glass-card" style={{ padding: '28px' }}>
          <h2>3. Order Processing & Dispatch Timelines</h2>
          <ul>
            <li>
              <strong>Processing Window:</strong> In-stock orders placed before 3:00 PM IST on business days are processed and packaged within <strong>1 to 2 business days</strong> (Monday through Saturday, excluding gazetted national holidays).
            </li>
            <li>
              <strong>Quality Inspection:</strong> Every garment undergoes a comprehensive 3-point tailoring and finish check at our Bhind fulfillment atelier prior to hermetic sealing and dispatch.
            </li>
          </ul>
        </div>

        {/* Section 4: Estimated Transit Times */}
        <div className="legal-section glass-card" style={{ padding: '28px' }}>
          <h2>4. Estimated Delivery Timelines</h2>
          <p>Once your parcel is handed over to our courier partner from our Bhind hub, delivery timelines are typically:</p>
          <ul>
            <li><strong>Delhi NCR & Northern Metros:</strong> 2 to 4 business days.</li>
            <li><strong>Major Metros (Mumbai, Bengaluru, Kolkata, Chennai, Hyderabad):</strong> 4 to 6 business days.</li>
            <li><strong>Rest of India (Tier 2/3 Cities & Regional Centers):</strong> 5 to 7 business days.</li>
            <li><strong>Remote / Northeast / Island Regions:</strong> 7 to 10 business days.</li>
          </ul>
          <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <em>* Delivery schedules may occasionally experience minor delays due to adverse weather events, regional strikes, or peak festival seasons.</em>
          </p>
        </div>

        {/* Section 5: Order Tracking */}
        <div className="legal-section glass-card" style={{ padding: '28px' }}>
          <h2>5. Tracking Your Consignment</h2>
          <p>
            Upon courier dispatch, automated shipping updates along with your unique Courier Tracking AWB number and live tracking link will be transmitted via SMS and Email to the credentials entered during checkout.
          </p>
          <p>
            If you do not receive a tracking notification within 48 hours of placing your order, please write to us at{' '}
            <a href="mailto:support@clotheshub.in" style={{ color: 'var(--accent)' }}>support@clotheshub.in</a> quoting your Order ID (format: CH-XXXXXX).
          </p>
        </div>

        {/* Section 6: Undelivered / Damaged Consignments */}
        <div className="legal-section glass-card" style={{ padding: '28px' }}>
          <h2>6. Damaged or Tampered Packaging</h2>
          <p>
            If the outer parcel appears noticeably damaged, opened, or tampered with at the time of delivery, please <strong>refuse to accept delivery</strong> from the courier executive and immediately notify our support team.
          </p>
          <p>
            If you open the parcel and discover an incorrect or defective item, report it within <strong>48 hours of delivery</strong> with unboxing photographs/video to our support desk for an immediate priority replacement or full refund under our{' '}
            <Link to="/refund-policy" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Refund & Cancellation Policy</Link>.
          </p>
        </div>

        {/* Section 7: Grievances & Contact */}
        <div className="legal-section glass-card" style={{ padding: '28px' }}>
          <h2>7. Fulfilment Office Contact</h2>
          <p>For inquiries regarding shipment status, dispatch tracking, or delivery re-routing:</p>
          <p style={{ marginTop: '8px' }}>
            <strong>Nitya</strong> (Proprietor, Store Fashion)<br />
            Fulfillment Hub: Building No. 57, Bhind Road, Pachera, District: Bhind, Madhya Pradesh — 477557<br />
            Phone: <a href="tel:+919981782579" style={{ color: 'var(--accent)' }}>+91 99817 82579</a> (Mon–Sat, 10:00 AM – 7:00 PM IST)<br />
            Email: <a href="mailto:support@storefashion.in" style={{ color: 'var(--accent)' }}>support@storefashion.in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

