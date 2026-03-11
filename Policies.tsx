/* ============================================================
   Policies — Shipping, Returns, Cookie Policy
   Advanced Skin Solutions
   ============================================================ */

import { useLocation } from 'wouter';

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-foreground mb-3">{title}</h2>
      <div className="text-foreground/80 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export function ShippingPolicy() {
  return (
    <div className="min-h-screen py-16">
      <div className="container max-w-3xl">
        <p className="section-label mb-2">Legal</p>
        <h1 className="display-heading text-4xl mb-2">Shipping Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <PolicySection title="1. Delivery Partner">
            <p>
              Advanced Skin Solutions delivers all orders nationwide across South Africa via <strong>Pudo</strong>, a trusted South African courier network. Pudo offers both locker-to-locker and door-to-door delivery options.
            </p>
            <p>
              Find your nearest Pudo locker at <a href="https://www.pudo.co.za" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.64_0.065_220)] hover:underline">www.pudo.co.za</a>.
            </p>
          </PolicySection>

          <PolicySection title="2. Delivery Options">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Locker-to-Locker:</strong> Drop your parcel at a Pudo locker and collect from your nearest locker. Most affordable option.</li>
              <li><strong>Door-to-Door:</strong> Your order is delivered directly to your specified address.</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Delivery Costs">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Free delivery</strong> on all orders over <strong>R1,400</strong>.</li>
              <li>Standard delivery fees apply for orders under R1,400. Exact fees are calculated at checkout based on your location and chosen delivery method.</li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Processing & Delivery Times">
            <ul className="list-disc pl-5 space-y-2">
              <li>Orders are processed within 1–2 business days of payment confirmation.</li>
              <li>Estimated delivery: <strong>2–5 business days</strong> for major centres; <strong>3–7 business days</strong> for outlying areas.</li>
              <li>Delivery times are estimates only and may be affected by public holidays, adverse weather, or courier delays beyond our control.</li>
            </ul>
          </PolicySection>

          <PolicySection title="5. Order Tracking">
            <p>
              Once your order has been dispatched, you will receive a Pudo tracking number via WhatsApp or email. You can track your parcel at <a href="https://www.pudo.co.za" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.64_0.065_220)] hover:underline">www.pudo.co.za</a>.
            </p>
          </PolicySection>

          <PolicySection title="6. Failed Deliveries">
            <p>
              If a delivery attempt fails, Pudo will hold your parcel at the nearest locker or depot for collection. Uncollected parcels may be returned to us, and re-delivery charges may apply.
            </p>
          </PolicySection>

          <PolicySection title="7. Contact">
            <div className="p-4 bg-muted rounded-lg text-sm space-y-1">
              <p>WhatsApp: +27 82 552 6263</p>
              <p>Email: info@advancedskinsolutions.co.za</p>
            </div>
          </PolicySection>
        </div>
      </div>
    </div>
  );
}

export function ReturnsPolicy() {
  return (
    <div className="min-h-screen py-16">
      <div className="container max-w-3xl">
        <p className="section-label mb-2">Legal</p>
        <h1 className="display-heading text-4xl mb-2">Returns & Refunds Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026 · CPA Compliant</p>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <PolicySection title="1. Your Rights Under the CPA">
            <p>
              In accordance with the <strong>Consumer Protection Act 68 of 2008</strong>, you have the right to return goods within <strong>10 business days</strong> of delivery if:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The product is defective or damaged</li>
              <li>The product is not fit for the purpose described</li>
              <li>The product does not match the description or sample shown</li>
            </ul>
          </PolicySection>

          <PolicySection title="2. Hygiene Policy">
            <p>
              For hygiene and safety reasons, <strong>opened skincare products cannot be returned</strong> unless they are defective, contaminated, or not as described. All returns must be in their original, sealed packaging.
            </p>
          </PolicySection>

          <PolicySection title="3. How to Initiate a Return">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Contact us within 10 business days of delivery via WhatsApp (+27 82 552 6263) or email (info@advancedskinsolutions.co.za).</li>
              <li>Provide your order number, the product(s) you wish to return, and the reason for the return.</li>
              <li>We will provide return instructions and a Pudo return label where applicable.</li>
              <li>Return the product in its original packaging.</li>
            </ol>
          </PolicySection>

          <PolicySection title="4. Refunds">
            <ul className="list-disc pl-5 space-y-2">
              <li>Refunds are processed within <strong>7 business days</strong> of receiving the returned goods.</li>
              <li>Refunds are issued via the original payment method.</li>
              <li>Return shipping costs are the customer's responsibility unless the product is defective or incorrectly supplied.</li>
            </ul>
          </PolicySection>

          <PolicySection title="5. Exchanges">
            <p>
              We offer exchanges for products of equal or lesser value, subject to stock availability. Contact us via WhatsApp to arrange an exchange.
            </p>
          </PolicySection>

          <PolicySection title="6. Non-Returnable Items">
            <ul className="list-disc pl-5 space-y-1">
              <li>Opened or used skincare products (unless defective)</li>
              <li>Products purchased on sale or at a discount (unless defective)</li>
              <li>Gift sets that have been partially used</li>
            </ul>
          </PolicySection>

          <PolicySection title="7. Contact">
            <div className="p-4 bg-muted rounded-lg text-sm space-y-1">
              <p>WhatsApp: +27 82 552 6263</p>
              <p>Email: info@advancedskinsolutions.co.za</p>
            </div>
          </PolicySection>
        </div>
      </div>
    </div>
  );
}

export function CookiePolicy() {
  return (
    <div className="min-h-screen py-16">
      <div className="container max-w-3xl">
        <p className="section-label mb-2">Legal</p>
        <h1 className="display-heading text-4xl mb-2">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <PolicySection title="1. What Are Cookies?">
            <p>
              Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, analyse traffic, and enable certain features.
            </p>
          </PolicySection>

          <PolicySection title="2. Cookies We Use">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-medium">Type</th>
                    <th className="text-left p-3 font-medium">Purpose</th>
                    <th className="text-left p-3 font-medium">Provider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">Essential</td>
                    <td className="p-3">Required for website functionality (cart, session)</td>
                    <td className="p-3">Advanced Skin Solutions</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Analytics</td>
                    <td className="p-3">Understand how visitors use our site</td>
                    <td className="p-3">Google Analytics</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Marketing</td>
                    <td className="p-3">Serve relevant ads on Facebook & Instagram</td>
                    <td className="p-3">Meta Pixel</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Preferences</td>
                    <td className="p-3">Remember your settings and preferences</td>
                    <td className="p-3">Advanced Skin Solutions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PolicySection>

          <PolicySection title="3. Google Analytics">
            <p>
              We use Google Analytics to understand how visitors interact with our website. Google Analytics collects anonymised data about your visit, including pages viewed and time spent. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.64_0.065_220)] hover:underline">Google Analytics Opt-out Browser Add-on</a>.
            </p>
          </PolicySection>

          <PolicySection title="4. Meta Pixel (Facebook & Instagram)">
            <p>
              We use the Meta Pixel to measure the effectiveness of our advertising on Facebook and Instagram, and to show you relevant ads. Meta may use this data in accordance with their <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.64_0.065_220)] hover:underline">Data Policy</a>. You can manage your ad preferences at <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.64_0.065_220)] hover:underline">facebook.com/ads/preferences</a>.
            </p>
          </PolicySection>

          <PolicySection title="5. Managing Cookies">
            <p>
              You can control and delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website. For more information on managing cookies, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.64_0.065_220)] hover:underline">allaboutcookies.org</a>.
            </p>
          </PolicySection>

          <PolicySection title="6. Contact">
            <div className="p-4 bg-muted rounded-lg text-sm space-y-1">
              <p>Email: info@advancedskinsolutions.co.za</p>
              <p>WhatsApp: +27 82 552 6263</p>
            </div>
          </PolicySection>
        </div>
      </div>
    </div>
  );
}
