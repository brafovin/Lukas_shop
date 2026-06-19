import { useCallback, useEffect, useMemo, useState } from 'react'
import { CONFIG, byId, defSizeFor, euro, type CartLine, type Gallery, type View } from './data'
import Header from './components/Header'
import IntroSplash from './components/IntroSplash'
import ShopView from './components/ShopView'
import ProductView from './components/ProductView'
import CheckoutView from './components/CheckoutView'
import ConfirmView from './components/ConfirmView'
import CartDrawer from './components/CartDrawer'

export interface DisplayLine {
  key: string
  name: string
  img: string
  colorName: string
  size: string
  qty: number
  lineFmt: string
  onInc: () => void
  onDec: () => void
  onRemove: () => void
}

const SHIPPING_FEE = 4.9

function top() {
  try {
    window.scrollTo({ top: 0, left: 0 })
  } catch {
    /* noop */
  }
}

export default function App() {
  const [view, setView] = useState<View>('shop')
  const [activeId, setActiveId] = useState<string | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState<CartLine[]>([])
  const [selColor, setSelColor] = useState(0)
  const [selSize, setSelSize] = useState(CONFIG.defaultSize)
  const [selQty, setSelQty] = useState(1)
  const [gallery, setGallery] = useState<Gallery>('back')
  const [openAcc, setOpenAcc] = useState<string | null>('details')
  const [orderNo, setOrderNo] = useState<string | null>(null)
  const [lastOrder, setLastOrder] = useState<{ total: number; count: number } | null>(null)
  const [intro, setIntro] = useState(true)

  // auto-dismiss the intro splash after 5s (it also fades out via CSS at ~84%)
  useEffect(() => {
    const t = setTimeout(() => setIntro(false), 5000)
    return () => clearTimeout(t)
  }, [])
  const skipIntro = useCallback(() => setIntro(false), [])

  // --- navigation ---
  const goShop = useCallback(() => {
    setView('shop')
    setCartOpen(false)
    top()
  }, [])

  const openProduct = useCallback((id: string) => {
    setView('product')
    setActiveId(id)
    setSelColor(0)
    setSelSize(defSizeFor(byId(id)))
    setSelQty(1)
    setGallery('back')
    setOpenAcc('details')
    setCartOpen(false)
    top()
  }, [])

  const openCart = useCallback(() => setCartOpen(true), [])
  const closeCart = useCallback(() => setCartOpen(false), [])
  const toggleAcc = useCallback(
    (k: string) => setOpenAcc((prev) => (prev === k ? null : k)),
    [],
  )

  const scrollToGrid = useCallback(() => {
    const el = document.getElementById('kr-grid')
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 64
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [])

  // --- cart ---
  const addItem = useCallback(
    (id: string, colorIdx: number, size: string, qty: number) => {
      setCart((prev) => {
        const key = `${id}|${colorIdx}|${size}`
        const next = prev.map((l) => ({ ...l }))
        const ex = next.find((l) => l.key === key)
        if (ex) ex.qty += qty
        else next.push({ key, id, colorIdx, size, qty })
        return next
      })
    },
    [],
  )

  const quickAdd = useCallback(
    (id: string) => {
      addItem(id, 0, defSizeFor(byId(id)), 1)
      setCartOpen(true)
    },
    [addItem],
  )

  const addCurrent = useCallback(() => {
    if (!activeId) return
    addItem(activeId, selColor, selSize, selQty)
    setCartOpen(true)
  }, [addItem, activeId, selColor, selSize, selQty])

  const changeQty = useCallback((key: string, d: number) => {
    setCart((prev) =>
      prev
        .map((l) => (l.key === key ? { ...l, qty: l.qty + d } : l))
        .filter((l) => l.qty > 0),
    )
  }, [])

  const removeLine = useCallback((key: string) => {
    setCart((prev) => prev.filter((l) => l.key !== key))
  }, [])

  const goCheckout = useCallback(() => {
    if (cart.length === 0) return
    setView('checkout')
    setCartOpen(false)
    top()
  }, [cart.length])

  // --- derived values ---
  const subtotal = useMemo(
    () => cart.reduce((a, l) => a + byId(l.id).price * l.qty, 0),
    [cart],
  )
  const cartCount = useMemo(() => cart.reduce((a, l) => a + l.qty, 0), [cart])
  const shippingFree = subtotal >= CONFIG.freeShipThreshold
  const shipping = shippingFree ? 0 : SHIPPING_FEE
  const total = subtotal + shipping

  const placeOrder = useCallback(() => {
    if (cart.length === 0) return
    const no = 'KR-' + Math.floor(100000 + Math.random() * 900000)
    setOrderNo(no)
    setLastOrder({ total, count: cartCount })
    setCart([])
    setView('confirm')
    top()
  }, [cart.length, total, cartCount])

  const continueShopping = useCallback(() => {
    setView('shop')
    setOrderNo(null)
    setLastOrder(null)
    top()
  }, [])

  const lines: DisplayLine[] = useMemo(
    () =>
      cart.map((l) => {
        const p = byId(l.id)
        const c = p.colors[l.colorIdx]
        return {
          key: l.key,
          name: p.name,
          img: p.back,
          colorName: c.name,
          size: l.size,
          qty: l.qty,
          lineFmt: euro(p.price * l.qty),
          onInc: () => changeQty(l.key, 1),
          onDec: () => changeQty(l.key, -1),
          onRemove: () => removeLine(l.key),
        }
      }),
    [cart, changeQty, removeLine],
  )

  let shipMsg: string
  if (subtotal <= 0) shipMsg = 'dein warenkorb ist leer.'
  else if (shippingFree) shipMsg = 'kostenloser versand inklusive ✦'
  else shipMsg = 'noch ' + euro(CONFIG.freeShipThreshold - subtotal) + ' bis zum kostenlosen versand'

  const totals = {
    subtotalFmt: euro(subtotal),
    shippingFmt: shippingFree ? 'Kostenlos' : euro(shipping),
    totalFmt: euro(total),
    shipMsg,
  }

  const activeProduct = activeId ? byId(activeId) : null

  return (
    <div
      style={{
        fontFamily: "'Archivo', system-ui, sans-serif",
        color: '#15120e',
        background: '#f3f1ec',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      {intro && <IntroSplash onSkip={skipIntro} />}

      <div
        style={{
          background: '#0d0b09',
          color: '#cfcabf',
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          letterSpacing: '.06em',
          textAlign: 'center',
          padding: '9px 16px',
          textTransform: 'lowercase',
        }}
      >
        clean. loud. different. &nbsp;·&nbsp; für deine generation. &nbsp;·&nbsp; kostenloser
        versand ab {CONFIG.freeShipThreshold} € &nbsp;·&nbsp; garment-dyed in LA
      </div>

      <Header
        cartCount={cartCount}
        onShop={goShop}
        onScrollToGrid={scrollToGrid}
        onOpenCart={openCart}
      />

      {view === 'shop' && (
        <ShopView
          onOpenProduct={openProduct}
          onQuickAdd={quickAdd}
          onScrollToGrid={scrollToGrid}
        />
      )}

      {view === 'product' && activeProduct && (
        <ProductView
          product={activeProduct}
          selColor={selColor}
          selSize={selSize}
          selQty={selQty}
          gallery={gallery}
          openAcc={openAcc}
          onBack={goShop}
          onSelectColor={setSelColor}
          onSelectSize={setSelSize}
          onGallery={setGallery}
          onDecQty={() => setSelQty((q) => Math.max(1, q - 1))}
          onIncQty={() => setSelQty((q) => q + 1)}
          onToggleAcc={toggleAcc}
          onAdd={addCurrent}
        />
      )}

      {view === 'checkout' && (
        <CheckoutView lines={lines} totals={totals} onSubmit={placeOrder} onShop={goShop} />
      )}

      {view === 'confirm' && (
        <ConfirmView
          orderNo={orderNo ?? ''}
          totalFmt={lastOrder ? euro(lastOrder.total) : ''}
          count={lastOrder ? lastOrder.count : 0}
          onContinue={continueShopping}
        />
      )}

      <CartDrawer
        open={cartOpen}
        lines={lines}
        cartCount={cartCount}
        totals={totals}
        onClose={closeCart}
        onCheckout={goCheckout}
      />
    </div>
  )
}
