import { Edit3, EyeOff, Eye, Minus, Plus, PlusCircle, Trash2, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import VendorLayout from '../components/VendorLayout';
import { useAuth } from '../context/AuthContext';
import { listInventory, createMenuItem, updateMenuItem, deleteMenuItem } from '../api/vendorInventory';
import { findMyVendorProfile } from '../api/vendors';
import { formatNaira } from '../utils/currency';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80';
const EMPTY_FORM = { name: '', description: '', price: '', category: '', stockQty: '', imageUrl: '', isAvailable: true };

const VendorInventory = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('loading');
  const [activeCategory, setActiveCategory] = useState('All Items');
  const [editingItem, setEditingItem] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [isSaving, setIsSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [vendorId, setVendorId] = useState(null);

  useEffect(() => {
    refresh();
    findMyVendorProfile(user.id).then((vendor) => setVendorId(vendor?.id ?? null));
  }, [user.id]);

  function refresh() {
    listInventory({ limit: 100 })
      .then(({ menuItems }) => {
        setItems(menuItems);
        setStatus('loaded');
      })
      .catch(() => setStatus('error'));
  }

  const categories = useMemo(() => {
    const counts = new Map();
    for (const item of items) counts.set(item.category, (counts.get(item.category) ?? 0) + 1);
    return [{ name: 'All Items', count: items.length }, ...[...counts.entries()].map(([name, count]) => ({ name, count }))];
  }, [items]);

  const visibleItems = activeCategory === 'All Items' ? items : items.filter((item) => item.category === activeCategory);

  function openAddForm() {
    setEditingItem(null);
    setForm(EMPTY_FORM);
    setShowForm(true);
  }

  function openEditForm(item) {
    setEditingItem(item);
    setForm({
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,
      stockQty: String(item.stockQty),
      imageUrl: item.imageUrl ?? '',
      isAvailable: item.isAvailable,
    });
    setShowForm(true);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    setIsSaving(true);
    try {
      if (editingItem) {
        await updateMenuItem(editingItem.id, {
          name: form.name,
          description: form.description,
          price: form.price,
          category: form.category,
          stockQty: Number(form.stockQty),
          imageUrl: form.imageUrl,
          isAvailable: form.isAvailable,
        });
        toast.success('Item updated');
      } else {
        if (!vendorId) {
          toast.error("Couldn't determine your vendor profile. Try reloading.");
          return;
        }
        await createMenuItem({
          vendorId,
          name: form.name,
          description: form.description,
          price: form.price,
          category: form.category,
          stockQty: Number(form.stockQty),
          imageUrl: form.imageUrl,
          isAvailable: form.isAvailable,
        });
        toast.success('Item added');
      }
      setShowForm(false);
      refresh();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSaving(false);
    }
  }

  async function adjustStock(item, delta) {
    const nextQty = Math.max(0, item.stockQty + delta);
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, stockQty: nextQty } : i)));
    try {
      await updateMenuItem(item.id, { stockQty: nextQty });
    } catch (error) {
      toast.error(error.message);
      refresh();
    }
  }

  async function toggleVisibility(item) {
    const nextAvailable = !item.isAvailable;
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, isAvailable: nextAvailable } : i)));
    try {
      await updateMenuItem(item.id, { isAvailable: nextAvailable });
    } catch (error) {
      toast.error(error.message);
      refresh();
    }
  }

  async function handleDelete(item) {
    if (!window.confirm(`Delete "${item.name}" permanently?`)) return;
    try {
      await deleteMenuItem(item.id);
      setItems((prev) => prev.filter((i) => i.id !== item.id));
      toast.success('Item deleted');
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <VendorLayout>
      <div className="vendor-inventory mx-auto w-full max-w-6xl space-y-8 pb-20 xl:px-0">

        {/* Header */}
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <h2 className="font-serif italic text-4xl font-black leading-none tracking-[-0.04em] text-zinc-950 sm:text-5xl">
              Menu Inventory
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
              Manage items, pricing, and live stock for{' '}
              <span className="font-bold text-zinc-950">{user.fullName}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={openAddForm}
            className="flex items-center gap-3 rounded-[16px] bg-zinc-950 px-7 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_14px_28px_-14px_rgba(0,0,0,0.5)] transition-colors duration-200 hover:bg-[#F5A800] active:scale-95"
          >
            <PlusCircle className="h-5 w-5" />
            Add Menu Item
          </button>
        </header>

        {status === 'loading' && <p className="text-zinc-400">Loading inventory...</p>}
        {status === 'error' && <p className="text-zinc-400">Couldn't load inventory. Try again shortly.</p>}

        {status === 'loaded' && (
          <>
            {/* Category filter */}
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => setActiveCategory(cat.name)}
                    className={`relative whitespace-nowrap rounded-[16px] px-6 py-3 text-[10px] font-black uppercase tracking-[0.16em] transition-colors duration-200 active:scale-95 ${
                      isActive
                        ? 'text-white'
                        : 'border border-zinc-200 bg-white text-zinc-400 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#F5A800]/30 hover:text-[#D88B00]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="inventory-category-pill"
                        className="absolute inset-0 rounded-[16px] bg-[#F5A800] shadow-[0_10px_20px_-10px_rgba(245,168,0,0.6)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{cat.name} ({cat.count})</span>
                  </button>
                );
              })}
            </div>

            {visibleItems.length === 0 ? (
              <p className="text-zinc-400 text-sm">No items in this category yet.</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visibleItems.map((item) => {
                  const soldOut = item.stockQty === 0;
                  const lowStock = item.stockQty > 0 && item.stockQty < 10;
                  return (
                    <article
                      key={item.id}
                      className={`group flex flex-col overflow-hidden rounded-[20px] border bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.2)] transition-all duration-300 ${
                        soldOut ? 'border-zinc-100 opacity-60' : lowStock ? 'border-red-200' : 'border-zinc-100 hover:-translate-y-0.5 hover:border-[#F5A800]/25'
                      } ${!item.isAvailable && !soldOut ? 'opacity-50' : ''}`}
                    >
                      <div className="relative h-44 overflow-hidden bg-zinc-100">
                        <img alt={item.name} className={`h-full w-full object-cover ${soldOut ? 'grayscale' : ''}`} src={item.imageUrl || FALLBACK_IMAGE} />
                        {soldOut && (
                          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/40">
                            <span className="border border-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white">Sold Out</span>
                          </div>
                        )}
                        {!item.isAvailable && !soldOut && (
                          <div className="absolute right-3 top-3 rounded-full bg-zinc-900/80 px-3 py-1.5">
                            <span className="text-[10px] font-black uppercase tracking-[0.14em] text-white">Hidden</span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="truncate font-black uppercase tracking-[-0.02em] text-zinc-950">{item.name}</h3>
                        <p className="mt-1 text-xl font-black text-[#F5A800]">{formatNaira(item.price)}</p>

                        <div className="mt-auto space-y-4 pt-5">
                          <div className={`flex items-center justify-between rounded-[14px] border p-3 ${lowStock ? 'border-red-100 bg-red-50' : 'border-zinc-100 bg-zinc-50'}`}>
                            <span className={`text-[10px] font-black uppercase tracking-[0.16em] ${lowStock ? 'text-red-500' : 'text-zinc-400'}`}>
                              {soldOut ? 'Stock Out' : lowStock ? 'Low Stock' : 'In Stock'}
                            </span>
                            <div className="flex items-center gap-3">
                              <button type="button" onClick={() => adjustStock(item, -1)} className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-zinc-200 bg-white text-zinc-400 transition hover:border-[#F5A800]/30 hover:text-[#F5A800]">
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="min-w-[24px] text-center font-black text-zinc-950">{item.stockQty}</span>
                              <button type="button" onClick={() => adjustStock(item, 1)} className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-zinc-200 bg-white text-zinc-400 transition hover:border-[#F5A800]/30 hover:text-[#F5A800]">
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-2.5">
                            <button type="button" onClick={() => openEditForm(item)} className="flex items-center justify-center gap-1.5 rounded-[14px] bg-zinc-950 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-[0_8px_16px_-8px_rgba(0,0,0,0.4)] transition hover:bg-[#F5A800] active:scale-95">
                              <Edit3 className="h-3 w-3" /> Edit
                            </button>
                            <button type="button" onClick={() => toggleVisibility(item)} className="flex items-center justify-center gap-1.5 rounded-[14px] border border-zinc-200 bg-zinc-100 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-500 transition hover:border-red-100 hover:bg-red-50 hover:text-red-500">
                              {item.isAvailable ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />} {item.isAvailable ? 'Hide' : 'Show'}
                            </button>
                            <button type="button" onClick={() => handleDelete(item)} className="flex items-center justify-center gap-1.5 rounded-[14px] border border-red-100 bg-white py-3 text-[10px] font-black uppercase tracking-[0.14em] text-red-500 transition hover:bg-red-600 hover:text-white">
                              <Trash2 className="h-3 w-3" /> Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/50 p-4">
          <div className="w-full max-w-md rounded-[24px] bg-white p-8 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900">{editingItem ? 'Edit Item' : 'Add Menu Item'}</h3>
              <button type="button" onClick={() => setShowForm(false)} className="text-zinc-400 hover:text-zinc-900">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSubmitForm} className="space-y-4">
              <input required placeholder="Name" className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <textarea required minLength={5} placeholder="Description" className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              <div className="grid grid-cols-2 gap-3">
                <input required type="number" min="0.01" step="0.01" placeholder="Price" className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
                <input required type="number" min="0" placeholder="Stock Qty" className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm" value={form.stockQty} onChange={(e) => setForm({ ...form, stockQty: e.target.value })} />
              </div>
              <input required placeholder="Category" className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
              <input placeholder="Image URL (optional)" className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />
              <label className="flex items-center gap-2 text-sm text-zinc-600">
                <input type="checkbox" checked={form.isAvailable} onChange={(e) => setForm({ ...form, isAvailable: e.target.checked })} />
                Available to order
              </label>
              <button type="submit" disabled={isSaving} className="w-full rounded-xl bg-zinc-950 py-3 text-sm font-black uppercase tracking-widest text-white hover:bg-[#F5A800] disabled:opacity-60">
                {isSaving ? 'Saving...' : editingItem ? 'Save Changes' : 'Add Item'}
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .vendor-inventory .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </VendorLayout>
  );
};

export default VendorInventory;
