import { PRODUCTS, CONFIG, euro } from '../data'
import Footer from './Footer'

interface ShopViewProps {
  hoverId: string | null
  onHover: (id: string | null) => void
  onOpenProduct: (id: string) => void
  onQuickAdd: (id: string) => void
  onScrollToGrid: () => void
}

export default function ShopView({
  hoverId,
  onHover,
  onOpenProduct,
  onQuickAdd,
  onScrollToGrid,
}: ShopViewProps) {
  return (
    <main>
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: '62px 28px 38px' }}>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 12,
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            color: '#8c867b',
            marginBottom: 22,
          }}
        >
          drop 01 — 05 / ss26 &nbsp;✦&nbsp; los angeles
        </div>
        <h1
          style={{
            fontFamily: "'Archivo Expanded','Archivo',sans-serif",
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '-.02em',
            lineHeight: 0.9,
            margin: 0,
            fontSize: 'clamp(40px,8.5vw,108px)',
          }}
        >
          frische
          <br />
          neue sachen.
        </h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 22,
            marginTop: 30,
          }}
        >
          <p style={{ maxWidth: 520, margin: 0, fontSize: 16, lineHeight: 1.55, color: '#4a463f' }}>
            Fünf garment-dyed Oversized-Drops. Dezenter Front-Print, lautes Statement auf dem Rücken.
            Clean. Loud. Different — für deine Generation.
          </p>
          <button
            onClick={onScrollToGrid}
            className="btn-dark"
            style={{
              background: '#0d0b09',
              color: '#f3f1ec',
              border: 'none',
              padding: '16px 28px',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Drops ansehen ↓
          </button>
        </div>
      </section>

      <div
        id="kr-grid"
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '24px 28px 8px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(20,18,14,.14)',
        }}
      >
        <h2
          style={{
            fontFamily: "'Archivo Expanded','Archivo',sans-serif",
            fontWeight: 800,
            textTransform: 'uppercase',
            fontSize: 'clamp(22px,3vw,34px)',
            letterSpacing: '-.01em',
            margin: 0,
          }}
        >
          Alle Drops
        </h2>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 14, color: '#8c867b' }}>
          ({String(PRODUCTS.length).padStart(2, '0')})
        </span>
      </div>

      <section
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '24px 28px 74px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(290px,1fr))',
          gap: '38px 26px',
        }}
      >
        {PRODUCTS.map((p) => {
          const lifeOpacity = CONFIG.enableHoverSwap && hoverId === p.id ? 1 : 0
          return (
            <article
              key={p.id}
              onClick={() => onOpenProduct(p.id)}
              onMouseEnter={() => CONFIG.enableHoverSwap && onHover(p.id)}
              onMouseLeave={() => CONFIG.enableHoverSwap && onHover(null)}
              style={{ cursor: 'pointer' }}
            >
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  background: '#eae7e0',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={p.back}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: 14,
                  }}
                />
                <img
                  src={p.life}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: lifeOpacity,
                    transition: 'opacity .55s ease',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: 11,
                    left: 11,
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 11,
                    letterSpacing: '.08em',
                    color: '#15120e',
                    background: 'rgba(243,241,236,.85)',
                    padding: '3px 7px',
                  }}
                >
                  {p.num}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onQuickAdd(p.id)
                  }}
                  className="quick-add"
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    right: 12,
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    border: 'none',
                    background: 'rgba(243,241,236,.92)',
                    color: '#15120e',
                    fontSize: 22,
                    lineHeight: 1,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  +
                </button>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 14,
                  marginTop: 14,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "'Archivo Expanded','Archivo',sans-serif",
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      fontSize: 16,
                      letterSpacing: '-.005em',
                      margin: 0,
                    }}
                  >
                    {p.name}
                  </h3>
                  <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                    {p.colors.map((sw, i) => (
                      <span
                        key={i}
                        style={{
                          width: 13,
                          height: 13,
                          borderRadius: '50%',
                          background: sw.hex,
                          boxShadow: '0 0 0 1px rgba(20,18,14,.2)',
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div style={{ fontWeight: 600, fontSize: 15, whiteSpace: 'nowrap' }}>
                  {euro(p.price)}
                </div>
              </div>
            </article>
          )
        })}
      </section>

      <Footer />
    </main>
  )
}
