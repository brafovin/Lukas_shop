import { SIZES, CONFIG, euro, type Gallery, type Product } from '../data'

interface ProductViewProps {
  product: Product
  selColor: number
  selSize: string
  selQty: number
  gallery: Gallery
  openAcc: string | null
  onBack: () => void
  onSelectColor: (i: number) => void
  onSelectSize: (s: string) => void
  onGallery: (g: Gallery) => void
  onDecQty: () => void
  onIncQty: () => void
  onToggleAcc: (k: string) => void
  onAdd: () => void
}

const swatchStyle = (hex: string, act: boolean): React.CSSProperties => ({
  width: 30,
  height: 30,
  borderRadius: '50%',
  cursor: 'pointer',
  background: hex,
  transition: 'box-shadow .15s',
  boxShadow:
    '0 0 0 1px rgba(20,18,14,.2)' + (act ? ', 0 0 0 4px #f3f1ec, 0 0 0 5.5px #15120e' : ''),
})

const sizeStyle = (act: boolean): React.CSSProperties => ({
  minWidth: 54,
  height: 46,
  padding: '0 12px',
  fontFamily: "'Archivo', sans-serif",
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: '.04em',
  cursor: 'pointer',
  transition: 'all .15s',
  border: '1px solid ' + (act ? '#15120e' : 'rgba(20,18,14,.20)'),
  background: act ? '#15120e' : 'transparent',
  color: act ? '#f3f1ec' : '#15120e',
})

const thumbStyle = (act: boolean): React.CSSProperties => ({
  width: 72,
  height: 90,
  objectFit: 'cover',
  cursor: 'pointer',
  background: '#eae7e0',
  transition: 'border-color .15s',
  border: '1px solid ' + (act ? '#15120e' : 'rgba(20,18,14,.14)'),
})

export default function ProductView({
  product: p,
  selColor,
  selSize,
  selQty,
  gallery,
  openAcc,
  onBack,
  onSelectColor,
  onSelectSize,
  onGallery,
  onDecQty,
  onIncQty,
  onToggleAcc,
  onAdd,
}: ProductViewProps) {
  const imgMap: Record<Gallery, string> = { back: p.back, front: p.front, life: p.life }
  const galleryKeys: Gallery[] = ['back', 'front', 'life']

  const acc = [
    {
      key: 'details',
      label: 'Produktdetails',
      body:
        'Oversized Fit, garment-dyed in LA. Großer Print auf dem Rücken, dezentes Logo auf der Brust. Vibe: ' +
        p.vibe,
    },
    {
      key: 'fit',
      label: 'Material & Passform',
      body:
        '100% Baumwolle, 240 g/m². Boxy Oversized Cut – fällt großzügig aus. Für eine schmalere Passform eine Nummer kleiner wählen.',
    },
    {
      key: 'versand',
      label: 'Versand & Rückgabe',
      body:
        'Kostenloser Versand ab ' +
        CONFIG.freeShipThreshold +
        ' €. Lieferung in 2–4 Werktagen. 30 Tage kostenlose Rückgabe.',
    },
  ]

  return (
    <main style={{ maxWidth: 1320, margin: '0 auto', padding: '22px 28px 84px' }}>
      <button
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: "'Space Mono', monospace",
          fontSize: 12,
          letterSpacing: '.04em',
          color: '#8c867b',
          padding: '8px 0',
          marginBottom: 10,
          textTransform: 'lowercase',
        }}
      >
        ← zurück zu allen drops
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 440px', minWidth: 300 }}>
          <div style={{ aspectRatio: '4/5', background: '#eae7e0', overflow: 'hidden' }}>
            <img
              src={imgMap[gallery]}
              style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 24 }}
            />
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
            {galleryKeys.map((k) => (
              <img
                key={k}
                src={imgMap[k]}
                onClick={() => onGallery(k)}
                style={thumbStyle(gallery === k)}
              />
            ))}
          </div>
        </div>
        <div style={{ flex: '1 1 380px', minWidth: 300 }}>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: '#8c867b',
            }}
          >
            drop {p.num}
          </div>
          <h1
            style={{
              fontFamily: "'Archivo Expanded','Archivo',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase',
              fontSize: 'clamp(32px,5vw,52px)',
              lineHeight: 0.96,
              letterSpacing: '-.02em',
              margin: '10px 0 8px',
            }}
          >
            {p.name}
          </h1>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              color: '#4a463f',
              textTransform: 'lowercase',
            }}
          >
            vibe: {p.vibe}
          </div>
          <div style={{ fontSize: 24, fontWeight: 600, margin: '22px 0 26px' }}>
            {euro(p.price)}
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 12 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
              }}
            >
              Farbe
            </span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: '#8c867b' }}>
              {p.colors[selColor].name}
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 28 }}>
            {p.colors.map((c, i) => (
              <span
                key={i}
                onClick={() => onSelectColor(i)}
                title={c.name}
                style={swatchStyle(c.hex, selColor === i)}
              />
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              marginBottom: 12,
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
              }}
            >
              Größe
            </span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: '#8c867b',
                textTransform: 'lowercase',
                cursor: 'pointer',
              }}
            >
              größentabelle
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {SIZES.map((sz) => (
              <button key={sz} onClick={() => onSelectSize(sz)} style={sizeStyle(selSize === sz)}>
                {sz}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(20,18,14,.2)' }}>
              <button
                onClick={onDecQty}
                style={{
                  width: 46,
                  height: 54,
                  background: 'none',
                  border: 'none',
                  fontSize: 18,
                  cursor: 'pointer',
                  color: '#15120e',
                }}
              >
                −
              </button>
              <span style={{ width: 34, textAlign: 'center', fontWeight: 600, fontSize: 15 }}>
                {selQty}
              </span>
              <button
                onClick={onIncQty}
                style={{
                  width: 46,
                  height: 54,
                  background: 'none',
                  border: 'none',
                  fontSize: 18,
                  cursor: 'pointer',
                  color: '#15120e',
                }}
              >
                +
              </button>
            </div>
            <button
              onClick={onAdd}
              className="btn-dark"
              style={{
                flex: 1,
                background: '#0d0b09',
                color: '#f3f1ec',
                border: 'none',
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              In den Warenkorb
            </button>
          </div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: '#8c867b',
              textTransform: 'lowercase',
              marginBottom: 30,
            }}
          >
            ✦ klein vorne. groß hinten. — der print sitzt groß auf dem rücken.
          </div>

          <div style={{ borderTop: '1px solid rgba(20,18,14,.14)' }}>
            {acc.map((a) => {
              const open = openAcc === a.key
              return (
                <div key={a.key} style={{ borderBottom: '1px solid rgba(20,18,14,.14)' }}>
                  <div
                    onClick={() => onToggleAcc(a.key)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '16px 0',
                      cursor: 'pointer',
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: '.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span>{a.label}</span>
                    <span style={{ fontSize: 18, fontWeight: 400, color: '#8c867b' }}>
                      {open ? '−' : '+'}
                    </span>
                  </div>
                  {open && (
                    <p
                      style={{
                        margin: 0,
                        padding: '0 0 18px',
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: '#4a463f',
                        maxWidth: '48ch',
                      }}
                    >
                      {a.body}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
