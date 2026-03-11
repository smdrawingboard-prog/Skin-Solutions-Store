/* ============================================================
   App.tsx — Advanced Skin Solutions
   Brand: Steel Slate · Taupe · Charcoal · Cream
   Routes: Home, Shop, About, Contact + all compliance pages
   ============================================================ */

import { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch } from 'wouter';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import { ShippingPolicy, ReturnsPolicy, CookiePolicy } from './pages/Policies';
import NotFound from './pages/NotFound';

function AppLayout() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    setActiveCategory('All');
  };

  const handleCategoryFilter = (cat: string) => {
    setActiveCategory(cat);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/">
            <Home onCategoryFilter={handleCategoryFilter} />
          </Route>
          <Route path="/shop">
            <Shop
              searchQuery={searchQuery}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/shipping-policy">
            <ShippingPolicy />
          </Route>
          <Route path="/returns">
            <ReturnsPolicy />
          </Route>
          <Route path="/cookie-policy">
            <CookiePolicy />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <AppLayout />
          </TooltipProvider>
        </CartProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
