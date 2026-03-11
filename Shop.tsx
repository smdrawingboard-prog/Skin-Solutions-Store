/* ============================================================
   Shop Page — Clinical Luxe Design
   Full product catalog with filters, search, and sorting
   ============================================================ */

import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Filter, X, ChevronDown, SlidersHorizontal } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import type { Product } from '@/types/product';
import { CATEGORIES, SKIN_CONCERNS } from '@/types/product';
import productsData from '@/data/products.json';

const products = productsData as Product[];

interface ShopProps {
  searchQuery?: string;
  activeCategory?: string;
  onCategoryChange?: (cat: string) => void;
}

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

function parsePrice(priceStr: string): number {
  if (!priceStr) return 0;
  const num = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
  return isNaN(num) ? 0 : num;
}

export default function Shop({ searchQuery = '', activeCategory = 'All', onCategoryChange }: ShopProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [localCategory, setLocalCategory] = useState(activeCategory);
  const [brandFilter, setBrandFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [showFilters, setShowFilters] = useState(false);
  const [, location] = useLocation();

  // Sync with parent category
  useEffect(() => {
    setLocalCategory(activeCategory);
  }, [activeCategory]);

  // Parse URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const brand = params.get('brand');
    if (brand) setBrandFilter(brand);
  }, []);

  const handleCategoryChange = (cat: string) => {
    setLocalCategory(cat);
    if (onCategoryChange) onCategoryChange(cat);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Brand filter
    if (brandFilter !== 'All') {
      result = result.filter(p => p.brand === brandFilter);
    }

    // Category filter
    if (localCategory !== 'All') {
      result = result.filter(p => {
        const cat = p.category?.toLowerCase() || '';
        const type = p.product_type?.toLowerCase() || '';
        const tags = p.tags?.join(' ').toLowerCase() || '';
        const concerns = p.skin_concerns?.toLowerCase() || '';
        const searchTerm = localCategory.toLowerCase();
        return cat.includes(searchTerm) || type.includes(searchTerm) ||
               tags.includes(searchTerm) || concerns.includes(searchTerm);
      });
    }

    // Search filter
    if (localSearch.trim()) {
      const q = localSearch.toLowerCase();
      result = result.filter(p =>
        p.name?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.ingredients?.toLowerCase().includes(q) ||
        p.skin_concerns?.toLowerCase().includes(q) ||
        p.sku?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case 'price-desc':
        result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return result;
  }, [brandFilter, localCategory, localSearch, sortBy]);

  const activeFiltersCount = [
    brandFilter !== 'All',
    localCategory !== 'All',
    localSearch.trim() !== '',
  ].filter(Boolean).length;

  const clearFilters = () => {
    setBrandFilter('All');
    handleCategoryChange('All');
    setLocalSearch('');
    setSortBy('default');
  };

  return (
    <div className="min-h-screen py-8" style={{ background: 'oklch(0.96 0.012 80)' }}>
      <div className="container">
        {/* Page header */}
        <div className="mb-8">
          <p className="label-caps mb-2">Our Products</p>
          <h1 className="heading-display text-4xl mb-2" style={{ color: 'oklch(0.24 0.04 230)' }}>
            {localCategory !== 'All' ? localCategory :
             brandFilter !== 'All' ? `${brandFilter} Products` :
             'All Products'}
          </h1>
          <p className="body-sans text-sm" style={{ color: 'oklch(0.55 0.03 230)' }}>
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6 pb-6" style={{ borderBottom: '1px solid oklch(0.88 0.018 80)' }}>
          {/* Search */}
          <div className="relative flex-1 min-w-48">
            <input
              type="text"
              value={localSearch}
              onChange={e => setLocalSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-4 pr-10 py-2.5 rounded-lg body-sans text-sm focus:outline-none"
              style={{ background: 'oklch(0.92 0.018 80)', color: 'oklch(0.24 0.04 230)', border: '1px solid oklch(0.88 0.018 80)' }}
            />
            {localSearch && (
              <button onClick={() => setLocalSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X size={14} style={{ color: 'oklch(0.55 0.03 230)' }} />
              </button>
            )}
          </div>

          {/* Brand filter */}
          <div className="flex gap-2">
            {['All', 'DermaFix', 'Heliocare'].map(brand => (
              <button
                key={brand}
                onClick={() => setBrandFilter(brand)}
                className="px-4 py-2 rounded-lg body-sans text-sm font-medium transition-colors"
                style={{
                  background: brandFilter === brand ? 'oklch(0.24 0.04 230)' : 'oklch(0.92 0.018 80)',
                  color: brandFilter === brand ? '#fff' : 'oklch(0.45 0.03 230)'
                }}
              >
                {brand}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as SortOption)}
              className="appearance-none pl-3 pr-8 py-2.5 rounded-lg body-sans text-sm focus:outline-none cursor-pointer"
              style={{ background: 'oklch(0.92 0.018 80)', color: 'oklch(0.24 0.04 230)', border: '1px solid oklch(0.88 0.018 80)' }}
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A–Z</option>
              <option value="name-desc">Name: Z–A</option>
            </select>
            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'oklch(0.55 0.03 230)' }} />
          </div>

          {/* Filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg body-sans text-sm font-medium transition-colors"
            style={{
              background: showFilters ? 'oklch(0.24 0.04 230)' : 'oklch(0.92 0.018 80)',
              color: showFilters ? '#fff' : 'oklch(0.45 0.03 230)'
            }}
          >
            <SlidersHorizontal size={14} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-4 h-4 bg-white/30 rounded-full text-[10px] flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {activeFiltersCount > 0 && (
            <button onClick={clearFilters} className="body-sans text-sm hover:underline" style={{ color: 'oklch(0.64 0.055 160)' }}>
              Clear all
            </button>
          )}
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          {showFilters && (
            <aside className="w-56 flex-shrink-0">
              {/* Categories */}
              <div className="mb-6">
                <p className="label-caps mb-3">Category</p>
                <div className="space-y-1">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className="block w-full text-left px-3 py-1.5 rounded body-sans text-sm transition-colors"
                      style={{
                        background: localCategory === cat ? 'oklch(0.64 0.055 160 / 0.1)' : 'transparent',
                        color: localCategory === cat ? 'oklch(0.64 0.055 160)' : 'oklch(0.45 0.03 230)',
                        fontWeight: localCategory === cat ? '600' : '400'
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skin concerns */}
              <div>
                <p className="label-caps mb-3">Skin Concern</p>
                <div className="space-y-1">
                  {SKIN_CONCERNS.map(concern => (
                    <button
                      key={concern}
                      onClick={() => handleCategoryChange(concern)}
                      className="block w-full text-left px-3 py-1.5 rounded body-sans text-sm transition-colors"
                      style={{
                        background: localCategory === concern ? 'oklch(0.64 0.055 160 / 0.1)' : 'transparent',
                        color: localCategory === concern ? 'oklch(0.64 0.055 160)' : 'oklch(0.45 0.03 230)',
                        fontWeight: localCategory === concern ? '600' : '400'
                      }}
                    >
                      {concern}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="heading-serif text-2xl mb-2" style={{ color: 'oklch(0.55 0.03 230)' }}>No products found</p>
                <p className="body-sans text-sm mb-4" style={{ color: 'oklch(0.60 0.025 230)' }}>Try adjusting your filters or search term</p>
                <button onClick={clearFilters} className="btn-navy text-sm">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onView={setSelectedProduct}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
