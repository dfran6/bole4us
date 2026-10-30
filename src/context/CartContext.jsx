import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'bole4us_cart';

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { vendorId: null, items: [] };
  } catch {
    return { vendorId: null, items: [] };
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch {
    // Storage can be unavailable (private mode, quota) -- the cart just
    // won't survive a reload, which isn't worth surfacing to the user.
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(loadCart);

  const update = useCallback((next) => {
    setCart(next);
    saveCart(next);
  }, []);

  const addItem = useCallback(
    (vendorId, menuItem) => {
      if (cart.vendorId && cart.vendorId !== vendorId && cart.items.length > 0) {
        const replace = window.confirm('Your cart has items from another vendor. Start a new cart for this vendor?');
        if (!replace) return;
        update({ vendorId, items: [{ menuItemId: menuItem.id, name: menuItem.name, price: menuItem.price, qty: 1 }] });
        return;
      }

      const existing = cart.items.find((item) => item.menuItemId === menuItem.id);
      const items = existing
        ? cart.items.map((item) => (item.menuItemId === menuItem.id ? { ...item, qty: item.qty + 1 } : item))
        : [...cart.items, { menuItemId: menuItem.id, name: menuItem.name, price: menuItem.price, qty: 1 }];

      update({ vendorId, items });
    },
    [cart, update]
  );

  const updateQty = useCallback(
    (menuItemId, qty) => {
      if (qty <= 0) {
        update({ ...cart, items: cart.items.filter((item) => item.menuItemId !== menuItemId) });
        return;
      }
      update({ ...cart, items: cart.items.map((item) => (item.menuItemId === menuItemId ? { ...item, qty } : item)) });
    },
    [cart, update]
  );

  const removeItem = useCallback(
    (menuItemId) => update({ ...cart, items: cart.items.filter((item) => item.menuItemId !== menuItemId) }),
    [cart, update]
  );

  const clearCart = useCallback(() => update({ vendorId: null, items: [] }), [update]);

  const subtotal = useMemo(() => cart.items.reduce((sum, item) => sum + Number(item.price) * item.qty, 0), [cart.items]);

  return (
    <CartContext.Provider value={{ ...cart, addItem, updateQty, removeItem, clearCart, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- hook belongs with its context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
