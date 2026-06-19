import type { DisplayLine } from '../App'

interface Totals {
  subtotalFmt: string
  shippingFmt: string
  totalFmt: string
  shipMsg: string
}

interface CartDrawerProps {
  open: boolean
  lines: DisplayLine[]
  cartCount: number
  totals: Totals
  onClose: () => void
  onCheckout: () => void
}

export default function CartDrawer({
  open,
  lines,
  cartCount,
  totals,
  onClose,
  onCheckout,
}: CartDrawerProps) {
  const empty = lines.length === 0

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(13,11,9,.45)',
          zIndex: 50,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity .3s',
        }}
      />
      <aside
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100%',
          width: 'min(420px,100%)',
          background: '#f3f1ec',
          zIndex: 60,
          display: 'flex',
          flexDirection: 'column',
          transform: `translateX(${open ? '0%' : '105%'})`,
          transition: 'transform .35s cubic-bezier(.4,0,.1,1)',
          boxShadow: '-12px 0 40px rgba(0,0,0,.12)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '22px 24px',
            borderBottom: '1px solid rgba(20,18,14,.14)',
          }}
        >
          <span
            style={{
              fontFamily: "'Archivo Expanded','Archivo',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase',
              fontSize: 18,
            }}
          >
            Warenkorb ({cartCount})
          </span>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 22,
              cursor: 'pointer',
              color: '#15120e',
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        {empty ? (
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              padding: 40,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 13,
                color: '#8c867b',
                textTransform: 'lowercase',
              }}
            >
              dein warenkorb ist leer.
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: '1px solid rgba(20,18,14,.22)',
                padding: '12px 20px',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Weiter shoppen
            </button>
          </div>
        ) : (
          <>
            <div style={{ flex: 1, overflowY: 'auto', padding: '6px 24px' }}>
              {lines.map((l) => (
                <div
                  key={l.key}
                  style={{
                    display: 'flex',
                    gap: 14,
                    padding: '18px 0',
                    borderBottom: '1px solid rgba(20,18,14,.1)',
                  }}
                >
                  <img
                    src={l.img}
                    style={{
                      width: 64,
                      height: 80,
                      objectFit: 'cover',
                      background: '#eae7e0',
                      flex: 'none',
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                      <span
                        style={{
                          fontFamily: "'Archivo Expanded','Archivo',sans-serif",
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          fontSize: 14,
                        }}
                      >
                        {l.name}
                      </span>
                      <button
                        onClick={l.onRemove}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#8c867b',
                          fontSize: 14,
                          lineHeight: 1,
                        }}
                      >
                        ✕
                      </button>
                    </div>
                    <div
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 11,
                        color: '#8c867b',
                        textTransform: 'lowercase',
                        marginTop: 4,
                      }}
                    >
                      {l.colorName} · {l.size}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 12,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(20,18,14,.2)' }}>
                        <button
                          onClick={l.onDec}
                          style={{
                            width: 30,
                            height: 30,
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: 15,
                            color: '#15120e',
                          }}
                        >
                          −
                        </button>
                        <span style={{ width: 26, textAlign: 'center', fontSize: 13, fontWeight: 600 }}>
                          {l.qty}
                        </span>
                        <button
                          onClick={l.onInc}
                          style={{
                            width: 30,
                            height: 30,
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: 15,
                            color: '#15120e',
                          }}
                        >
                          +
                        </button>
                      </div>
                      <span style={{ fontWeight: 600, fontSize: 14 }}>{l.lineFmt}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                borderTop: '1px solid rgba(20,18,14,.14)',
                padding: '20px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  textTransform: 'lowercase',
                  color: '#4a463f',
                  textAlign: 'center',
                  background: 'rgba(20,18,14,.05)',
                  padding: 9,
                }}
              >
                {totals.shipMsg}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                <span style={{ color: '#8c867b' }}>Zwischensumme</span>
                <span style={{ fontWeight: 600 }}>{totals.subtotalFmt}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                <span style={{ color: '#8c867b' }}>Versand</span>
                <span style={{ fontWeight: 600 }}>{totals.shippingFmt}</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 17,
                  fontWeight: 700,
                  borderTop: '1px solid rgba(20,18,14,.14)',
                  paddingTop: 10,
                  marginTop: 4,
                }}
              >
                <span>Gesamt</span>
                <span>{totals.totalFmt}</span>
              </div>
              <button
                onClick={onCheckout}
                className="btn-dark"
                style={{
                  marginTop: 8,
                  background: '#0d0b09',
                  color: '#f3f1ec',
                  border: 'none',
                  padding: 16,
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                Zur Kasse
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
