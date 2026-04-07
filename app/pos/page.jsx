"use client";
import React, { useState } from 'react';

export default function POSPage() {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: 'Gamis Silk Premium', price: 350000, color: 'Authentic Madinah', image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=400' },
        { id: 2, name: 'Koko Kurta Modern', price: 225000, color: 'Himalayan White', image: 'https://images.unsplash.com/photo-1624313503191-494b29c9cc74?q=80&w=400' },
        { id: 3, name: 'Abaya Jetblack Sharia', price: 450000, color: 'Deep Black', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400' },
        { id: 4, name: 'Pashmina Silk Soft', price: 85000, color: 'Dusty Rose', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=400' },
        { id: 5, name: 'Mukenah Travel Set', price: 150000, color: 'Emerald Green', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=400' },
        { id: 6, name: 'Khimar Syar\'i Layer', price: 110000, color: 'Soft Lavender', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400' },
    ];

    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const zakat = subtotal * 0.025;

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="flex h-screen bg-[#F8FAFC]">
            {/* AREA UTAMA */}
            <div className="flex-1 p-8 overflow-y-auto">
                <header className="mb-8 flex justify-between items-end">
                    <div>
                        <p className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-1">— Premium Syariah Clothes</p>
                        <h1 className="text-4xl font-black text-slate-800">Inclothes</h1>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <div key={product.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden flex flex-col">
                            <div className="w-full h-52 bg-slate-100 overflow-hidden">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="mb-4">
                                    <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">{product.color}</p>
                                    <h3 className="text-lg font-bold text-slate-700">{product.name}</h3>
                                </div>
                                <div className="flex justify-between items-center mt-auto">
                                    <p className="text-xl font-black text-slate-800">Rp {product.price.toLocaleString('id-ID')}</p>
                                    <button onClick={() => addToCart(product)} className="bg-emerald-500 hover:bg-emerald-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-emerald-100 transition-transform active:scale-90">+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* SIDEBAR KERANJANG */}
            <div className="w-[400px] bg-white border-l border-slate-100 shadow-2xl flex flex-col">
                <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                    <h2 className="text-2xl font-black text-slate-800">Keranjang</h2>
                </div>
                <div className="flex-1 p-8 overflow-y-auto space-y-6">
                    {cart.length === 0 ? (
                        <p className="text-slate-400 italic text-center py-10">Keranjang kosong...</p>
                    ) : (
                        cart.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center">
                                <p className="font-bold text-slate-700">{item.name}</p>
                                <p className="font-bold text-slate-800">Rp {item.price.toLocaleString('id-ID')}</p>
                            </div>
                        ))
                    )}
                </div>
                <div className="p-8 bg-[#FBFCFE] border-t border-slate-100 rounded-t-[40px]">
                    <div className="space-y-3 mb-6 text-sm">
                        <div className="flex justify-between text-slate-500">
                            <span>Subtotal</span>
                            <span>Rp {subtotal.toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-emerald-600 font-bold bg-emerald-50 p-3 rounded-2xl">
                            <span>✨ Zakat (2.5%)</span>
                            <span>+ Rp {zakat.toLocaleString('id-ID')}</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-end mb-8">
                        <p className="text-3xl font-black text-slate-900">Rp {(subtotal + zakat).toLocaleString('id-ID')}</p>
                    </div>
                    <button className="w-full bg-slate-900 hover:bg-emerald-600 text-white py-5 rounded-3xl font-bold text-lg shadow-2xl transition-all active:scale-95">Selesaikan Transaksi</button>
                </div>
            </div>
        </div>
    );
}