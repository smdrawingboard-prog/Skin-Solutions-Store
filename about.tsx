/* ============================================================
   About Page — Clinical Luxe Design
   ============================================================ */

import { Link } from 'wouter';
import { ArrowRight, Award, Shield, Truck, Users } from 'lucide-react';

const SCIENCE_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663388859032/58QymucNuQzguuWh2GVEm2/skin-science-bg-F5XCqXbEwvhx22s3S6qxCM.webp';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${SCIENCE_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95" />
        <div className="container relative z-10 max-w-3xl">
          <p className="label-caps mb-3">Our Story</p>
          <h1 className="heading-display text-5xl mb-6" style={{ color: 'oklch(0.24 0.04 230)' }}>
            About Advanced<br />
            <span className="heading-italic" style={{ color: 'oklch(0.64 0.055 160)' }}>Skin Solutions</span>
          </h1>
          <p className="body-sans text-lg leading-relaxed" style={{ color: 'oklch(0.45 0.03 230)' }}>
            Advanced Skin Solutions is a dedicated distributor of premium, science-backed skincare brands across South Africa. We believe that everyone deserves access to clinically proven skincare that delivers real, visible results.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16" style={{ background: 'oklch(0.92 0.018 80)' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="label-caps mb-3">Our Mission</p>
              <h2 className="heading-display text-3xl mb-5" style={{ color: 'oklch(0.24 0.04 230)' }}>Bringing World-Class Skincare to South Africa</h2>
              <p className="body-sans leading-relaxed mb-4" style={{ color: 'oklch(0.45 0.03 230)' }}>
                As an authorised distributor of DermaFix Cosmeceuticals and Heliocare, we bridge the gap between cutting-edge skincare science and South African consumers. Our carefully curated product range addresses the most common skin concerns with clinically proven formulations.
              </p>
              <p className="body-sans leading-relaxed" style={{ color: 'oklch(0.45 0.03 230)' }}>
                We partner exclusively with brands that share our commitment to quality, safety, and efficacy. Every product in our range has been selected for its scientific credibility and proven results.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Award size={24} />, title: 'Authorised Distributor', desc: 'Official distributor for DermaFix and Heliocare in South Africa' },
                { icon: <Shield size={24} />, title: 'Genuine Products', desc: 'Every product is authentic and sourced directly from the brands' },
                { icon: <Truck size={24} />, title: 'Pudo Delivery', desc: 'Reliable nationwide delivery via Pudo courier network' },
                { icon: <Users size={24} />, title: 'Expert Guidance', desc: 'Chat with us via WhatsApp for personalised skincare advice' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border" style={{ borderColor: 'oklch(0.88 0.018 80)' }}>
                  <div className="mb-3" style={{ color: 'oklch(0.64 0.055 160)' }}>{item.icon}</div>
                  <p className="body-sans font-semibold text-sm mb-1" style={{ color: 'oklch(0.24 0.04 230)' }}>{item.title}</p>
                  <p className="body-sans text-xs" style={{ color: 'oklch(0.55 0.03 230)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <p className="label-caps mb-2">Our Brands</p>
            <h2 className="heading-display text-3xl" style={{ color: 'oklch(0.24 0.04 230)' }}>The Brands We Distribute</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* DermaFix */}
            <div className="p-8 rounded-2xl border" style={{ background: '#fff', borderColor: 'oklch(0.88 0.018 80)' }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="body-sans text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'oklch(0.64 0.055 160)', color: '#fff' }}>DermaFix</span>
                <span className="body-sans text-xs" style={{ color: 'oklch(0.55 0.03 230)' }}>South African Cosmeceuticals</span>
              </div>
              <h3 className="heading-serif text-2xl mb-3" style={{ color: 'oklch(0.24 0.04 230)' }}>DermaFix Cosmeceuticals</h3>
              <p className="body-sans text-sm leading-relaxed mb-4" style={{ color: 'oklch(0.45 0.03 230)' }}>
                DermaFix provides advanced skin care products specialising in anti-ageing, hyperpigmentation, acne, scarring, stretch marks, and dry, barrier-impaired skin. Their scientifically advanced products are continuously updated as new technology develops.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {['Anti-Ageing', 'Hyperpigmentation', 'Acne', 'Scarring', 'Dry Skin', 'Barrier Repair'].map(tag => (
                  <span key={tag} className="body-sans text-xs px-2 py-1 rounded" style={{ background: 'oklch(0.92 0.018 80)', color: 'oklch(0.45 0.03 230)' }}>{tag}</span>
                ))}
              </div>
              <a href="https://www.dermafix.co.za" target="_blank" rel="noopener noreferrer"
                className="body-sans text-sm hover:underline flex items-center gap-1" style={{ color: 'oklch(0.64 0.055 160)' }}>
                Visit DermaFix website <ArrowRight size={12} />
              </a>
            </div>

            {/* Heliocare */}
            <div className="p-8 rounded-2xl" style={{ background: 'oklch(0.24 0.04 230)' }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="body-sans text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'oklch(0.73 0.055 65)', color: 'oklch(0.24 0.04 230)' }}>Heliocare</span>
                <span className="body-sans text-xs" style={{ color: 'oklch(0.78 0.04 160)' }}>International Science</span>
              </div>
              <h3 className="heading-serif text-2xl mb-3" style={{ color: '#fff' }}>Heliocare with Fernblock® PLE</h3>
              <p className="body-sans text-sm leading-relaxed mb-4" style={{ color: 'oklch(0.78 0.04 160)' }}>
                Heliocare dietary supplements feature exclusive Fernblock® Polypodium leucotomos extract (PLE) technology. Clinically proven antioxidant properties help protect skin from free radical damage. Vegan, Gluten-Free, and Soy-Free.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {['Vegan', 'Gluten-Free', 'Soy-Free', 'Fernblock® PLE', 'Antioxidant', 'Sun Protection'].map(tag => (
                  <span key={tag} className="body-sans text-xs px-2 py-1 rounded" style={{ background: 'oklch(1 0 0 / 0.1)', color: 'oklch(0.88 0.018 80)' }}>{tag}</span>
                ))}
              </div>
              <a href="https://heliocare.com" target="_blank" rel="noopener noreferrer"
                className="body-sans text-sm hover:underline flex items-center gap-1" style={{ color: 'oklch(0.73 0.055 65)' }}>
                Visit Heliocare website <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'oklch(0.24 0.04 230)' }}>
        <div className="container text-center">
          <h2 className="heading-display text-4xl mb-4" style={{ color: '#fff' }}>
            Ready to Transform Your Skin?
          </h2>
          <p className="body-sans mb-8 max-w-xl mx-auto" style={{ color: 'oklch(0.78 0.04 160)' }}>
            Browse our full range of DermaFix and Heliocare products, or chat with us on WhatsApp for personalised recommendations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/shop" className="btn-sage">
              Shop Now
            </Link>
            <a href="https://wa.me/27825526263" target="_blank" rel="noopener noreferrer"
              className="btn-outline-cream flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
