/* ============================================================
   Contact Page — Clinical Luxe Design
   ============================================================ */

import { useState } from 'react';
import { Phone, Mail, MessageCircle, Truck, Clock, MapPin } from 'lucide-react';

const WHATSAPP_NUMBER = '27825526263';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hi! My name is ${formData.name || 'a customer'}. ${formData.message || 'I have an enquiry.'}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsApp();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-16" style={{ background: 'oklch(0.96 0.012 80)' }}>
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <p className="label-caps mb-2">Get in Touch</p>
          <h1 className="heading-display text-4xl mb-4" style={{ color: 'oklch(0.24 0.04 230)' }}>Contact Us</h1>
          <p className="body-sans max-w-xl" style={{ color: 'oklch(0.45 0.03 230)' }}>
            Have a question about our products or need personalised skincare advice? We're here to help via WhatsApp, email, or our contact form.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <div className="p-6 rounded-xl border" style={{ background: '#fff', borderColor: 'oklch(0.88 0.018 80)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#25D366' }}>
                  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="body-sans font-semibold mb-1" style={{ color: 'oklch(0.24 0.04 230)' }}>WhatsApp (Preferred)</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="body-sans text-sm hover:underline"
                    style={{ color: 'oklch(0.64 0.055 160)' }}
                  >
                    +27 82 552 6263
                  </a>
                  <p className="body-sans text-xs mt-1" style={{ color: 'oklch(0.55 0.03 230)' }}>
                    Chat with us for product advice, orders, and delivery queries
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-xl border" style={{ background: '#fff', borderColor: 'oklch(0.88 0.018 80)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'oklch(0.64 0.055 160)' }}>
                  <Mail size={20} color="white" />
                </div>
                <div>
                  <p className="body-sans font-semibold mb-1" style={{ color: 'oklch(0.24 0.04 230)' }}>Email</p>
                  <a
                    href="mailto:info@advancedskinsolutions.co.za"
                    className="body-sans text-sm hover:underline"
                    style={{ color: 'oklch(0.64 0.055 160)' }}
                  >
                    info@advancedskinsolutions.co.za
                  </a>
                  <p className="body-sans text-xs mt-1" style={{ color: 'oklch(0.55 0.03 230)' }}>We respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Delivery */}
            <div className="p-6 rounded-xl border" style={{ background: '#fff', borderColor: 'oklch(0.88 0.018 80)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'oklch(0.92 0.018 80)' }}>
                  <Truck size={20} style={{ color: 'oklch(0.64 0.055 160)' }} />
                </div>
                <div>
                  <p className="body-sans font-semibold mb-1" style={{ color: 'oklch(0.24 0.04 230)' }}>Delivery via Pudo</p>
                  <p className="body-sans text-sm mb-2" style={{ color: 'oklch(0.55 0.03 230)' }}>
                    We deliver nationwide via Pudo courier. Choose locker-to-locker or door delivery.
                  </p>
                  <a
                    href="https://www.pudo.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="body-sans text-xs hover:underline"
                    style={{ color: 'oklch(0.64 0.055 160)' }}
                  >
                    Find your nearest Pudo locker →
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-xl border" style={{ background: '#fff', borderColor: 'oklch(0.88 0.018 80)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'oklch(0.92 0.018 80)' }}>
                  <Clock size={20} style={{ color: 'oklch(0.64 0.055 160)' }} />
                </div>
                <div>
                  <p className="body-sans font-semibold mb-2" style={{ color: 'oklch(0.24 0.04 230)' }}>Business Hours</p>
                  <div className="body-sans text-sm space-y-1" style={{ color: 'oklch(0.55 0.03 230)' }}>
                    <div className="flex justify-between gap-8">
                      <span>Monday – Friday</span>
                      <span>08:00 – 17:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Saturday</span>
                      <span>09:00 – 13:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center p-8 rounded-xl border" style={{ background: '#fff', borderColor: 'oklch(0.88 0.018 80)' }}>
                <div>
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" fill="#25D366" className="w-8 h-8">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <h3 className="heading-serif text-2xl mb-2" style={{ color: 'oklch(0.24 0.04 230)' }}>Opening WhatsApp</h3>
                  <p className="body-sans text-sm" style={{ color: 'oklch(0.55 0.03 230)' }}>
                    Your message has been prepared. Complete your enquiry via WhatsApp.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 body-sans text-sm hover:underline"
                    style={{ color: 'oklch(0.64 0.055 160)' }}
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-xl border space-y-5" style={{ background: '#fff', borderColor: 'oklch(0.88 0.018 80)' }}>
                <div>
                  <p className="label-caps mb-1">Send a Message</p>
                  <h2 className="heading-serif text-2xl" style={{ color: 'oklch(0.24 0.04 230)' }}>We'd love to hear from you</h2>
                </div>

                <div>
                  <label className="block body-sans text-sm font-medium mb-1.5" style={{ color: 'oklch(0.35 0.03 230)' }}>Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-2.5 rounded-lg body-sans text-sm focus:outline-none"
                    style={{ background: 'oklch(0.96 0.012 80)', border: '1px solid oklch(0.88 0.018 80)', color: 'oklch(0.24 0.04 230)' }}
                  />
                </div>

                <div>
                  <label className="block body-sans text-sm font-medium mb-1.5" style={{ color: 'oklch(0.35 0.03 230)' }}>Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-lg body-sans text-sm focus:outline-none"
                    style={{ background: 'oklch(0.96 0.012 80)', border: '1px solid oklch(0.88 0.018 80)', color: 'oklch(0.24 0.04 230)' }}
                  />
                </div>

                <div>
                  <label className="block body-sans text-sm font-medium mb-1.5" style={{ color: 'oklch(0.35 0.03 230)' }}>Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                    placeholder="+27 82 000 0000"
                    className="w-full px-4 py-2.5 rounded-lg body-sans text-sm focus:outline-none"
                    style={{ background: 'oklch(0.96 0.012 80)', border: '1px solid oklch(0.88 0.018 80)', color: 'oklch(0.24 0.04 230)' }}
                  />
                </div>

                <div>
                  <label className="block body-sans text-sm font-medium mb-1.5" style={{ color: 'oklch(0.35 0.03 230)' }}>Message</label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    placeholder="Tell us about your skin concerns or the products you're interested in..."
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg body-sans text-sm focus:outline-none resize-none"
                    style={{ background: 'oklch(0.96 0.012 80)', border: '1px solid oklch(0.88 0.018 80)', color: 'oklch(0.24 0.04 230)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg body-sans font-medium text-white transition-all duration-200"
                  style={{ background: '#25D366' }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send via WhatsApp
                </button>

                <p className="body-sans text-xs text-center" style={{ color: 'oklch(0.60 0.025 230)' }}>
                  Clicking "Send via WhatsApp" will open WhatsApp with your message pre-filled
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
