const colLabelStyle: React.CSSProperties = {
  fontFamily: "'Space Mono', monospace",
  fontSize: 11,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: '#6f6a61',
  marginBottom: 3,
}

const linkStyle: React.CSSProperties = { cursor: 'pointer' }

export default function Footer() {
  return (
    <footer style={{ background: '#0d0b09', color: '#cfcabf' }}>
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '56px 28px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 40,
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 280 }}>
          <span style={{ fontFamily: "'Permanent Marker', cursive", fontSize: 34, color: '#f3f1ec' }}>
            Los Angeles
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              letterSpacing: '.06em',
              lineHeight: 1.7,
            }}
          >
            designed for the now.
            <br />
            made for the future.
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 13 }}>
          <span style={colLabelStyle}>Shop</span>
          <span style={linkStyle}>Alle Drops</span>
          <span style={linkStyle}>Lookbook</span>
          <span style={linkStyle}>Größentabelle</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 13 }}>
          <span style={colLabelStyle}>Service</span>
          <span style={linkStyle}>Versand &amp; Rückgabe</span>
          <span style={linkStyle}>Kontakt</span>
          <span style={linkStyle}>FAQ</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
          <div
            style={{
              width: 168,
              height: 44,
              background:
                'repeating-linear-gradient(90deg,#cfcabf 0,#cfcabf 2px,transparent 2px,transparent 5px)',
            }}
          />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: '#6f6a61',
            }}
          >
            est. now &nbsp;✦&nbsp; gen.z energy
          </span>
        </div>
      </div>
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,.1)',
          padding: '18px 28px',
          textAlign: 'center',
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          letterSpacing: '.08em',
          color: '#6f6a61',
          textTransform: 'lowercase',
        }}
      >
        © 2026 los angeles — no rules. just you.
      </div>
    </footer>
  )
}
