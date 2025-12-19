export const restaurantInfo = {
  name: "Lider BBQ Villa",
  tagline: "Authentieke Turkse BBQ Experience",
  description: "Proef de echte smaken van Anatolië in het hart van Rotterdam",
  phone: "010 203 7269",
  email: "info@liderbbqvilla.nl",
  address: {
    street: "Oudedijk 222B",
    city: "Rotterdam",
    postcode: "3061 AT",
    country: "Nederland"
  },
  openingHours: {
    monday: { open: "16:00", close: "23:00" },
    tuesday: { open: "16:00", close: "23:00" },
    wednesday: { open: "16:00", close: "23:00" },
    thursday: { open: "16:00", close: "23:00" },
    friday: { open: "16:00", close: "00:00" },
    saturday: { open: "14:00", close: "00:00" },
    sunday: { open: "14:00", close: "23:00" }
  },
  social: {
    instagram: "@restaurantlider",
    instagramUrl: "https://www.instagram.com/restaurantlider/",
    facebook: "liderbbqvilla"
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Oudedijk+222B+Rotterdam"
};

export const menuCategories = [
  {
    id: 'pasta',
    name: 'Pasta',
    items: [
      { name: 'Pasta Polo (kip)', price: 16.50, description: 'Heerlijke pasta met malse kip' },
      { name: 'Pasta met gehakt', price: 16.50, description: 'Klassieke pasta met gekruid gehakt' },
      { name: 'Pasta met groenten / tomaat', price: 16.50, description: 'Vegetarische pasta met verse groenten' },
      { name: 'Pasta met garnalen', price: 17.50, description: 'Luxe pasta met sappige garnalen' },
    ]
  },
  {
    id: 'steak',
    name: 'Steak',
    items: [
      { name: 'T-Bone', price: 35.50, description: '(malse ossenhaasstukkjes)' },
      { name: 'Rib Eye', price: 35.50, description: 'Premium rib eye steak' },
      { name: 'Dallas steak', price: 35.50, description: 'Amerikaanse stijl steak' },
      { name: 'Spare Ribs', price: 32.50, description: 'Malse spare ribs van de grill' },
    ]
  },
  {
    id: 'hoofdgerechten',
    name: 'Hoofdgerechten',
    items: [
      { name: 'Ossenhaas', price: 35.50, description: 'Premium ossenhaas van de grill' },
      { name: 'Lamskoteletten', price: 32.50, description: 'Gegrilde lamskoteletten' },
      { name: 'Şiş kebab (spies)', price: 30.00, description: 'Traditionele kebab spies' },
      { name: 'Adana kebab', price: 21.00, description: 'Pittig gehakt van de grill' },
      { name: 'Köfte', price: 21.00, description: 'Turkse gehaktballetjes' },
      { name: 'Kippenvleugels', price: 22.50, description: 'Krokante kippenvleugels' },
      { name: 'Lever', price: 21.00, description: 'Gegrilde lever' },
      { name: 'Lamstoofpot (tandir)', price: 32.50, description: 'Langzaam gegaarde lamsschotel' },
      { name: 'Beyti kebab (gerolde kebab)', price: 22.50, description: 'Gerolde kebab in lavash' },
      { name: 'Döner', price: 20.00, description: 'Klassieke döner kebab' },
      { name: 'İskender', price: 22.50, description: 'Döner met tomatensaus en yoghurt' },
      { name: 'Lamsvlees aan spies', price: 27.50, description: 'Malse lamsspies' },
      { name: 'Lider schotel', price: 70.00, description: '1p = €35 / 2p = €70.00' },
      { name: 'Kebab met champignons saus', price: 26.50, description: 'Kebab overgoten met romige champignonsaus' },
    ]
  },
  {
    id: 'pangerechten',
    name: 'Pan gerechten',
    items: [
      { name: 'Sac kavurma (et sote)', price: 26.00, description: 'Gebakken vlees met groenten' },
      { name: 'Sac kavurma (met rijst)', price: 28.00, description: 'Gebakken vlees met groenten en rijst' },
      { name: 'Tavuk sote', price: 25.00, description: 'Gebakken kip met groenten' },
      { name: 'Tavuk sote met rijst', price: 27.00, description: 'Gebakken kip met groenten en rijst' },
    ]
  },
  {
    id: 'visgerechten',
    name: 'Visgerechten',
    items: [
      { name: 'Dorade (çupra)', price: 32.50, description: 'Hele dorade van de grill' },
      { name: '* Zeebaars (levrek)', price: 32.50, description: 'Hele zeebaars van de grill' },
      { name: '* Zalm', price: 32.50, description: 'Gegrilde zalm filet' },
      { name: '* Garnalen', price: 16.95, description: 'Gebakken of uit de oven, groot/klein' },
    ]
  },
  {
    id: 'voorgerechten',
    name: 'Warme Voorgerechten',
    items: [
      { name: 'Gevulde champignons', price: 7.50, description: 'Met kaas gevulde champignons' },
      { name: 'Garnalen uit de oven', price: 16.95, description: 'Ovenschotel met garnalen' },
      { name: 'Sigarenbroodjes (filodeegrolletjes) - 4 stuks', price: 9.00, description: 'Krokante filodeeg rolletjes' },
      { name: 'Gevulde lider kip (uit köfte) - 2 stuks', price: 9.00, description: 'Speciale gevulde kip' },
      { name: 'Gebakken inktvis (klein/groot)', price: 11.50, description: 'Krokante calamares' },
    ]
  },
  {
    id: 'mezze',
    name: 'Mezze',
    items: [
      { name: 'Cacık', price: 5.50, description: 'Yoghurt met komkommer en knoflook' },
      { name: 'Haydari (yoghurt-knoflookdip)', price: 6.50, description: 'Dikke yoghurt met knoflook' },
      { name: 'Pittige Antep dip', price: 5.50, description: 'Pittige paprika dip' },
      { name: 'Hummus', price: 5.50, description: 'Kikkererwten puree' },
      { name: 'Pembe Sultan (rode biet/yoghurt)', price: 5.50, description: 'Bietensalade met yoghurt' },
      { name: 'Gevulde paprika met pistache', price: 6.50, description: 'Gevulde pepers' },
      { name: 'Çoban salade (herderssalade)', price: 6.50, description: 'Turkse salade' },
      { name: 'Russische salade', price: 5.50, description: 'Russische aardappelsalade' },
      { name: 'Girit ezmesi (kruidenkaas)', price: 5.50, description: 'Kruidige kaas spread' },
      { name: 'Aubergine met yoghurt', price: 5.50, description: 'Gegrilde aubergine met yoghurt' },
      { name: 'Atom (pittige yoghurt)', price: 5.50, description: 'Pikante yoghurt dip' },
      { name: 'Gevulde wijnbladeren met olijfolie', price: 5.50, description: 'Dolma' },
      { name: 'Çerkez tavuğu (kip met walnoten)', price: 6.50, description: 'Circassische kip' },
      { name: 'Acılı ezme (pittige tomatensalade)', price: 5.50, description: 'Pikante tomaten spread' },
    ]
  },
  {
    id: 'dranken',
    name: 'Dranken',
    items: [
      { name: 'AA', price: 3.50 },
      { name: 'Cola Zero', price: 3.00 },
      { name: 'Coca Cola', price: 3.00 },
      { name: 'Fanta', price: 3.00 },
      { name: 'Cassis', price: 3.00 },
      { name: 'Fristi', price: 3.50 },
      { name: 'Chocomel', price: 3.50 },
      { name: 'Sinas appel', price: 3.50 },
      { name: 'Water spa blauw', price: 3.00 },
      { name: 'Spa rood', price: 3.00 },
      { name: 'Sprite', price: 3.00 },
      { name: 'Ginger ale', price: 3.50 },
      { name: 'Ayran', price: 2.50 },
      { name: 'Uludağ (şan beyaz)', price: 3.00 },
      { name: 'Tonic', price: 3.00 },
      { name: 'Kışşey (limoen, sade, karpuz, çilek)', price: 3.00 },
      { name: 'Fuse tea alle smaken', price: 3.50 },
      { name: 'Grote fles spa blauw', price: 7.50 },
      { name: 'Grote fles spa rood', price: 7.50 },
    ]
  },
  {
    id: 'linzensoep',
    name: 'Soepen',
    items: [
      { name: 'Ezogelin / Linzensoep', price: 7.00, description: 'Traditionele linzensoep' },
      { name: 'Soep van de dag', price: 7.50, description: 'Vraag naar onze dagsoep' },
    ]
  }
];

export const features = [
  {
    title: "Authentieke Smaken",
    description: "Traditionele Turkse BBQ met moderne twist",
    icon: "flame"
  },
  {
    title: "Verse Ingrediënten",
    description: "Dagelijks verse producten van lokale leveranciers",
    icon: "beef"
  },
  {
    title: "Gezellige Sfeer",
    description: "Warm en uitnodigend restaurant voor elk moment",
    icon: "home"
  },
  {
    title: "Halal Gecertificeerd",
    description: "Al ons vlees is 100% halal",
    icon: "check-circle"
  }
];