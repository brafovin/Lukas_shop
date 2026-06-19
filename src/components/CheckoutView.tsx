import type { DisplayLine } from '../App'

interface Totals {
  subtotalFmt: string
  shippingFmt: string
  totalFmt: string
  shipMsg: string
}

interface CheckoutViewProps {
  lines: DisplayLine[]
  totals: Totals
  onSubmit: () => void
  onShop: () => void
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: 14,
  border: '1px solid rgba(20,18,14,.22)',
  background: '#fff',
  fontSize: 14,
  color: '#15120e',
  outline: 'none',
}

const legendStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  padding: 0,
  marginBottom: 14,
}

const fieldsetStyle: React.CSSProperties = { border: 'none', padding: 0, margin: 0 }

export default function CheckoutView({ lines, totals, onSubmit, onShop }: CheckoutViewProps) {
  return (
    <main style={{ maxWidth: 1320, margin: '0 auto', padding: '38px 28px 84px' }}>
      <h1
        style={{
          fontFamily: "'Archivo Expanded','Archivo',sans-serif",
          fontWeight: 800,
          textTransform: 'uppercase',
          fontSize: 'clamp(28px,4vw,44px)',
          letterSpacing: '-.01em',
          margin: '0 0 32px',
        }}
      >
        Kasse
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit()
        }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start' }}
      >
        <div
          style={{
            flex: '1 1 440px',
            minWidth: 300,
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
          }}
        >
          <fieldset style={fieldsetStyle}>
            <legend style={legendStyle}>Kontakt</legend>
            <input type="email" required placeholder="E-Mail-Adresse" className="kr-input" style={inputStyle} />
          </fieldset>
          <fieldset style={fieldsetStyle}>
            <legend style={legendStyle}>Lieferadresse</legend>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
              <input required placeholder="Vorname" className="kr-input" style={inputStyle} />
              <input required placeholder="Nachname" className="kr-input" style={inputStyle} />
            </div>
            <input
              required
              placeholder="Straße & Hausnummer"
              className="kr-input"
              style={{ ...inputStyle, marginBottom: 12 }}
            />
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 12, marginBottom: 12 }}>
              <input required placeholder="PLZ" className="kr-input" style={inputStyle} />
              <input required placeholder="Stadt" className="kr-input" style={inputStyle} />
            </div>
            <input placeholder="Land" defaultValue="Deutschland" className="kr-input" style={inputStyle} />
          </fieldset>
          <fieldset style={fieldsetStyle}>
            <legend style={legendStyle}>Zahlung</legend>
            <input
              required
              placeholder="Kartennummer"
              className="kr-input"
              style={{ ...inputStyle, marginBottom: 12 }}
            />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <input required placeholder="MM / JJ" className="kr-input" style={inputStyle} />
              <input required placeholder="CVC" className="kr-input" style={inputStyle} />
            </div>
          </fieldset>
        </div>

        <aside
          style={{
            flex: '1 1 340px',
            minWidth: 300,
            background: '#fff',
            border: '1px solid rgba(20,18,14,.12)',
            padding: 24,
            alignSelf: 'flex-start',
          }}
        >
          <h2
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              margin: '0 0 18px',
            }}
          >
            Bestellübersicht
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              maxHeight: 320,
              overflowY: 'auto',
            }}
          >
            {lines.map((l) => (
              <div key={l.key} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <img
                  src={l.img}
                  style={{ width: 48, height: 60, objectFit: 'cover', background: '#eae7e0', flex: 'none' }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{l.name}</div>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 11,
                      color: '#8c867b',
                      textTransform: 'lowercase',
                    }}
                  >
                    {l.colorName} · {l.size} · {l.qty}×
                  </div>
                </div>
                <span style={{ fontWeight: 600, fontSize: 13 }}>{l.lineFmt}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              borderTop: '1px solid rgba(20,18,14,.12)',
              marginTop: 18,
              paddingTop: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 9,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
              <span style={{ color: '#8c867b' }}>Zwischensumme</span>
              <span style={{ fontWeight: 600 }}>{totals.subtotalFmt}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
              <span style={{ color: '#8c867b' }}>Versand</span>
              <span style={{ fontWeight: 600 }}>{totals.shippingFmt}</span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: 16,
                fontWeight: 700,
                borderTop: '1px solid rgba(20,18,14,.12)',
                paddingTop: 10,
              }}
            >
              <span>Gesamt</span>
              <span>{totals.totalFmt}</span>
            </div>
          </div>
          <button
            type="submit"
            className="btn-dark"
            style={{
              width: '100%',
              marginTop: 18,
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
            Bestellung abschließen
          </button>
          <button
            type="button"
            onClick={onShop}
            style={{
              width: '100%',
              marginTop: 10,
              background: 'none',
              border: 'none',
              color: '#8c867b',
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              textTransform: 'lowercase',
              cursor: 'pointer',
            }}
          >
            ← weiter shoppen
          </button>
        </aside>
      </form>
    </main>
  )
}
