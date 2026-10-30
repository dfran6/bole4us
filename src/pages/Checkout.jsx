import React, { useEffect, useState } from 'react';
import UserLayout from '../components/UserLayout';
import { Truck, MapPin, CreditCard, Upload, CheckCircle, ArrowRight, ShieldCheck, Flame, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useCart } from '../context/CartContext';
import { getVendor } from '../api/vendors';
import { createOrder } from '../api/orders';
import { formatNaira } from '../utils/currency';

const Checkout = () => {
    const [step, setStep] = useState(1); // 1: Delivery, 2: Payment/Upload
    const [deliveryMode, setDeliveryMode] = useState('agent'); // 'self' or 'agent'
    const [address, setAddress] = useState('');
    const [instructions, setInstructions] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [order, setOrder] = useState(null);
    const [vendor, setVendor] = useState(null);
    const navigate = useNavigate();
    const cart = useCart();

    useEffect(() => {
        if (!cart.vendorId) return;
        getVendor(cart.vendorId).then(setVendor).catch(() => {});
    }, [cart.vendorId]);

    if (!cart.vendorId || cart.items.length === 0) {
        return (
            <UserLayout>
                <p className="text-center text-zinc-400 py-20">Your feast is empty. Go back to a vendor's menu to add items.</p>
            </UserLayout>
        );
    }

    const handleConfirmSelection = async () => {
        if (!address.trim()) {
            toast.error('Please enter a delivery address');
            return;
        }
        setIsSubmitting(true);
        try {
            const created = await createOrder({
                vendorId: cart.vendorId,
                deliveryMode,
                deliveryAddress: address,
                deliveryInstructions: instructions,
                items: cart.items,
            });
            setOrder(created);
            setStep(2);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePlaceOrder = () => {
        cart.clearCart();
        navigate(`/order/${order.id}`);
    };

    return (
        <UserLayout>
            <div className="max-w-4xl mx-auto space-y-12 pb-32">
                {/* Progress Stepper */}
                <div className="flex items-center justify-center gap-4">
                    {[1, 2].map((i) => (
                        <React.Fragment key={i}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black transition-all ${step >= i ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-zinc-100 text-zinc-400'}`}>
                                {step > i ? <CheckCircle className="w-5 h-5" /> : i}
                            </div>
                            {i === 1 && <div className={`h-1 w-20 rounded-full transition-all ${step > 1 ? 'bg-primary' : 'bg-zinc-100'}`}></div>}
                        </React.Fragment>
                    ))}
                </div>

                {step === 1 ? (
                    /* STEP 1: DELIVERY LOGISTICS */
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="text-center">
                            <h2 className="text-4xl font-black font-headline uppercase tracking-tighter text-zinc-900">Delivery Logistics</h2>
                            <p className="text-zinc-500 font-medium mt-2">How do you want to receive your heat?</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <button 
                                onClick={() => setDeliveryMode('self')}
                                className={`p-8 rounded-[2.5rem] border-2 transition-all flex flex-col items-center text-center gap-4 ${deliveryMode === 'self' ? 'border-primary bg-primary/5 shadow-xl shadow-primary/5' : 'border-zinc-100 hover:border-zinc-200 bg-white'}`}
                            >
                                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center ${deliveryMode === 'self' ? 'bg-primary text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-headline font-black text-xl uppercase tracking-tight text-zinc-900">Self Pickup</h3>
                                    <p className="text-xs text-zinc-500 font-medium mt-1">Grab it yourself from the vendor. <span className="text-primary font-bold">₦0</span></p>
                                </div>
                            </button>

                            <button 
                                onClick={() => setDeliveryMode('agent')}
                                className={`p-8 rounded-[2.5rem] border-2 transition-all flex flex-col items-center text-center gap-4 ${deliveryMode === 'agent' ? 'border-primary bg-primary/5 shadow-xl shadow-primary/5' : 'border-zinc-100 hover:border-zinc-200 bg-white'}`}
                            >
                                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center ${deliveryMode === 'agent' ? 'bg-primary text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                                    <Truck className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-headline font-black text-xl uppercase tracking-tight text-zinc-900">Agent Delivery</h3>
                                    <p className="text-xs text-zinc-500 font-medium mt-1">A local agent brings the heat to you. <span className="text-primary font-bold">Calculated at order placement</span></p>
                                </div>
                            </button>
                        </div>

                        <div className="bg-white p-10 rounded-[3rem] border border-zinc-100 shadow-sm space-y-8">
                            <h3 className="text-2xl font-black font-headline uppercase tracking-tight text-zinc-900">Final Protocol</h3>
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Delivery Address</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                                        <input
                                            className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-5 pl-16 pr-8 text-sm font-bold focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all"
                                            placeholder="Hall 4, UNIBEN, Edo State"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Arrival Instructions</label>
                                    <textarea
                                        className="w-full bg-zinc-50 border border-zinc-100 rounded-3xl p-6 text-sm font-bold focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all"
                                        rows="3"
                                        placeholder="e.g. Call me when at the main gate..."
                                        value={instructions}
                                        onChange={(e) => setInstructions(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleConfirmSelection}
                            disabled={isSubmitting}
                            className="w-full py-6 bg-zinc-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-zinc-200 flex items-center justify-center gap-4 group hover:bg-primary transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Placing order...' : 'Confirm Selection'}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                ) : (
                    /* STEP 2: DIRECT PAYMENT & POP UPLOAD */
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="text-center">
                            <h2 className="text-4xl font-black font-headline uppercase tracking-tighter text-zinc-900">Direct Payment</h2>
                            <p className="text-zinc-500 font-medium mt-2">The system doesn't hold money. Please pay the vendor directly.</p>
                        </div>

                        {/* Vendor Bank Details Card */}
                        <div className="bg-zinc-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-bl-full blur-3xl"></div>
                            <div className="relative z-10 space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                                        <CreditCard className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-black font-headline uppercase tracking-tighter">Vendor Credentials</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Bank Name</p>
                                        <p className="text-lg font-bold">{vendor?.bankName || 'Not provided'}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Account Number</p>
                                        <p className="text-2xl font-headline font-black tracking-widest text-primary">{vendor?.accountNumber || 'Not provided'}</p>
                                    </div>
                                    <div className="space-y-1 col-span-full">
                                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Account Name</p>
                                        <p className="text-lg font-bold uppercase tracking-tight">{vendor?.accountName || 'Not provided'}</p>
                                    </div>
                                </div>
                                <div className="pt-8 border-t border-white/5 flex items-center gap-4 text-xs font-medium text-zinc-400">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                        <Flame className="w-5 h-5 text-primary" fill="currentColor" />
                                    </div>
                                    <p>Total Amount to Transfer: <span className="text-white font-black text-xl ml-2">{order ? formatNaira(order.grandTotal) : '—'}</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Screenshot Uploader */}
                        <div className="bg-white p-10 rounded-[3rem] border border-zinc-100 shadow-sm space-y-8">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-black font-headline uppercase tracking-tight text-zinc-900">Proof of Payment</h3>
                                <div className="px-4 py-1.5 bg-zinc-50 rounded-full text-[9px] font-black text-zinc-400 uppercase tracking-widest border border-zinc-100">REQUIRED</div>
                            </div>
                            
                            <div className="relative border-2 border-dashed border-zinc-100 rounded-[2.5rem] p-12 text-center bg-zinc-50/30">
                                <div className="space-y-4">
                                    <div className="w-20 h-20 bg-white rounded-3xl mx-auto flex items-center justify-center shadow-lg">
                                        <Upload className="w-8 h-8 text-zinc-300" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Screenshot upload coming soon</p>
                                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">For now, confirm transfer directly with the vendor</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 p-6 bg-primary/5 rounded-3xl border border-primary/10">
                                <Info className="w-6 h-6 text-primary shrink-0" />
                                <p className="text-xs text-zinc-600 leading-relaxed">
                                    Your order has been placed with order number <span className="text-zinc-900 font-black">{order?.orderNumber}</span>. The vendor will verify your transfer. Food processing will <span className="text-zinc-900 font-black">START ONLY</span> after the vendor acknowledges receipt of funds.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => setStep(1)} className="flex-1 py-6 border border-zinc-100 text-zinc-400 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:text-zinc-900 hover:bg-zinc-50 transition-all">
                                Go Back
                            </button>
                            <button
                                onClick={handlePlaceOrder}
                                className="flex-[2] py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl transition-all flex items-center justify-center gap-4 bg-primary text-white shadow-primary/30 hover:scale-[0.98]"
                            >
                                VIEW MY ORDER
                                <ShieldCheck className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}

                <div className="text-center">
                    <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.4em]">© 2024 BOLE4US • SECURE DIRECT PROTOCOL</p>
                </div>
            </div>
        </UserLayout>
    );
};

export default Checkout;
