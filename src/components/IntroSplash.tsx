import { useMemo } from 'react'

const PALETTE = ['#d98f8c', '#e0a777', '#ffce00', '#f3f1ec', '#6b5a72', '#8f9777']
const BURSTS = [
  { x: '30%', y: '42%', d: 1.5 },
  { x: '70%', y: '36%', d: 2.0 },
  { x: '50%', y: '60%', d: 2.5 },
]

export default function IntroSplash({ onSkip }: { onSkip: () => void }) {
  const particles = useMemo<React.CSSProperties[]>(() => {
    const out: React.CSSProperties[] = []
    BURSTS.forEach((b, bi) => {
      const N = 16
      for (let i = 0; i < N; i++) {
        const ang = (i / N) * Math.PI * 2
        const r = 66 + (i % 3) * 26
        const tx = Math.round(Math.cos(ang) * r)
        const ty = Math.round(Math.sin(ang) * r)
        const col = PALETTE[(i + bi) % PALETTE.length]
        out.push({
          position: 'absolute',
          left: b.x,
          top: b.y,
          width: 7,
          height: 7,
          borderRadius: '50%',
          background: col,
          boxShadow: `0 0 9px ${col}`,
          opacity: 0,
          ['--tx' as string]: `${tx}px`,
          ['--ty' as string]: `${ty}px`,
          animation: `fw 1.15s ease-out ${b.d}s forwards`,
        } as React.CSSProperties)
      }
    })
    return out
  }, [])

  return (
    <div
      onClick={onSkip}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: '#0d0b09',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        cursor: 'pointer',
        animation: 'introOut 5s ease forwards',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {particles.map((st, i) => (
          <span key={i} style={st} />
        ))}
      </div>
      <div
        style={{
          fontFamily: "'Permanent Marker', cursive",
          color: '#f3f1ec',
          fontSize: 'clamp(46px,11vw,140px)',
          lineHeight: 1,
          position: 'relative',
          zIndex: 2,
          textShadow: '0 0 34px rgba(217,143,140,.45)',
          animation: 'laSlide 1.3s cubic-bezier(.2,.8,.2,1) .2s both',
        }}
      >
        Los Angeles
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginTop: 28,
          position: 'relative',
          zIndex: 2,
          fontFamily: "'Space Mono', monospace",
          textTransform: 'uppercase',
          letterSpacing: '.3em',
          color: '#cfcabf',
          fontSize: 13,
          animation: 'mig .7s ease 2.9s both',
        }}
      >
        <span
          style={{
            width: 22,
            height: 14,
            background: 'linear-gradient(180deg,#141414 0 33%,#c1121f 33% 66%,#ffce00 66%)',
            display: 'inline-block',
          }}
        />
        made in germany
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 22,
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          letterSpacing: '.1em',
          color: '#6f6a61',
          textTransform: 'lowercase',
          animation: 'mig .7s ease 3.7s both',
        }}
      >
        tippen zum überspringen
      </div>
    </div>
  )
}
