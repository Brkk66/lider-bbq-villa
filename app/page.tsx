'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';

export default function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [reviewsRef, reviewsApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const scrollPrev = () => reviewsApi?.scrollPrev();
  const scrollNext = () => reviewsApi?.scrollNext();

  const callRestaurant = () => {
    window.location.href = `tel:${restaurantInfo.phone.replace(/\s/g, '')}`;
  };

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
            Lider BBQ Villa
          </Link>

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
        </div>
      </header>

      {/* Hero - Clean & Minimal */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-zinc-950/70" />
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
                variant="outline"
                onClick={callRestaurant}
                className="border-2 border-white text-white hover:bg-white hover:text-zinc-950 text-base h-14 px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                {restaurantInfo.phone}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features - Minimal Cards */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, i) => {
              const IconComponent =
                feature.icon === 'flame' ? Flame :
                feature.icon === 'beef' ? Beef :
                feature.icon === 'home' ? Home :
                CheckCircle2;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-red-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-medium mb-2 text-white">{feature.title}</h3>
                  <p className="text-sm text-zinc-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Over Ons */}
      <section className="pt-24 pb-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <img
                src="/images/lidereten.webp"
                alt="Lider BBQ Villa - Authentieke Turkse BBQ schotel met gegrild vlees"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium text-red-500 mb-3 tracking-wide uppercase">
                Over Ons
              </p>
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
                De Smaak van <span className="text-red-500">Anatolië</span>
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Bij Lider BBQ Villa serveren we authentieke Turkse gerechten met een moderne twist.
                  Onze passie voor kwaliteit en traditie komt samen in elk gerecht dat we maken.
                </p>
                <p>
                  Van de grill tot aan je tafel - elk ingrediënt wordt dagelijks vers bereid door
                  onze ervaren koks. We gebruiken alleen de beste producten en traditionele recepten
                  die van generatie op generatie zijn doorgegeven.
                </p>
                <p>
                  Of je nu komt voor onze beroemde Lider Schotel, een klassieke İskender, of een
                  van onze andere specialiteiten - bij ons proef je de echte smaak van Turkije,
                  midden in Rotterdam.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Link href="/menu">Ontdek Ons Menu</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Gerechten - Swipeable */}
      <section className="pt-12 pb-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-sm font-medium text-red-500 mb-2 tracking-wide uppercase">
                Onze Klassiekers
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-white">Populaire Gerechten</h2>
            </div>
            <Button variant="outline" size="sm" asChild className="hidden md:flex border-red-600 text-red-500 hover:bg-red-600 hover:text-white">
              <Link href="/menu">Volledig Menu</Link>
            </Button>
          </div>

          {/* Swipeable on mobile, grid on desktop */}
          <div className="overflow-hidden md:hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {topDishes.map((dish, i) => (
                <div key={i} className="flex-[0_0_85%] min-w-0">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:shadow-lg hover:shadow-red-900/20 transition">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs px-3 py-1 bg-red-600/20 text-red-500 rounded-full">{dish.tag}</span>
                      <span className="text-2xl font-medium text-red-500">{dish.price}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-white">{dish.name}</h3>
                    <p className="text-sm text-zinc-400">{dish.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {topDishes.map((dish, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:shadow-lg hover:shadow-red-900/20 transition">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs px-3 py-1 bg-red-600/20 text-red-500 rounded-full">{dish.tag}</span>
                  <span className="text-2xl font-medium text-red-500">{dish.price}</span>
                </div>
                <h3 className="text-xl font-medium mb-2 text-white">{dish.name}</h3>
                <p className="text-sm text-zinc-400">{dish.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button variant="outline" asChild className="w-full border-red-600 text-red-500 hover:bg-red-600 hover:text-white">
              <Link href="/menu">Volledig Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews - Swipeable Carousel */}
      <section id="reviews" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-2 text-white">
              {googleReviews.averageRating} Sterren
            </h2>
            <p className="text-zinc-400">
              {googleReviews.totalReviews} Google Reviews
            </p>
          </div>

          {/* Reviews Carousel */}
          <div className="relative">
            <div className="overflow-hidden" ref={reviewsRef}>
              <div className="flex gap-6">
                {googleReviews.reviews.map((review) => (
                  <div key={review.id} className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-medium">
                          {review.author.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm text-white">{review.author}</h4>
                          <div className="flex gap-0.5 mt-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-red-500 text-red-500" />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-zinc-500">{review.date}</span>
                      </div>
                      <p className="text-sm text-zinc-300 leading-relaxed">{review.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-2 justify-center mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                className="rounded-full border-zinc-700 text-zinc-300 hover:bg-zinc-800"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                className="rounded-full border-zinc-700 text-zinc-300 hover:bg-zinc-800"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
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
                        <span className="font-medium text-white">16:00 - 23:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Vrijdag</span>
                        <span className="font-medium text-white">16:00 - 00:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Za - Zo</span>
                        <span className="font-medium text-white">14:00 - 23:00</span>
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
          <p className="text-sm text-zinc-400 mb-1">
            {restaurantInfo.address.street}, {restaurantInfo.address.postcode} {restaurantInfo.address.city}
          </p>
          <p className="text-xs text-zinc-500">
            © 2024 Lider BBQ Villa. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </div>
  );
}