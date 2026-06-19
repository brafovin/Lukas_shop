// Generates clean flat-illustration product art (front / back / life) for the
// newer catalog items, replacing the striped placeholders at the same paths.
// Stylized brand illustrations — swap for real photography when available.
// Run: node scripts/gen-product-art.mjs
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'assets')

const OUTLINE = 'rgba(20,18,14,.55)'
const SEAM = 'rgba(255,255,255,.30)'

// --- garment drawings (centered on an 800x1000 canvas) ---
const tee = (f) => `
  <path d="M300 300 L362 262 Q400 298 438 262 L500 300 L592 352 L548 458 L506 432 L506 772 L294 772 L294 432 L252 458 L208 352 Z" fill="${f}" stroke="${OUTLINE}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M362 262 Q400 298 438 262" fill="none" stroke="${SEAM}" stroke-width="3"/>`

const baggy = (f) => `
  <path d="M300 280 L500 280 L520 770 L424 770 L400 470 L376 770 L280 770 Z" fill="${f}" stroke="${OUTLINE}" stroke-width="3" stroke-linejoin="round"/>
  <line x1="300" y1="318" x2="500" y2="318" stroke="${SEAM}" stroke-width="3"/>
  <line x1="400" y1="296" x2="400" y2="470" stroke="${SEAM}" stroke-width="2"/>`

const trackJacket = (f) => `
  <path d="M300 300 L368 272 L432 272 L500 300 L588 356 L546 466 L506 442 L506 786 L294 786 L294 442 L254 466 L212 356 Z" fill="${f}" stroke="${OUTLINE}" stroke-width="3" stroke-linejoin="round"/>
  <line x1="400" y1="300" x2="400" y2="786" stroke="${SEAM}" stroke-width="3"/>
  <path d="M368 272 L400 300 L432 272" fill="none" stroke="${SEAM}" stroke-width="3"/>`

const cap = (f) => `
  <path d="M250 506 a152 150 0 0 1 304 0 Z" fill="${f}" stroke="${OUTLINE}" stroke-width="3"/>
  <path d="M540 506 Q664 510 706 556 L560 552 Q548 528 540 506 Z" fill="${f}" stroke="${OUTLINE}" stroke-width="3" stroke-linejoin="round"/>
  <line x1="402" y1="358" x2="402" y2="506" stroke="${SEAM}" stroke-width="2"/>`

const beanie = (f) => `
  <path d="M286 528 a116 140 0 0 1 232 0 Z" fill="${f}" stroke="${OUTLINE}" stroke-width="3"/>
  <rect x="280" y="512" width="244" height="58" rx="14" fill="${f}" stroke="${OUTLINE}" stroke-width="3"/>
  <line x1="306" y1="541" x2="498" y2="541" stroke="${SEAM}" stroke-width="2"/>`

const puffer = (f) => {
  let q = ''
  for (let y = 372; y <= 744; y += 62) q += `<line x1="300" y1="${y}" x2="506" y2="${y}" stroke="${SEAM}" stroke-width="3"/>`
  return `
  <path d="M306 312 L372 286 L428 286 L494 312 L560 366 L540 432 L506 416 L506 784 L294 784 L294 416 L260 432 L240 366 Z" fill="${f}" stroke="${OUTLINE}" stroke-width="3" stroke-linejoin="round"/>
  ${q}
  <line x1="400" y1="312" x2="400" y2="784" stroke="${OUTLINE}" stroke-width="3" opacity="0.5"/>
  <path d="M372 286 L400 312 L428 286" fill="none" stroke="${SEAM}" stroke-width="3"/>`
}

const swim = (f) => `
  <path d="M300 320 L500 320 L512 500 L424 500 L400 430 L376 500 L288 500 Z" fill="${f}" stroke="${OUTLINE}" stroke-width="3" stroke-linejoin="round"/>
  <line x1="300" y1="356" x2="500" y2="356" stroke="${SEAM}" stroke-width="3"/>
  <path d="M388 330 L388 352 M412 330 L412 352" stroke="${SEAM}" stroke-width="3"/>`

const slides = (f) => {
  const one = (cx) => `
    <rect x="${cx - 70}" y="636" width="140" height="60" rx="30" fill="${f}" stroke="${OUTLINE}" stroke-width="3"/>
    <path d="M${cx - 58} 636 q58 -48 116 0" fill="none" stroke="${f}" stroke-width="34" stroke-linecap="round"/>
    <path d="M${cx - 58} 636 q58 -48 116 0" fill="none" stroke="${OUTLINE}" stroke-width="3"/>`
  return one(312) + one(488)
}

const ITEMS = {
  baggy: { fill: '#6c7689', draw: baggy },
  tracksuit: { fill: '#9b9893', draw: trackJacket },
  cap: { fill: '#2b3142', draw: cap },
  beanie: { fill: '#5a3338', draw: beanie },
  puffer: { fill: '#5b6040', draw: puffer },
  swim: { fill: '#2b3142', draw: swim },
  slides: { fill: '#2f2e2c', draw: slides },
  aktee: { fill: '#1d1c1a', draw: tee },
}

function frame(inner, { life = false, back = false, fill }) {
  const bg = life ? '#e4ddd1' : '#eae7e0'
  const halo = life
    ? `<circle cx="400" cy="520" r="260" fill="${fill}" opacity="0.12"/>`
    : ''
  // a subtle back-print marker for the reverse view
  const print = back
    ? `<rect x="338" y="372" width="124" height="150" rx="6" fill="${SEAM}"/>
       <rect x="338" y="372" width="124" height="150" rx="6" fill="none" stroke="${OUTLINE}" stroke-width="2" stroke-dasharray="7 7"/>`
    : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <rect width="800" height="1000" fill="${bg}"/>
  ${halo}
  ${inner}
  ${print}
  <text x="400" y="900" text-anchor="middle" font-family="'Permanent Marker',cursive" font-size="30" fill="${OUTLINE}">Los Angeles</text>
</svg>`
}

let count = 0
for (const [id, { fill, draw }] of Object.entries(ITEMS)) {
  const art = draw(fill)
  writeFileSync(join(outDir, `${id}_front.svg`), frame(art, { fill }))
  writeFileSync(join(outDir, `${id}_back.svg`), frame(art, { fill, back: true }))
  writeFileSync(join(outDir, `${id}_life.svg`), frame(art, { fill, life: true }))
  count += 3
}
console.log(`wrote ${count} product illustrations to ${outDir}`)
