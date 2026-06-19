interface HeaderProps {
  cartCount: number
  onShop: () => void
  onScrollToGrid: () => void
  onOpenCart: () => void
}

const navItemStyle: React.CSSProperties = { cursor: 'pointer' }

export default function Header({ cartCount, onShop, onScrollToGrid, onOpenCart }: HeaderProps) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: 'rgba(243,241,236,.9)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(20,18,14,.14)',
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '15px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 18,
        }}
      >
        <div
          onClick={onShop}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <span
            style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: 27,
              lineHeight: 1,
              letterSpacing: '.5px',
            }}
          >
            Los Angeles
          </span>
        </div>
        <nav
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 28,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '.04em',
            textTransform: 'uppercase',
          }}
        >
          <span onClick={onShop} style={navItemStyle}>
            Shop
          </span>
          <span onClick={onScrollToGrid} style={navItemStyle}>
            Drops
          </span>
          <span onClick={onScrollToGrid} style={navItemStyle}>
            Lookbook
          </span>
        </nav>
        <button
          onClick={onOpenCart}
          className="cart-btn"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: 9,
            border: '1px solid rgba(20,18,14,.2)',
            background: 'transparent',
            color: '#15120e',
            padding: '9px 16px',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Warenkorb
          {cartCount > 0 && (
            <span
              style={{
                background: '#15120e',
                color: '#f3f1ec',
                minWidth: 18,
                height: 18,
                borderRadius: 9,
                fontSize: 11,
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 5px',
              }}
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
