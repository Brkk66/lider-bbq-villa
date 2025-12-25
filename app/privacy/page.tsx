import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacyverklaring',
  description: 'Privacyverklaring van Lider BBQ Villa - Hoe wij omgaan met uw persoonsgegevens.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-sm z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="text-lg font-medium tracking-tight text-white">
            Lider <span className="text-red-500">BBQ</span> Villa
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-sm text-zinc-400 hover:text-red-500 transition mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar home
          </Link>

          <h1 className="text-4xl font-light mb-8 text-white">Privacyverklaring</h1>

          <div className="prose prose-invert prose-zinc max-w-none">
            <p className="text-zinc-300 mb-6">
              Laatst bijgewerkt: december 2025
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">1. Wie zijn wij?</h2>
              <p className="text-zinc-400 leading-relaxed">
                Lider BBQ Villa is gevestigd aan de Oudedijk 222B, 3061 AT Rotterdam.
                Wij zijn verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">2. Welke gegevens verzamelen wij?</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Wij verzamelen alleen gegevens die u zelf aan ons verstrekt, bijvoorbeeld wanneer u:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Telefonisch een reservering maakt</li>
                <li>Contact met ons opneemt via telefoon</li>
                <li>Ons restaurant bezoekt</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">3. Cookies</h2>
              <p className="text-zinc-400 leading-relaxed">
                Deze website maakt alleen gebruik van technisch noodzakelijke cookies.
                Wij gebruiken geen tracking cookies of analytics die uw gedrag volgen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">4. Bewaartermijn</h2>
              <p className="text-zinc-400 leading-relaxed">
                Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk is om de doelen te realiseren
                waarvoor uw gegevens worden verzameld.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">5. Uw rechten</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                U heeft het recht om:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Uw persoonsgegevens in te zien</li>
                <li>Uw persoonsgegevens te corrigeren</li>
                <li>Uw persoonsgegevens te laten verwijderen</li>
                <li>Bezwaar te maken tegen de verwerking</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">6. Contact</h2>
              <p className="text-zinc-400 leading-relaxed">
                Heeft u vragen over deze privacyverklaring of over hoe wij met uw gegevens omgaan?
                Neem dan contact met ons op via telefoon: <a href="tel:0102037269" className="text-red-500 hover:underline">010 203 7269</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg font-medium text-white mb-2">Lider BBQ Villa</p>
          <p className="text-sm text-zinc-400 mb-1">
            Oudedijk 222B, 3061 AT Rotterdam
          </p>
          <p className="text-xs text-zinc-400">
            © 2025 Lider BBQ Villa. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </div>
  );
}
