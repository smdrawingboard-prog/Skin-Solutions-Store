/*
  ============================================================
  Home Page — Advanced Skin Solutions
  Design: Dark Navy Hero · Playfair Display + DM Sans
  Colours: Navy #1B2B3A · Sage #7A9B8A · Tan #C4A882 · Cream #F5F0E8
  ============================================================
*/

import { useState, useMemo } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowRight, Truck, Shield, Award, Star, ChevronRight, Leaf, Sun, Droplets } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import type { Product } from '@/types/product';
import productsData from '@/data/products.json';

const products = productsData as Product[];

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663388859032/58QymucNuQzguuWh2GVEm2/hero-banner-n6h6GJfhK2YSpNxHpcEoJK.webp';
const DERMAFIX_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663388859032/58QymucNuQzguuWh2GVEm2/dermafix-collection-JqWfRRJiZdTC2ZK3ZE86rr.webp';
const HELIOCARE_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663388859032/58QymucNuQzguuWh2GVEm2/heliocare-collection-jc2J2VEm76ueCLWMzKmMRP.webp';
const MODEL_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663388859032/58QymucNuQzguuWh2GVEm2/skin-model-nR4oo6zT4JNaz57d776rxV.webp';

const SKIN_CONCERNS = [
  { label: 'Acne', icon: <Droplets size={22} />, desc: 'Targeted treatments for clearer skin', color: 'oklch(0.64 0.055 160)' },
  { label: 'Ageing', icon: <Star size={22} />, desc: 'Anti-ageing serums and creams', color: 'oklch(0.73 0.055 65)' },
  { label: 'Hyperpigmentation', icon: <Sun size={22} />, desc: 'Brightening and evening solutions', color: 'oklch(0.73 0.055 65)' },
  { label: 'Dry Skin', icon: <Droplets size={22} />, desc: 'Deep hydration and barrier repair', color: 'oklch(0.64 0.055 160)' },
  { label: 'Sensitive Skin', icon: <Leaf size={22} />, desc: 'Gentle, calming formulations', color: 'oklch(0.64 0.055 160)' },
  { label: 'Sun Damage', icon: <Sun size={22} />, desc: 'Protection and repair', color: 'oklch(0.73 0.055 65)' },
];

interface HomeProps {
  onCategoryFilter?: (category: string) => void;
}

export default function Home({ onCategoryFilter }: HomeProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [, navigate] = useLocation();

  const featuredProducts = useMemo(() =>
    products.filter(p => p.image_url).slice(0, 8), []);

  const dermaFixFeatured = useMemo(() =>
    products.filter(p => p.brand === 'DermaFix' && p.image_url).slice(0, 4), []);

  const heliocareProducts = useMemo(() =>
    products.filter(p => p.brand === 'Heliocare'), []);

  const handleConcernClick = (concern: string) => {
    if (onCategoryFilter) onCategoryFilter(concern);
    navigate('/shop');
  };

  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.96 0.012 80)' }}>

      {/* ══════════════════════════════════════════════
          HERO — Dark Navy with radial gradients + dot pattern
      ══════════════════════════════════════════════ */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{ background: 'oklch(0.24 0.04 230)' }}
      >
        {/* Radial gradient layers */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% 50%, oklch(0.32 0.04 230 / 0.8) 0%, transparent 60%),
              radial-gradient(ellipse 50% 80% at 10% 80%, oklch(0.64 0.055 160 / 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 40% 40% at 85% 15%, oklch(0.73 0.055 65 / 0.08) 0%, transparent 50%)
            `
          }}
        />

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

        {/* Hero image — right side, blended */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <img
            src={MODEL_IMG}
            alt="Radiant skin"
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.22, mixBlendMode: 'luminosity' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, oklch(0.24 0.04 230) 0%, transparent 40%, oklch(0.24 0.04 230 / 0.6) 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-24">
          <div className="max-w-2xl">

            {/* Animated badge */}
            <div className="inline-flex items-center gap-2 mb-8 fade-up delay-1">
              <span
                className="badge-animated inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: 'oklch(0.64 0.055 160 / 0.15)',
                  border: '1px solid oklch(0.64 0.055 160 / 0.4)',
                  color: 'oklch(0.78 0.04 160)',
                  fontFamily: "'DM Sans', sans-serif"
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'oklch(0.64 0.055 160)', boxShadow: '0 0 6px oklch(0.64 0.055 160)' }}
                />
                Authorised Distributor · South Africa
              </span>
            </div>

            {/* Headline */}
            <h1
              className="heading-display mb-6 fade-up delay-2"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: 'oklch(0.96 0.012 80)' }}
            >
              Science-Backed<br />
              <span
                className="heading-italic"
                style={{ color: 'oklch(0.73 0.055 65)' }}
              >
                Skin Solutions
              </span>
            </h1>

            <p
              className="body-sans mb-10 leading-relaxed fade-up delay-3"
              style={{ fontSize: '1.125rem', color: 'oklch(0.78 0.025 230)', maxWidth: '36rem' }}
            >
              Premium cosmeceuticals from DermaFix and Heliocare — delivered across South Africa via The Courier Guy.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 fade-up delay-4">
              <Link href="/shop" className="btn-tan">
                Shop Now <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/27825526263"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-cream"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: '#25D366' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat with Us
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-14 fade-up delay-5">
              {[
                { value: '74+', label: 'DermaFix Products' },
                { value: '2', label: 'Premium Brands' },
                { value: 'SA', label: 'Nationwide Delivery' },
              ].map(stat => (
                <div key={stat.label}>
                  <p
                    className="heading-display"
                    style={{ fontSize: '1.75rem', color: 'oklch(0.73 0.055 65)' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="body-sans text-xs tracking-wide"
                    style={{ color: 'oklch(0.65 0.025 230)' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, oklch(0.96 0.012 80))' }}
        />
      </section>

      {/* ══════════════════════════════════════════════
          TRUST BADGES — Sage strip
      ══════════════════════════════════════════════ */}
      <section style={{ background: 'oklch(0.64 0.055 160)' }} className="py-5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Truck size={18} />, title: 'The Courier Guy Delivery', desc: 'Nationwide via The Courier Guy' },
              { icon: <Shield size={18} />, title: 'Authorised Distributor', desc: 'Genuine products only' },
              { icon: <Award size={18} />, title: 'Clinically Tested', desc: 'Science-backed formulas' },
              { icon: <Star size={18} />, title: 'Free Shipping', desc: 'On orders over R1,400' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div style={{ color: 'oklch(0.96 0.012 80)', opacity: 0.9 }}>{item.icon}</div>
                <div>
                  <p className="body-sans text-sm font-semibold" style={{ color: '#fff' }}>{item.title}</p>
                  <p className="body-sans text-xs" style={{ color: 'oklch(0.88 0.02 160)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FEATURED PRODUCTS
      ══════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: 'oklch(0.96 0.012 80)' }}>
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="section-divider" />
              <p className="label-caps mb-2">Bestsellers</p>
              <h2 className="heading-display text-4xl" style={{ color: 'oklch(0.24 0.04 230)' }}>
                Featured Products
              </h2>
            </div>
            <Link
              href="/shop"
              className="body-sans flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
              style={{ color: 'oklch(0.64 0.055 160)' }}
            >
              View all <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onView={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SKIN CONCERNS — Navy background
      ══════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'oklch(0.24 0.04 230)' }}>
        <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 70% at 50% 50%, oklch(0.32 0.04 230 / 0.6) 0%, transparent 70%)'
          }}
        />

        <div className="container relative z-10">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto" />
            <p className="label-caps mb-3" style={{ color: 'oklch(0.73 0.055 65)' }}>Personalised Care</p>
            <h2 className="heading-display text-4xl mb-4" style={{ color: 'oklch(0.96 0.012 80)' }}>
              Shop by Skin Concern
            </h2>
            <p className="body-sans max-w-xl mx-auto" style={{ color: 'oklch(0.65 0.025 230)' }}>
              Find the right products for your specific skin needs, curated from our DermaFix and Heliocare ranges.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SKIN_CONCERNS.map((concern) => (
              <button
                key={concern.label}
                onClick={() => handleConcernClick(concern.label)}
                className="group p-6 rounded-xl text-left transition-all duration-200"
                style={{
                  background: 'oklch(0.32 0.04 230 / 0.5)',
                  border: '1px solid oklch(0.64 0.055 160 / 0.2)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'oklch(0.32 0.04 230 / 0.8)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.64 0.055 160 / 0.5)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'oklch(0.32 0.04 230 / 0.5)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.64 0.055 160 / 0.2)';
                }}
              >
                <div className="mb-3" style={{ color: concern.color }}>{concern.icon}</div>
                <p className="heading-serif text-lg mb-1" style={{ color: 'oklch(0.96 0.012 80)' }}>
                  {concern.label}
                </p>
                <p className="body-sans text-xs" style={{ color: 'oklch(0.65 0.025 230)' }}>
                  {concern.desc}
                </p>
                <div
                  className="flex items-center gap-1 mt-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity body-sans"
                  style={{ color: 'oklch(0.73 0.055 65)' }}
                >
                  Shop now <ChevronRight size={12} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DERMAFIX BRAND SECTION
      ══════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: 'oklch(0.96 0.012 80)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider" />
              <p className="label-caps mb-3">South African Cosmeceuticals</p>
              <h2 className="heading-display text-4xl mb-5" style={{ color: 'oklch(0.24 0.04 230)' }}>
                DermaFix<br />
                <span className="heading-italic" style={{ color: 'oklch(0.64 0.055 160)' }}>Cosmeceuticals</span>
              </h2>
              <p className="body-sans leading-relaxed mb-8" style={{ color: 'oklch(0.40 0.03 230)' }}>
                DermaFix provides advanced skin care products specialising in anti-ageing, hyperpigmentation, acne, scarring, stretch marks, and dry, barrier-impaired skin. Scientifically advanced products updated as new technology develops.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {['Anti-Ageing', 'Hyperpigmentation', 'Acne', 'Dry Skin'].map(tag => (
                  <div key={tag} className="flex items-center gap-2 body-sans text-sm" style={{ color: 'oklch(0.40 0.03 230)' }}>
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'oklch(0.64 0.055 160)' }} />
                    {tag}
                  </div>
                ))}
              </div>
              <Link href="/shop?brand=DermaFix" className="btn-navy">
                Shop DermaFix <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <img
                src={DERMAFIX_IMG}
                alt="DermaFix Collection"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div
                className="absolute -bottom-5 -left-5 rounded-xl shadow-xl p-5 border"
                style={{
                  background: '#fff',
                  borderColor: 'oklch(0.88 0.018 80)'
                }}
              >
                <p className="body-sans text-xs mb-1" style={{ color: 'oklch(0.55 0.03 230)' }}>Products available</p>
                <p className="heading-display text-3xl" style={{ color: 'oklch(0.24 0.04 230)' }}>
                  {products.filter(p => p.brand === 'DermaFix').length}+
                </p>
              </div>
            </div>
          </div>

          {/* DermaFix mini-grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
            {dermaFixFeatured.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onView={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HELIOCARE BRAND SECTION — Cream-dark bg
      ══════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: 'oklch(0.92 0.018 80)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={HELIOCARE_IMG}
                alt="Heliocare Collection"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div
                className="absolute -bottom-5 -right-5 rounded-xl shadow-xl p-5 border"
                style={{ background: '#fff', borderColor: 'oklch(0.88 0.018 80)' }}
              >
                <p className="body-sans text-xs mb-1" style={{ color: 'oklch(0.55 0.03 230)' }}>Fernblock® PLE</p>
                <p className="heading-display text-3xl" style={{ color: 'oklch(0.24 0.04 230)' }}>
                  Clinically Proven
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="section-divider" />
              <p className="label-caps mb-3">International Science</p>
              <h2 className="heading-display text-4xl mb-5" style={{ color: 'oklch(0.24 0.04 230)' }}>
                Heliocare<br />
                <span className="heading-italic" style={{ color: 'oklch(0.73 0.055 65)' }}>with Fernblock® PLE</span>
              </h2>
              <p className="body-sans leading-relaxed mb-8" style={{ color: 'oklch(0.40 0.03 230)' }}>
                Heliocare dietary supplements with exclusive Fernblock® Polypodium leucotomos extract (PLE) technology. Clinically proven antioxidant properties that help protect your skin from free radical damage.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {['Vegan', 'Gluten-Free', 'Soy-Free', 'Dermatologist Recommended'].map(tag => (
                  <div key={tag} className="flex items-center gap-2 body-sans text-sm" style={{ color: 'oklch(0.40 0.03 230)' }}>
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'oklch(0.73 0.055 65)' }} />
                    {tag}
                  </div>
                ))}
              </div>
              <Link href="/shop?brand=Heliocare" className="btn-tan">
                Shop Heliocare <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Heliocare product cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-2xl">
            {heliocareProducts.map(product => (
              <div
                key={product.id}
                className="p-6 rounded-xl border cursor-pointer transition-all hover:shadow-md"
                style={{ background: '#fff', borderColor: 'oklch(0.88 0.018 80)' }}
                onClick={() => setSelectedProduct(product)}
              >
                <p className="heading-serif text-lg mb-2" style={{ color: 'oklch(0.24 0.04 230)' }}>
                  {product.name}
                </p>
                <p className="body-sans text-sm leading-relaxed mb-3" style={{ color: 'oklch(0.50 0.03 230)' }}>
                  {product.description?.slice(0, 100)}...
                </p>
                <p className="price-tag text-xl">R {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          COURIER GUY DELIVERY
      ══════════════════════════════════════════════ */}
      <section className="py-16" style={{ background: 'oklch(0.96 0.012 80)' }}>
        <div className="container">
          <div
            className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl border"
            style={{ background: '#fff', borderColor: 'oklch(0.88 0.018 80)' }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'oklch(0.24 0.04 230)' }}
            >
              <Truck size={28} color="oklch(0.96 0.012 80)" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="heading-serif text-2xl mb-2" style={{ color: 'oklch(0.24 0.04 230)' }}>
                Delivered via The Courier Guy
              </h3>
              <p className="body-sans" style={{ color: 'oklch(0.50 0.03 230)' }}>
                We use The Courier Guy for reliable, affordable delivery across South Africa. Choose door-to-door delivery or use a convenient locker drop-off. Free shipping on orders over R1,400.
              </p>
            </div>
            <a
              href="https://www.courierguy.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy flex-shrink-0"
            >
              Find The Courier Guy Locker <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>



      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
