export interface Color {
  name: string
  hex: string
}

export interface Product {
  id: string
  num: string
  name: string
  price: number
  vibe: string
  /** Optional product-detail copy; falls back to a generic tee description. */
  desc?: string
  /** Optional material/fit copy; falls back to a generic tee fit. */
  fit?: string
  back: string
  front: string
  life: string
  /** Optional custom size run (e.g. One Size, shoe sizes). Defaults to clothing sizes. */
  sizes?: string[]
  colors: Color[]
}

export type Gallery = 'back' | 'front' | 'life'

export type View = 'shop' | 'product' | 'checkout' | 'confirm'

export interface CartLine {
  key: string
  id: string
  colorIdx: number
  size: string
  qty: number
}

/** Configurable knobs — these were exposed as editor props in the original design. */
export const CONFIG = {
  /** Free shipping kicks in at this order subtotal (€). */
  freeShipThreshold: 80,
  /** Size pre-selected on the product page when available. */
  defaultSize: 'M',
}

export const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const A = (name: string) => `/assets/${name}.png`

export const PRODUCTS: Product[] = [
  {
    id: 'sunset',
    num: '01',
    name: 'Sunset Weapon',
    price: 15,
    vibe: 'golden hour. laid back. dangerous beauty.',
    back: A('p1_back'),
    front: A('p1_front'),
    life: A('p1_life'),
    colors: [
      { name: 'Washed Black', hex: '#2c2926' },
      { name: 'Sunset Pink', hex: '#d98f8c' },
      { name: 'Apricot', hex: '#e0a777' },
      { name: 'Sand', hex: '#cbb48f' },
      { name: 'Off White', hex: '#efe9dd' },
    ],
  },
  {
    id: 'angels',
    num: '02',
    name: 'City Of Angels',
    price: 15,
    vibe: 'skyline dreams. concrete royalty.',
    back: A('p2_back'),
    front: A('p2_front'),
    life: A('p2_life'),
    colors: [
      { name: 'Faded Charcoal', hex: '#3b3a3a' },
      { name: 'Chrome Grey', hex: '#9b9a9c' },
      { name: 'Smoke', hex: '#c6c3bd' },
      { name: 'Off White', hex: '#efe9dd' },
      { name: 'Black', hex: '#161514' },
    ],
  },
  {
    id: 'palm',
    num: '03',
    name: 'Palm Heat',
    price: 15,
    vibe: 'west coast classic. heat in the streets.',
    back: A('p3_back'),
    front: A('p3_front'),
    life: A('p3_life'),
    colors: [
      { name: 'Vintage White', hex: '#efe9dd' },
      { name: 'Olive', hex: '#595b3d' },
      { name: 'Sage', hex: '#8f9777' },
      { name: 'Tan', hex: '#c9aa7d' },
      { name: 'Off Black', hex: '#1f1f1c' },
    ],
  },
  {
    id: 'ammo',
    num: '04',
    name: 'West Coast Ammo',
    price: 15,
    vibe: "built different. reppin' the coast.",
    back: A('p4_back'),
    front: A('p4_front'),
    life: A('p4_life'),
    colors: [
      { name: 'Faded Olive', hex: '#555a3b' },
      { name: 'Khaki', hex: '#9a9067' },
      { name: 'Bone', hex: '#e4ddca' },
      { name: 'Black', hex: '#161514' },
      { name: 'Off White', hex: '#efe9dd' },
    ],
  },
  {
    id: 'midnight',
    num: '05',
    name: 'Midnight Boulevard',
    price: 15,
    vibe: 'late nights. city lights. own the boulevard.',
    back: A('p5_back'),
    front: A('p5_front'),
    life: A('p5_life'),
    colors: [
      { name: 'Burgundy', hex: '#4e2b30' },
      { name: 'Violet', hex: '#6b5a72' },
      { name: 'Ash Grey', hex: '#8d8a86' },
      { name: 'Chrome', hex: '#b7b4b0' },
      { name: 'Off White', hex: '#efe9dd' },
    ],
  },
  {
    id: 'pants',
    num: '06',
    name: 'Baggy Pants',
    price: 15,
    vibe: 'baggy fit. washed denim. west coast walk.',
    desc: 'Baggy Fit, washed Denim. Großer Side-Print, dezentes Logo. Lässt sich zu allem stylen.',
    fit: '100% Baumwoll-Denim. Extraweiter Baggy Cut – fällt großzügig aus. Verstellbarer Kordelzug am Bund.',
    back: A('pants_back'),
    front: A('pants_front'),
    life: A('pants_life'),
    colors: [
      { name: 'Washed Black', hex: '#2c2926' },
      { name: 'Vintage Grey', hex: '#6b6864' },
      { name: 'Sand', hex: '#cbb48f' },
    ],
  },
  {
    id: 'tracksuit',
    num: '07',
    name: 'Sunset Suit',
    price: 15,
    vibe: 'matching set. sunset tones. von kopf bis fuß.',
    desc: 'Komplettes Set: Jacke + Hose. Großer Skyline-Print hinten, West-Coast-Streifen seitlich.',
    fit: 'Weicher French-Terry-Mix. Relaxed Fit. Jacke mit Stehkragen & Zip, Hose mit elastischem Bund.',
    back: A('track_back'),
    front: A('track_front'),
    life: A('track_life'),
    colors: [
      { name: 'Cream', hex: '#e9e2d2' },
      { name: 'Off Black', hex: '#20201e' },
      { name: 'Burgundy', hex: '#4e2b30' },
    ],
  },
  {
    id: 'cap',
    num: '08',
    name: 'Skyline Cap',
    price: 5,
    vibe: 'low profile. clean stitch. daily flex.',
    desc: 'Low-Profile Dad-Cap. LA-Stitch vorne, Palme seitlich, KRAASEN hinten. Garment-dyed.',
    fit: '100% Baumwolle. Verstellbarer Metallverschluss hinten. One Size.',
    sizes: ['One Size'],
    back: A('cap_front'),
    front: A('cap_back'),
    life: A('cap_back'),
    colors: [
      { name: 'Olive', hex: '#555a3b' },
      { name: 'Black', hex: '#161514' },
      { name: 'Bone', hex: '#e4ddca' },
    ],
  },
  {
    id: 'beanie',
    num: '09',
    name: 'Palm Beanie',
    price: 5,
    vibe: 'cozy knit. palm patch. cold city nights.',
    desc: 'Gerippte Strickmütze mit Umschlag. KRAASEN-Stitch & Palme auf der Krempe.',
    fit: 'Weicher Acryl-Strick. Dehnbar, One Size. Wärmt an kalten City-Nights.',
    sizes: ['One Size'],
    back: A('beanie'),
    front: A('beanie'),
    life: A('beanie'),
    colors: [
      { name: 'Black', hex: '#161514' },
      { name: 'Olive', hex: '#555a3b' },
      { name: 'Bone', hex: '#e4ddca' },
    ],
  },
  {
    id: 'jacket',
    num: '10',
    name: 'Heights Puffer',
    price: 15,
    vibe: 'puffer warmth. heights ready. built for winter.',
    desc: 'Gefütterte Puffer-Jacke mit Kapuze. Großer Skyline-Print hinten, LA-Stitch vorne.',
    fit: 'Wattierte Steppjacke, wasserabweisend. Regular Fit. Zwei Seitentaschen, durchgehender Zip.',
    back: A('jacket_back'),
    front: A('jacket_front'),
    life: A('jacket_life'),
    colors: [
      { name: 'Olive', hex: '#4f5338' },
      { name: 'Black', hex: '#161514' },
      { name: 'Bone', hex: '#e4ddca' },
    ],
  },
  {
    id: 'shorts',
    num: '11',
    name: 'Coast Shorts',
    price: 10,
    vibe: 'quick dry. sunset print. pool to street.',
    desc: 'Swim Shorts mit Sunset-Allover-Print. Mesh-Futter, Zip-Pocket, Kordelzug.',
    fit: 'Quick-Dry Mikrofaser, leicht. Mesh-Innenfutter. Elastischer Bund mit Kordel.',
    back: A('shorts_back'),
    front: A('shorts_front'),
    life: A('shorts_back'),
    colors: [
      { name: 'Burgundy', hex: '#4e2b30' },
      { name: 'Off Black', hex: '#20201e' },
      { name: 'Sand', hex: '#cbb48f' },
    ],
  },
  {
    id: 'slides',
    num: '12',
    name: 'Pool Slides',
    price: 10,
    vibe: 'easy slide. all black. kraasen sole.',
    desc: 'All-Black Pool-Slides. Gold-Print auf dem Riemen, KRAASEN-Profilsohle.',
    fit: 'Weiches EVA, leicht & wasserfest. Konturierte Sohle. Fällt normal aus.',
    sizes: ['40', '41', '42', '43', '44', '45'],
    back: A('slides'),
    front: A('slides'),
    life: A('slides'),
    colors: [
      { name: 'Black', hex: '#161514' },
      { name: 'Bone', hex: '#e4ddca' },
    ],
  },
  {
    id: 'force',
    num: '13',
    name: 'LA Sunset Force',
    price: 50,
    vibe: 'luxury x west coast. iconic. clean. la soul.',
    desc: 'Air Force 1 Low. Cremiges Premium-Leder, LA-Skyline & Palmen-Print, KRAASEN-Branding.',
    fit: 'Echtleder-Obermaterial, gepolsterte Air-Sohle. Fällt normal aus – bei halben Größen eine Nummer kleiner.',
    sizes: ['39', '40', '41', '42', '43', '44', '45', '46'],
    back: A('snk_force_side'),
    front: A('snk_force_top'),
    life: A('snk_force_sole'),
    colors: [
      { name: 'Cream', hex: '#ece4d2' },
      { name: 'Tan', hex: '#c9b08a' },
      { name: 'Taupe', hex: '#b6a48e' },
      { name: 'Grey', hex: '#b7b7b3' },
      { name: 'Charcoal', hex: '#4a4540' },
    ],
  },
  {
    id: 'tn',
    num: '14',
    name: 'City Pulse TN',
    price: 99.99,
    vibe: 'fast x electric. dynamic. aggressive. city energy.',
    desc: 'Tuned-Air TN Runner. Sunset-Gradient mit Skyline & Palmen, sichtbare Air-Einheit.',
    fit: 'Mesh- & Synthetik-Obermaterial, Tuned-Air-Dämpfung. Fällt normal aus.',
    sizes: ['39', '40', '41', '42', '43', '44', '45', '46'],
    back: A('snk_tn_side'),
    front: A('snk_tn_top'),
    life: A('snk_tn_sole'),
    colors: [
      { name: 'Black', hex: '#161514' },
      { name: 'Plum', hex: '#5b2d44' },
      { name: 'Orange', hex: '#d4702a' },
      { name: 'Amber', hex: '#e8a24a' },
    ],
  },
  {
    id: 'shox',
    num: '15',
    name: 'Boulevard Shox',
    price: 120,
    vibe: 'street x sunset. bold. performance. west coast.',
    desc: 'Shox Runner mit Sunset-Print. Sichtbare Shox-Säulen für Performance & Style.',
    fit: 'Synthetik-Obermaterial, Shox-Dämpfung. Fällt eher schmal aus – eine Nummer größer wählen.',
    sizes: ['39', '40', '41', '42', '43', '44', '45', '46'],
    back: A('snk_shox_side'),
    front: A('snk_shox_top'),
    life: A('snk_shox_sole'),
    colors: [
      { name: 'Black', hex: '#161514' },
      { name: 'Burgundy', hex: '#4e2b30' },
      { name: 'Rust', hex: '#a0563a' },
      { name: 'Sand', hex: '#d8c3a3' },
    ],
  },
  {
    id: 'airmax',
    num: '16',
    name: 'West Coast Air Max',
    price: 120,
    vibe: 'clean x iconic. timeless. versatile. la staple.',
    desc: 'Air Max 90 Silhouette. Multi-Material-Mix, LA-Print, sichtbare Max-Air-Einheit.',
    fit: 'Leder- & Mesh-Mix, Max-Air-Dämpfung. Fällt normal aus.',
    sizes: ['39', '40', '41', '42', '43', '44', '45', '46'],
    back: A('snk_airmax_side'),
    front: A('snk_airmax_top'),
    life: A('snk_airmax_sole'),
    colors: [
      { name: 'Black', hex: '#161514' },
      { name: 'Grey', hex: '#6f6f6f' },
      { name: 'Light Grey', hex: '#c2c0bb' },
      { name: 'Tan', hex: '#c9b08a' },
    ],
  },
]

export const euro = (n: number): string =>
  (Math.round(n * 100) / 100).toFixed(2).replace('.', ',') + ' €'

export const byId = (id: string): Product => PRODUCTS.find((p) => p.id === id)!

export const sizesFor = (p: Product): string[] => p.sizes ?? SIZES

export const defSizeFor = (p: Product): string => {
  const ss = sizesFor(p)
  return ss.includes(CONFIG.defaultSize) ? CONFIG.defaultSize : ss[Math.floor(ss.length / 2)]
}
