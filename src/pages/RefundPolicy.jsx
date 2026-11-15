import { Link } from 'react-router-dom';

export default function RefundPolicy() {
  return (
    <div className="page legal-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header" style={{ paddingBottom: '20px' }}>
          <span className="section-label">Customer Satisfaction Guarantee</span>
          <h1 className="section-title">Cancellation, Return & Refund Policy</h1>
        </div>

        {/* Legal Meta Line */}
        <div className="legal-meta">
          <strong>Last updated:</strong> November 2026 · <strong>Governing Entity:</strong> Nitya (Trade Name: Store Fashion) · <strong>GSTIN:</strong> 23DYFPN2330Q1Z7 · <strong>Jurisdiction:</strong> Bhind, Madhya Pradesh, India
        </div>

        {/* Section 1: Introduction */}
        <div className="legal-section glass-card" style={{ padding: '28px' }}>
          <h2>1. Overview</h2>
          <p>
            At <strong>Store Fashion</strong>, operated by <strong>Nitya</strong> (GSTIN: <strong>23DYFPN2330Q1Z7</strong>), we stand firmly behind the quality, cut, and fabric craftsmanship of every garment we tailor and dispatch. We want every patron to shop with absolute peace of mind.
          </p>
          <p>
            If you are not entirely satisfied with your purchase, our transparent <strong>7-Day Return & Exchange Policy</strong> ensures an effortless resolution, backed by direct refunds to your original payment method.
          </p>
        </div>

        {/* Section 2: Order Cancellation Policy */}
        <div className="legal-section glass-card" style={{ padding: '28px' }}>
          <h2>2. Order Cancellation Policy</h2>
          <ul>
            <li>
              <strong>Cancellation Prior to Dispatch:</strong> You may cancel any order within <strong>12 hours</strong> of placement, or anytime before the package is handed over to our courier partner. To cancel, simply reach out to our concierge team at <a href="mailto:support@storefashion.in" style={{ color: 'var(--accent)' }}>support@storefashion.in</a> or call <a href="tel:+919981782579" style={{ color: 'var(--accent)' }}>+91 99817 82579</a> with your Order ID.
            </li>
            <li>
              <strong>Instant Cancellation Refund:</strong> For pre-dispatch cancellations, a 100% full refund is initiated immediately and reversed to your source payment method (UPI / Card / Net Banking) within <strong>24 to 48 hours</strong>.
            </li>
            <li>
              <strong>Cancellations Post-Dispatch:</strong> Once a parcel has departed our Bhind fulfillment center and is in courier transit, it cannot be cancelled mid-route. Please receive the package and initiate a standard return within 7 days.
            </li>
          </ul>
        </div>

        {/* Section 3: Return Eligibility & Conditions */}
        <div className="legal-section glass-card" style={{ padding: '28px' }}>
          <h2>3. 7-Day Return & Exchange Window</h2>
          <p>
            Customers are entitled to request a return or size exchange within <strong>7 calendar days</strong> from the date of confirmed courier delivery.
          </p>
          <p><strong>Eligibility Criteria:</strong></p>
          <ul>
            <li>The garment must be in its original, unworn, unwashed, and unaltered condition.</li>
            <li>All original designer brand tags, security loops, and poly-bag packaging must be completely intact.</li>
            <li>Garments showing signs of perfume scents, cosmetic stains, body odor, or pet hair cannot be accepted for sanitary and quality reasons.</li>
            <li>Defective, damaged, or mis-shipped items must be notified within <strong>48 hours</strong> of delivery with clear photographs for expedited processing.</li>
          </ul>
        </div>

        {/* Section 4: Step-by-Step Return Process */}
        <div className="legal-section glass-card" style={{ padding: '28px' }}>
          <h2>4. How to Initiate a Return</h2>
          <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
            <li>
              <strong>Submit Request:</strong> Email our support concierge at <a href="mailto:support@clotheshub.in" style={{ color: 'var(--accent)' }}>support@clotheshub.in</a> or visit our <Link to="/contact" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Contact Us</Link> page. Mention your <strong>Order ID (e.g. CH-XXXXXX)</strong>, the item(s) you wish to return, and the reason (sizing, defect, or preference).
            </li>
            <li>
              <strong>Doorstep Reverse Pickup:</strong> Our team will schedule an insured reverse courier pickup from your delivery address within 24–48 hours at no additional hassle to you.
            </li>
            <li>
              <strong>Secure Handover:</strong> Hand over the securely packed garment with original tags to the designated courier executive upon receiving the pickup SMS.
            </li>
          </ol>
        </div>

        {/* Section 5: Quality Inspection & Refund Disbursement */}
        <div className="legal-section glass-card" style={{ padding: '28px' }}>
          <h2>5. Quality Inspection & Refund Timelines</h2>
          <p>
            Upon physical arrival at our Bhind inspection atelier, our quality team checks the returned garment within <strong>24 to 48 hours</strong>.
          </p>
          <ul>
            <li>
              <strong>Prepaid Orders (UPI / Debit & Credit Cards / Net Banking):</strong> Upon return approval, the refund is reversed directly to the original bank account, card, or UPI VPA used at checkout. The funds reflect in your statement within <strong>7 to 10 business days</strong>, governed by your issuing bank's settlement cycle.
            </li>
            <li>
              <strong>Cash on Delivery (COD) Orders:</strong> Our concierge will request your preferred bank account details (Account Number, IFSC, Account Holder Name) or UPI ID. The approved refund will be disbursed via NEFT/IMPS/UPI transfer within <strong>3 to 5 business days</strong> of verification.
            </li>
            <li>
              <strong>Return Shipping Charges:</strong> No deduction is made for defective or damaged items. For preference-based returns, a nominal return logistics charge of ₹99 may be adjusted from the refund amount.
            </li>
          </ul>
        </div>

        {/* Section 6: Exchanges */}
        <div className="legal-section glass-card" style={{ padding: '28px' }}>
          <h2>6. Sizing & Item Exchanges</h2>
          <p>
            If you need a different size (e.g. S, M, L, XL, XXL) or color in the same design, we offer <strong>one-time free size exchanges</strong> subject to stock availability. The replacement item is dispatched as soon as the returned item is handed over to the courier executive.
          </p>
        </div>

        {/* Section 7: Grievance & Escalation Desk */}
        <div className="legal-section glass-card" style={{ padding: '28px' }}>
          <h2>7. Grievance Redressal & Support Desk</h2>
          <p>If you experience any delay or issue regarding your return or refund disbursement:</p>
          <p style={{ marginTop: '8px' }}>
            <strong>Nitya</strong> (Proprietor & Grievance Officer, Store Fashion)<br />
            Registered Office: Building No. 57, Bhind Road, Pachera, District: Bhind, Madhya Pradesh — 477557<br />
            Direct Support Line: <a href="tel:+919981782579" style={{ color: 'var(--accent)' }}>+91 99817 82579</a> (Mon–Sat, 10:00 AM – 7:00 PM IST)<br />
            Email: <a href="mailto:support@storefashion.in" style={{ color: 'var(--accent)' }}>support@storefashion.in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

