"use client"
import React, { useState } from 'react';

const POSInput = () => {
    const [cart, setCart] = useState([]);

    // Daftar produk baju "inclothes" kamu
    const products = [
        { id: 1, name: 'Gamis Silk Premium', price: 350000, color: 'Authentic Madinah' },
        { id: 2, name: 'Koko Kurta Modern', price: 225000, color: 'Himalayan White' },
        { id: 3, name: 'Abaya Jetblack Sharia', price: 450000, color: 'Deep Black' },
        { id: 4, name: 'Pashmina Silk Soft', price: 85000, color: 'Dusty Rose' },
        { id: 5, name: 'Mukenah Travel Set', price: 150000, color: 'Emerald Green' },
        { id: 6, name: 'Khimar Syar\'i Layer', price: 110000, color: 'Soft Lavender' },
    ];

    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const zakat = subtotal * 0.025; // Automatis Zakat 2.5%

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="flex h-screen bg-[#F8FAFC] font-sans">
            {/* Main Area */}
            <div className="flex-1 p-8 overflow-y-auto">
                <header className="mb-8 flex justify-between items-end">
                    <div>
                        <p className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-1">— Premium Syariah clothes</p>
                        <h1 className="text-4xl font-black text-slate-800">Inclothes</h1>
                    </div>
                    <div className="relative">
                        <input type="text" placeholder="Cari produk impian..." className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64 shadow-sm" />
                        <span className="absolute left-4 top-2.5 text-slate-400">🔍</span>
                    </div>
                </header>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <div key={product.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                            <div className="mb-4">
                                <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">{product.color}</p>
                                <h3 className="text-lg font-bold text-slate-700 group-hover:text-emerald-700 transition-colors">{product.name}</h3>
                            </div>
                            <div className="flex justify-between items-center mt-8">
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase">Price</p>
                                    <p className="text-xl font-black text-slate-800">Rp {product.price.toLocaleString('id-ID')}</p>
                                </div>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="bg-emerald-500 hover:bg-emerald-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-emerald-100 transition-transform active:scale-90"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar Checkout */}
            <div className="w-[400px] bg-white border-l border-slate-100 shadow-2xl flex flex-col">
                <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                    <h2 className="text-2xl font-black text-slate-800">Pelanggan</h2>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                        Sharia Compliant
                    </span>
                </div>

                <div className="flex-1 p-8 overflow-y-auto space-y-6">
                    {cart.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-slate-400 italic">Keranjang masih kosong...</p>
                        </div>
                    ) : (
                        cart.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center animate-in fade-in slide-in-from-right-4">
                                <div>
                                    <p className="font-bold text-slate-700">{item.name}</p>
                                    <p className="text-xs text-slate-400">1 Item dalam keranjang</p>
                                </div>
                                <p className="font-bold text-slate-800 text-sm">Rp {item.price.toLocaleString('id-ID')}</p>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-8 bg-[#FBFCFE] border-t border-slate-100 rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-slate-500 font-medium">
                            <span>Subtotal</span>
                            <span>Rp {subtotal.toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-emerald-600 font-bold bg-emerald-50 p-3 rounded-2xl text-sm">
                            <span className="flex items-center gap-2">✨ Berkah Zakat (2.5%)</span>
                            <span>+ Rp {zakat.toLocaleString('id-ID')}</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-end mb-8">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Total Bayar</p>
                        <p className="text-3xl font-black text-slate-900 leading-none">
                            Rp {(subtotal + zakat).toLocaleString('id-ID')}
                        </p>
                    </div>

                    <button className="w-full bg-slate-900 hover:bg-emerald-600 text-white py-5 rounded-3xl font-bold text-lg shadow-2xl shadow-slate-200 transition-all active:scale-95">
                        Complete Transaction
                    </button>
                </div>
            </div>
        </div>
    );
};

export default POSInput;