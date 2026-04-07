"use client";
import React, { useState } from 'react';

export default function POSPage() {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: 'Gamis Silk Premium', price: 350000, color: 'Authentic Madinah', image: '/gamis.png' },
        { id: 2, name: 'Koko Kurta Modern', price: 225000, color: 'Himalayan White', image: '/koko.png' },
        { id: 3, name: 'Abaya Jetblack Sharia', price: 450000, color: 'Deep Black', image: '/abaya.png' },
        { id: 4, name: 'Pashmina Silk Soft', price: 85000, color: 'Dusty Rose', image: '/pashmina.png' },
        { id: 5, name: 'Mukenah Travel Set', price: 150000, color: 'Emerald Green', image: '/mukena.png' },
        { id: 6, name: 'Khimar Syar\'i Layer', price: 110000, color: 'Soft Lavender', image: '/khimar.png' },
    ];

    const addToCart = (product) => { setCart([...cart, product]); };
    const subtotal = cart.reduce((total, item) => total + item.price, 0);
    const zakat = subtotal * 0.025;
    const totalHarga = subtotal + zakat;

    return (
        <div className="flex h-screen bg-[#F8FAFC]">
            <div className="flex-1 p-8 overflow-y-auto">
                <header className="mb-8">
                    <p className="text-emerald-600 font-bold tracking-widest text-xs uppercase">— Premium Syariah Clothes</p>
                    <h1 className="text-4xl font-black text-slate-800">Inclothes</h1>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <div key={product.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                            <div className="w-full h-52 bg-slate-100">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <p className="text-[10px] text-slate-400 uppercase font-bold">{product.color}</p>
                                <h3 className="text-lg font-bold text-slate-700">{product.name}</h3>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-xl font-black text-slate-800">Rp {product.price.toLocaleString('id-ID')}</p>
                                    <button onClick={() => addToCart(product)} className="bg-emerald-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg">+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-[400px] bg-white border-l border-slate-100 flex flex-col p-8">
                <h2 className="text-2xl font-black text-slate-800 mb-6">Keranjang</h2>
                <div className="flex-1 overflow-y-auto space-y-4">
                    {cart.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl">
                            <p className="font-bold text-slate-700 text-sm">{item.name}</p>
                            <p className="font-bold text-slate-800 text-sm">Rp {item.price.toLocaleString('id-ID')}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="flex justify-between text-slate-500 text-sm mb-2"><span>Subtotal</span><span>Rp {subtotal.toLocaleString('id-ID')}</span></div>
                    <div className="flex justify-between text-emerald-600 font-bold bg-emerald-50 p-3 rounded-2xl mb-4"><span>✨ Zakat (2.5%)</span><span>+ Rp {zakat.toLocaleString('id-ID')}</span></div>
                    <p className="text-3xl font-black text-slate-900 mb-6">Rp {totalHarga.toLocaleString('id-ID')}</p>
                    <button className="w-full bg-slate-900 text-white py-5 rounded-3xl font-bold">Selesaikan Transaksi</button>
                </div>
            </div>
        </div>
    );
}