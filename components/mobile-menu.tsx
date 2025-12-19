'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { restaurantInfo } from '@/lib/restaurant-data';

export function MobileMenu() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden fixed top-4 right-4 z-50 bg-zinc-900/90 backdrop-blur-sm"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-zinc-950 border-zinc-800">
        <SheetHeader>
          <SheetTitle className="text-yellow-500">
            {restaurantInfo.name}
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8 flex flex-col space-y-4">
          <button
            onClick={() => scrollToSection('home')}
            className="text-left text-lg hover:text-yellow-500 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className="text-left text-lg hover:text-yellow-500 transition-colors"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection('specialiteiten')}
            className="text-left text-lg hover:text-yellow-500 transition-colors"
          >
            Specialiteiten
          </button>
          <button
            onClick={() => scrollToSection('locatie')}
            className="text-left text-lg hover:text-yellow-500 transition-colors"
          >
            Locatie
          </button>
        </nav>

        <div className="mt-12 space-y-4 text-sm text-zinc-400">
          <div className="flex items-start gap-3">
            <Phone className="h-4 w-4 mt-1 text-yellow-500" />
            <div>
              <p className="text-white">{restaurantInfo.phone}</p>
              <p className="text-xs">Reserveer telefonisch</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 mt-1 text-yellow-500" />
            <div>
              <p className="text-white">{restaurantInfo.address.street}</p>
              <p>{restaurantInfo.address.postcode} {restaurantInfo.address.city}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-4 w-4 mt-1 text-yellow-500" />
            <div>
              <p className="text-white">Vandaag Open</p>
              <p>
                {new Date().getHours() < 16 ? 'Vanaf 16:00' :
                 new Date().getHours() < 23 ? 'Tot 23:00' : 'Gesloten'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="h-4 w-4 mt-1 text-yellow-500" />
            <div>
              <p className="text-white">{restaurantInfo.email}</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 right-6">
          <Button
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
            onClick={() => window.open('tel:' + restaurantInfo.phone.replace(/\s/g, ''))}
          >
            Reserveer Nu
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}