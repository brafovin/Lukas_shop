interface ConfirmViewProps {
  orderNo: string
  totalFmt: string
  count: number
  onContinue: () => void
}

const statLabelStyle: React.CSSProperties = {
  fontFamily: "'Space Mono', monospace",
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: '.1em',
  color: '#8c867b',
}

export default function ConfirmView({ orderNo, totalFmt, count, onContinue }: ConfirmViewProps) {
  return (
    <main style={{ maxWidth: 680, margin: '0 auto', padding: '78px 28px', textAlign: 'center' }}>
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: '#0d0b09',
          color: '#f3f1ec',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 30,
          margin: '0 auto 28px',
        }}
      >
        ✓
      </div>
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 12,
          letterSpacing: '.16em',
          textTransform: 'uppercase',
          color: '#8c867b',
        }}
      >
        bestellung {orderNo}
      </div>
      <h1
        style={{
          fontFamily: "'Archivo Expanded','Archivo',sans-serif",
          fontWeight: 800,
          textTransform: 'uppercase',
          fontSize: 'clamp(40px,8vw,80px)',
          letterSpacing: '-.02em',
          margin: '14px 0 18px',
        }}
      >
        Danke.
      </h1>
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.6,
          color: '#4a463f',
          margin: '0 auto 32px',
          maxWidth: '42ch',
        }}
      >
        Deine Bestellung ist eingegangen. Wir schicken dir eine Bestätigung per E-Mail — deine Drops
        sind in 2–4 Werktagen da.
      </p>
      <div
        style={{
          display: 'inline-flex',
          gap: 40,
          justifyContent: 'center',
          borderTop: '1px solid rgba(20,18,14,.14)',
          borderBottom: '1px solid rgba(20,18,14,.14)',
          padding: '18px 0',
          marginBottom: 36,
        }}
      >
        <div>
          <div style={statLabelStyle}>Artikel</div>
          <div style={{ fontWeight: 600, marginTop: 4, fontSize: 15 }}>{count}</div>
        </div>
        <div>
          <div style={statLabelStyle}>Gesamt</div>
          <div style={{ fontWeight: 600, marginTop: 4, fontSize: 15 }}>{totalFmt}</div>
        </div>
      </div>
      <div>
        <button
          onClick={onContinue}
          className="btn-dark"
          style={{
            background: '#0d0b09',
            color: '#f3f1ec',
            border: 'none',
            padding: '16px 32px',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Weiter shoppen
        </button>
      </div>
    </main>
  )
}
