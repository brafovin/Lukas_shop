// One-off generator for product placeholder images (striped SVG + mono label).
// Run: node scripts/gen-placeholders.mjs   — output goes to public/assets/.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'assets')

const VIEWS = {
  back: 'rückseite',
  front: 'vorderseite',
  life: 'lifestyle',
}

function svg({ category, name, view, life }) {
  const bg = life ? '#ddd9cf' : '#eae7e0'
  const stripe = life ? '#d4cfc3' : '#e1ded5'
  const ink = '#15120e'
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <defs>
    <pattern id="s" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="16" height="16" fill="${bg}"/>
      <rect width="8" height="16" fill="${stripe}"/>
    </pattern>
  </defs>
  <rect width="800" height="1000" fill="url(#s)"/>
  <rect x="44" y="44" width="712" height="912" fill="none" stroke="${ink}" stroke-opacity="0.16" stroke-width="2"/>
  <text x="400" y="452" text-anchor="middle" font-family="'Space Mono',monospace" font-size="22" letter-spacing="6" fill="${ink}" opacity="0.55">${category.toUpperCase()}</text>
  <text x="400" y="512" text-anchor="middle" font-family="'Space Mono',monospace" font-weight="700" font-size="40" fill="${ink}">${name}</text>
  <text x="400" y="560" text-anchor="middle" font-family="'Space Mono',monospace" font-size="22" fill="${ink}" opacity="0.55">${VIEWS[view]}</text>
  <text x="400" y="616" text-anchor="middle" font-family="'Space Mono',monospace" font-size="17" fill="${ink}" opacity="0.4">platzhalter · echtes foto einsetzen</text>
</svg>`
}

const products = [
  { id: 'baggy', category: 'Baggy Hose', name: 'L.A. Baggy' },
  { id: 'tracksuit', category: 'Jogginganzug', name: 'Eastside Set' },
  { id: 'cap', category: 'Cap', name: 'Six-Panel' },
  { id: 'beanie', category: 'Mütze', name: 'Fisherman' },
  { id: 'puffer', category: 'Winterjacke', name: 'Downtown Puffer' },
  { id: 'swim', category: 'Badehose', name: 'Pacific Swim' },
  { id: 'slides', category: 'Badeschlappen', name: 'Venice Slides' },
  { id: 'aktee', category: 'Grafik-Shirt', name: 'AK47 Graphic' },
]

let count = 0
for (const p of products) {
  for (const view of Object.keys(VIEWS)) {
    const file = join(outDir, `${p.id}_${view}.svg`)
    writeFileSync(file, svg({ category: p.category, name: p.name, view, life: view === 'life' }))
    count++
  }
}
console.log(`wrote ${count} placeholder SVGs to ${outDir}`)
