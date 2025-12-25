'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { restaurantInfo, features } from '@/lib/restaurant-data';
import { googleReviews } from '@/lib/reviews-data';
import { Button } from '@/components/ui/button';
import {
  Phone,
  MapPin,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  Flame,
  Beef,
  Home,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

export default function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [reviewsRef, reviewsApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const scrollPrev = () => reviewsApi?.scrollPrev();
  const scrollNext = () => reviewsApi?.scrollNext();

  const callRestaurant = () => {
    window.location.href = `tel:${restaurantInfo.phone.replace(/\s/g, '')}`;
  };

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

  const topDishes = [
    { name: 'Lider Schotel', price: '€70', desc: 'Mix grill voor 2 personen', tag: 'Bestseller' },
    { name: 'Adana Kebab', price: '€21', desc: 'Gekruid gehakt van de grill', tag: 'Pittig' },
    { name: 'İskender', price: '€22.50', desc: 'Döner met yoghurt & tomatensaus', tag: 'Klassiek' }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Minimalist Header */}
      <header className="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-md z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-medium tracking-tight text-white">
            Lider <span className="text-red-500">BBQ</span> Villa
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center text-sm">
            <Link href="/" className="text-zinc-300 hover:text-red-500 transition">Home</Link>
            <Link href="/menu" className="text-zinc-300 hover:text-red-500 transition">Menu</Link>
            <a href="#reviews" className="text-zinc-300 hover:text-red-500 transition">Reviews</a>
            <a href="#contact" className="text-zinc-300 hover:text-red-500 transition">Contact</a>
            <Button
              onClick={callRestaurant}
              size="sm"
              className="bg-white hover:bg-zinc-100 text-zinc-950 font-medium"
            >
              {restaurantInfo.phone}
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
                  className="text-lg text-white hover:text-red-500 transition py-2"
                >
                  Menu
                </Link>
                <a
                  href="#reviews"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-white hover:text-red-500 transition py-2"
                >
                  Reviews
                </a>
                <a
                  href="#contact"
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
                  {restaurantInfo.phone}
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero - Clean & Minimal */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1280&q=75&auto=format"
            alt="Restaurant interior"
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AvNi7Z0+20+K+u7GCW8upXlkkdAxLEnA6Pp9n0avTt7TiqoNNtgqjAHhXgClKiZ2Y+TM4ibP/2Q=="
          />
          {/* Premium gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950/90" />
          {/* Subtle red accent glow */}
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-sm md:text-base font-medium text-red-500 mb-6 tracking-widest uppercase">
              Authentieke Turkse BBQ
            </p>

            <h1 className="text-7xl sm:text-8xl md:text-9xl font-light tracking-tight mb-8 leading-none text-white">
              Lider<br />
              <span className="font-medium text-red-600">BBQ Villa</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-200 mb-10 max-w-2xl leading-relaxed">
              De smaak van Turkije, midden in Rotterdam. Vers bereid, met liefde geserveerd.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button
                size="lg"
                asChild
                className="bg-red-600 hover:bg-red-700 text-white text-base h-14 px-8"
              >
                <Link href="/menu">Bekijk Menu</Link>
              </Button>
              <Button
                size="lg"
                onClick={callRestaurant}
                className="bg-white text-zinc-950 hover:bg-zinc-100 text-base h-14 px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                {restaurantInfo.phone}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {features.map((feature, i) => {
              const IconComponent =
                feature.icon === 'flame' ? Flame :
                feature.icon === 'beef' ? Beef :
                feature.icon === 'home' ? Home :
                CheckCircle2;

              return (
                <div key={i} className="flex items-center gap-2">
                  <IconComponent className="w-4 h-4 text-red-500" strokeWidth={2} />
                  <span className="text-zinc-400 text-sm">{feature.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Over Ons */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/lidereten.webp"
                alt="Lider BBQ Villa - Authentieke Turkse BBQ schotel met gegrild vlees"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
                Authentieke Turkse <span className="text-red-500">BBQ</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Bij Lider BBQ Villa serveren we authentieke Turkse gerechten, vers bereid door onze ervaren koks. Van de beroemde Lider Schotel tot klassieke İskender - proef de echte smaak van Turkije in Rotterdam.
              </p>

              <Button
                size="lg"
                asChild
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Link href="/menu">Bekijk Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Gerechten - Swipeable */}
      <section className="pt-12 pb-24 bg-zinc-950 relative">
        {/* Decorative line */}
        <div className="absolute top-0 left-0 right-0 gradient-line" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-sm font-medium text-red-500 mb-2 tracking-wide uppercase">
                Onze Klassiekers
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-white">Populaire Gerechten</h2>
            </div>
            <Button size="sm" asChild className="hidden md:flex bg-red-600 text-white hover:bg-red-700">
              <Link href="/menu">Volledig Menu</Link>
            </Button>
          </div>

          {/* Swipeable on mobile, grid on desktop */}
          <div className="overflow-hidden md:hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {topDishes.map((dish, i) => (
                <div key={i} className="flex-[0_0_80%] min-w-0">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs px-2 py-1 bg-red-600/10 text-red-400 rounded-full">{dish.tag}</span>
                      <span className="text-lg font-semibold text-white">{dish.price}</span>
                    </div>
                    <h3 className="text-base font-medium text-white">{dish.name}</h3>
                    <p className="text-sm text-zinc-400 mt-1">{dish.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {topDishes.map((dish, i) => (
              <div
                key={i}
                className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-500/30 transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs px-2 py-1 bg-red-600/10 text-red-400 rounded-full">{dish.tag}</span>
                  <span className="text-xl font-semibold text-white">{dish.price}</span>
                </div>
                <h3 className="text-lg font-medium mb-1 text-white">{dish.name}</h3>
                <p className="text-sm text-zinc-400">{dish.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button asChild className="w-full bg-red-600 text-white hover:bg-red-700">
              <Link href="/menu">Volledig Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews - Elfsight Google Reviews Widget */}
      <section id="reviews" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-2 text-white">
              Wat Onze Gasten Zeggen
            </h2>
            <p className="text-zinc-400">
              Echte reviews van Google
            </p>
          </div>
          <div className="elfsight-app-8aa0ee3d-653d-473e-b4c1-f0884e2d66f6" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* Contact - Clean Layout */}
      <section id="contact" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-4xl font-light mb-8 text-white">Bezoek Ons</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1 text-white">Adres</h3>
                    <p className="text-zinc-400 text-sm">
                      {restaurantInfo.address.street}<br />
                      {restaurantInfo.address.postcode} {restaurantInfo.address.city}
                    </p>
                    <a
                      href={restaurantInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-red-500 hover:underline mt-2 inline-block"
                    >
                      Open in Maps →
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1 text-white">Telefoon</h3>
                    <a
                      href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
                      className="text-zinc-400 hover:text-red-500 text-sm"
                    >
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-3 text-white">Openingstijden</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Ma - Do</span>
                        <span className="font-medium text-white">09:00 - 22:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Vr - Za</span>
                        <span className="font-medium text-white">09:00 - 23:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Zondag</span>
                        <span className="font-medium text-white">09:00 - 22:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-12 rounded-2xl flex flex-col justify-center shadow-lg">
              <h3 className="text-3xl font-light mb-4">
                Reserveer Je Tafel
              </h3>
              <p className="text-red-100 mb-8">
                Bel ons om te reserveren of kom gewoon langs
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-red-600 hover:bg-zinc-100"
                onClick={callRestaurant}
              >
                <Phone className="w-4 h-4 mr-2" />
                Bel Nu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg font-medium mb-2 text-white">Lider BBQ Villa</p>
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