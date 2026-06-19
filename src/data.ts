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
  back: string
  front: string
  life: string
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
  /** Swap the grid image to the lifestyle shot on hover. */
  enableHoverSwap: true,
  /** Size pre-selected on the product page. */
  defaultSize: 'M',
}

export const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export const PRODUCTS: Product[] = [
  {
    id: 'sunset',
    num: '01',
    name: 'Sunset Weapon',
    price: 15,
    vibe: 'golden hour. laid back. dangerous beauty.',
    back: '/assets/p1_back.png',
    front: '/assets/p1_front.png',
    life: '/assets/p1_life.png',
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
    back: '/assets/p2_back.png',
    front: '/assets/p2_front.png',
    life: '/assets/p2_life.png',
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
    back: '/assets/p3_back.png',
    front: '/assets/p3_front.png',
    life: '/assets/p3_life.png',
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
    back: '/assets/p4_back.png',
    front: '/assets/p4_front.png',
    life: '/assets/p4_life.png',
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
    back: '/assets/p5_back.png',
    front: '/assets/p5_front.png',
    life: '/assets/p5_life.png',
    colors: [
      { name: 'Burgundy', hex: '#4e2b30' },
      { name: 'Violet', hex: '#6b5a72' },
      { name: 'Ash Grey', hex: '#8d8a86' },
      { name: 'Chrome', hex: '#b7b4b0' },
      { name: 'Off White', hex: '#efe9dd' },
    ],
  },
]

export const euro = (n: number): string =>
  (Math.round(n * 100) / 100).toFixed(2).replace('.', ',') + ' €'

export const byId = (id: string): Product =>
  PRODUCTS.find((p) => p.id === id)!
