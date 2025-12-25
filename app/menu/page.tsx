'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { restaurantInfo, menuCategories } from '@/lib/restaurant-data';
import { Button } from '@/components/ui/button';
import { Phone, ArrowLeft, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0].id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const callRestaurant = () => {
    window.location.href = `tel:${restaurantInfo.phone.replace(/\s/g, '')}`;
  };

  const currentCategory = menuCategories.find(cat => cat.id === selectedCategory);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-sm z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-medium tracking-tight text-white">
            Lider BBQ Villa
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center text-sm">
            <Link href="/" className="text-zinc-300 hover:text-red-500 transition">Home</Link>
            <Link href="/menu" className="text-red-500 font-medium">Menu</Link>
            <a href="/#reviews" className="text-zinc-300 hover:text-red-500 transition">Reviews</a>
            <a href="/#contact" className="text-zinc-300 hover:text-red-500 transition">Contact</a>
            <Button
              onClick={callRestaurant}
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Reserveer
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-zinc-950 border-t border-zinc-800 overflow-hidden"
            >
              <nav className="flex flex-col p-6 gap-4">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-white hover:text-red-500 transition py-2"
                >
                  Home
                </Link>
                <Link
                  href="/menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-red-500 font-medium py-2"
                >
                  Menu
                </Link>
                <a
                  href="/#reviews"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-white hover:text-red-500 transition py-2"
                >
                  Reviews
                </a>
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-white hover:text-red-500 transition py-2"
                >
                  Contact
                </a>
                <Button
                  onClick={() => {
                    callRestaurant();
                    setMobileMenuOpen(false);
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white mt-2 w-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Reserveer
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Menu Hero */}
      <section className="pt-32 pb-12 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-sm text-zinc-400 hover:text-red-500 transition mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug
          </Link>

          <div className="max-w-3xl">
            <p className="text-xs font-medium text-red-500 mb-3 tracking-widest uppercase">
              Menukaart
            </p>
            <h1 className="text-5xl md:text-6xl font-light mb-4 text-white">
              Ons Menu
            </h1>
            <p className="text-zinc-400">
              Alle prijzen zijn inclusief BTW • Vragen over allergieën? <a href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`} className="text-red-500 hover:underline font-medium">{restaurantInfo.phone}</a>
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs - Scrollable on Mobile */}
      <section className="sticky top-16 z-40 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-2 py-4 min-w-max md:min-w-0 md:flex-wrap">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap
                  ${selectedCategory === category.id
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-red-500'
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content - Animated */}
      <section className="py-12 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {currentCategory && (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Title */}
                <div className="mb-8">
                  <h2 className="text-3xl font-light text-white">{currentCategory.name}</h2>
                  <p className="text-sm text-zinc-400 mt-1">{currentCategory.items.length} gerechten</p>
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentCategory.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.03 }}
                      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:shadow-md hover:shadow-red-900/20 hover:border-red-900/50 transition-all group"
                    >
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="font-medium text-white group-hover:text-red-500 transition">
                          {item.name}
                        </h3>
                        <span className="text-lg font-medium text-red-500 flex-shrink-0">
                          €{item.price.toFixed(2)}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                      {item.name.toLowerCase().includes('lider schotel') && (
                        <span className="inline-block mt-3 text-xs px-3 py-1 bg-red-600/20 text-red-500 rounded-full">
                          Bestseller
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-10 md:p-14 rounded-2xl text-center shadow-lg">
            <h2 className="text-3xl font-light mb-4">
              Klaar om te bestellen?
            </h2>
            <p className="text-red-100 mb-8 max-w-md mx-auto">
              Bel ons voor reserveringen of kom gezellig langs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-zinc-100"
                onClick={callRestaurant}
              >
                <Phone className="w-4 h-4 mr-2" />
                {restaurantInfo.phone}
              </Button>
              <Button
                size="lg"
                className="bg-zinc-900 text-white hover:bg-zinc-800"
                asChild
              >
                <Link href="/">Terug naar Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Footer */}
      <section className="py-12 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm">
            <div>
              <h3 className="font-medium text-white mb-2">Allergieën</h3>
              <p className="text-zinc-400">
                Heeft u allergieën? Laat het ons weten
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2">100% Halal</h3>
              <p className="text-zinc-400">
                Al ons vlees is halal gecertificeerd
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2">Groepen</h3>
              <p className="text-zinc-400">
                Bel voor groepen vanaf 8 personen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg font-medium text-white mb-2">Lider BBQ Villa</p>
          <p className="text-sm text-zinc-400 mb-4">
            {restaurantInfo.address.street}, {restaurantInfo.address.postcode} {restaurantInfo.address.city}
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/privacy" className="text-xs text-zinc-400 hover:text-red-500 transition">
              Privacyverklaring
            </Link>
          </div>
          <p className="text-xs text-zinc-400">
            © 2025 Lider BBQ Villa. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </div>
  );
}